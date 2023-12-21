import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ButtonModule, SidebarModule],
  template: `
    <div class="flex justify-content-center">
      SIDEBAR

      <p-button
        (click)="sidebarVisible = true"
        icon="pi pi-arrow-right"
      ></p-button>
    </div>
  `,
  styles: ``,
})
export class SidebarComponent {
  sidebarVisible: boolean = true;

  test() {
    console.log('????');
  }
}
