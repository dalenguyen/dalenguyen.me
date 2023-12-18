import { injectContentFiles } from '@analogjs/content';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from 'src/app/models/post';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Posts</h2>

    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="[post.slug]">{{ post.attributes.title }}</a>
      </li>
    </ul>
  `,
})
export default class BlogPage {
  posts = injectContentFiles<BlogPost>();
}
