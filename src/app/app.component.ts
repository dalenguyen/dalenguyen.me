import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './libs/shell/sidebar/sidebar/sidebar.component';
import { FooterComponent } from './libs/shell/footer/footer.component';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="flex h-full">
      <div class="flex flex-row-reverse">
        <a
          class="cursor-pointer block lg:hidden"
          pStyleClass="@next"
          enterFromClass="hidden"
          leaveToClass="hidden"
        >
          <i class="pi pi-bars text-4xl"></i>
        </a>
        <app-sidebar class=" lg:block" />
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
