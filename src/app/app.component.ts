import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './libs/shell/sidebar/sidebar/sidebar.component';
import { FooterComponent } from './libs/shell/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="flex h-full">
      <app-sidebar />
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
  imports: [RouterOutlet, SidebarComponent, FooterComponent],
})
export class AppComponent {}
