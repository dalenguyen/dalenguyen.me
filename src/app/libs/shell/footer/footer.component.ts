import { CommonModule } from '@angular/common'
import { Component, VERSION } from '@angular/core'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div class="border-t border-slate-900/5 py-4">
        <p class="mt-5 text-center text-sm leading-6 text-slate-500">
          Dale Nguyen © {{ currentYear }} - By using Angular
          {{ angularVersion }} &
          <a href="https://analogjs.org/" target="_blank">Analogjs</a>
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear()
  angularVersion = VERSION.major
}
