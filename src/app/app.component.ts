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
        @if (sidebarService.showSidebar() === false) {
          <div class="fixed lg:hidden z-1 top-0 left-0 mt-1 ml-1">
            <p-button
              icon="pi pi-bars"
              (click)="sidebarService.toggleSidebar()"
              severity="secondary"
              size="small"
            />
          </div>
        } @else {
          <div
            class="backdrop w-screen sm:hidden opacity-0 z-1 absolute left-0 top-0 h-screen"
            (click)="sidebarService.closeSidebar()"
          ></div>
          <app-sidebar class="block z-2" />
        }
      </div>
      <div class="overflow-scroll w-full">
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
