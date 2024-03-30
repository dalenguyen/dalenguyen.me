import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 class="mt-6 md:mt-4">My Blog</h1>

    <router-outlet />
  `,
  styles: `

  :host {
    display: block;
    padding: 0 2rem;
    height: 100vh;
  }
  `
})
export default class Blog {}
