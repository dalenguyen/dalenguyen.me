import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { BiographyComponent } from '../../ui/biography/biography.component'
import { IntroComponent } from '../../ui/intro/intro.component'

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-intro />
    <app-biography />
  `,
  imports: [CommonModule, IntroComponent, BiographyComponent],
})
export class HomeComponent {}
