import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <!-- This example requires Tailwind CSS v3.0+ -->
    <div class="grid m-0" id="contact">
      <div class="col-12 lg:col-6 relative overflow-hidden p-0">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          alt=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 926 676"
          aria-hidden="true"
          class="absolute left-8 -bottom-8 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fill-opacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#776FFF"></stop>
              <stop offset="1" stop-color="#FF4694"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="col-12 lg:col-6 relative mx-auto py-8 bg-gray-900">
        <div class="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0">
          <h2 class="text-base font-semibold leading-7 text-indigo-400">
            Contact
          </h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-white">
            Let's work together
          </p>
          <p class="mt-6 text-base leading-7 text-gray-300">
            If you have something interesting, shoot me an email.
          </p>
          <div class="mt-8">
            <a href="mailto:dale@dalenguyen.me" pButton>Email me</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ContactComponent {}
