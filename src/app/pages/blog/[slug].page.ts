import { MarkdownComponent, injectContent } from '@analogjs/content';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogPost } from 'src/app/models/post';

@Component({
  standalone: true,
  imports: [CommonModule, MarkdownComponent],
  template: `
    <div *ngIf="post$ | async as post">
      <h2>{{ post.attributes.title }}</h2>

      <analog-markdown [content]="post.content" />
    </div>
  `,
})
export default class BlogPostPage {
  post$ = injectContent<BlogPost>();
}
