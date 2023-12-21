import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';

export const routeMeta: RouteMeta = {
  title: 'Home | Dale Nguyen',

  meta: [
    { name: 'og:title', content: 'Home | Dale Nguyen' },
    {
      name: 'og:description',
      content: `Just a normal person who tries to explore the world and find his purpose.`,
    },
    { name: 'og:url', content: 'https://dalenguyen.me' },
    {
      name: 'og:image',
      content: 'https://dalenguyen.me/assets/images/dale-nguyen-avatar.jpeg',
    },
    { name: 'type', content: 'website' },
  ],
};
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <a href="https://analogjs.org/" target="_blank">
        <img alt="Analog Logo" class="logo analog" src="/assets/analog.svg" />
      </a>
    </div>

    <h2>Analog</h2>

    <h3>The fullstack meta-framework for Angular!</h3>

    <div class="card">
      <button type="button" (click)="increment()">Count {{ count }}</button>
    </div>

    <p class="read-the-docs">
      For guides on how to customize this project, visit the
      <a href="https://analogjs.org" target="_blank">Analog documentation</a>
    </p>
  `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.angular:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
