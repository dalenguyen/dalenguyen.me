import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Component, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { StyleClassModule } from 'primeng/styleclass'
import { SidebarService } from './libs/shared/services'
import { FooterComponent } from './libs/shell/footer/footer.component'
import { SidebarComponent } from './libs/shell/sidebar/sidebar/sidebar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="flex h-full">
      <div class="flex flex-row-reverse">
        <!-- <a
          class="cursor-pointer block lg:hidden fixed top-0 right-0 z-1"
          pStyleClass="@next"
          enterFromClass="hidden"
          leaveToClass="hidden"
        >
          <i
            class="pi pi-bars text-4xl surface-500 border-round opacity-60 p-1"
          ></i>
        </a> -->

        <div class="fixed z-1 top-0 left-0">
          <p-button
            icon="pi pi-bars"
            (click)="sidebarService.toggleSidebar()"
            severity="secondary"
            size="small"
          />
        </div>

        <!-- <i
          class="pi pi-bars text-4xl surface-500 border-round opacity-60 p-1"
        ></i> -->

        @if (sidebarService.showSidebar()) {
          <app-sidebar class="lg:block z-2" />
        }
      </div>
      <div>
        <main>
          <router-outlet />
        </main>
        <app-footer />
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
      }
    `,
  ],
  imports: [
    RouterOutlet,
    ButtonModule,
    StyleClassModule,
    SidebarComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  sidebarService = inject(SidebarService)
  private breakpointObserver = inject(BreakpointObserver)

  constructor() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(takeUntilDestroyed())
      .subscribe((result) => {
        if (result.matches) {
          this.sidebarService.closeSidebar()
        } else {
          this.sidebarService.openSidebar()
        }
      })
  }
}
