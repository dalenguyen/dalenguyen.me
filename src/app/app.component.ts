import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { StyleClassModule } from 'primeng/styleclass'
import { FooterComponent } from './libs/shell/footer/footer.component'
import { SidebarComponent } from './libs/shell/sidebar/sidebar/sidebar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="flex h-full">
      <div class="flex flex-row-reverse">
        <a
          class="cursor-pointer block lg:hidden fixed top-0 right-0 z-1"
          pStyleClass="@next"
          enterFromClass="hidden"
          leaveToClass="hidden"
        >
          <i
            class="pi pi-bars text-4xl surface-500 border-round opacity-60 p-1"
          ></i>
        </a>
        <app-sidebar class="hidden lg:block" />
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
  imports: [RouterOutlet, StyleClassModule, SidebarComponent, FooterComponent],
})
export class AppComponent {}
