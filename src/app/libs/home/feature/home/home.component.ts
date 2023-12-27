import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { BiographyComponent } from '../../ui/biography/biography.component'
import { ContactComponent } from '../../ui/contact/contact.component'
import { IntroComponent } from '../../ui/intro/intro.component'

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-intro />
    <app-biography />
    <app-contact />
  `,
  imports: [CommonModule, IntroComponent, BiographyComponent, ContactComponent],
})
export class HomeComponent {}
