import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { AvatarModule } from 'primeng/avatar'
import { ButtonModule } from 'primeng/button'
import { DividerModule } from 'primeng/divider'
import { NavService, SidebarService } from '../../../shared/services'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ButtonModule, AvatarModule, DividerModule],
  template: `
    <div class="bg-black-alpha-80 p-4 text-white h-full min-w-max">
      <!-- Header -->
      <div id="header">
        <div class="top mb-8 text-right ">
          <!-- Logo -->
          <div id="logo" class="flex justify-content-between">
            <p-avatar
              image="assets/images/dale-nguyen-avatar.jpeg"
              size="xlarge"
              shape="square"
            />
            <div>
              <h1 id="title" class="m-0">Dale Nguyen</h1>
              <p>Software Engineer</p>
              <p>Toronto Canada</p>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <!-- Nav -->
          <nav id="nav">
            <ul class="list-none p-0">
              <li
                class="p-2 mb-6 font-semibold text-xl cursor-pointer"
                [ngClass]="isActive('intro')"
                (click)="scroll('intro')"
              >
                <div id="top-link" class="flex align-content-center">
                  <i class="pi pi-home mr-4" style="font-size: 2rem"></i>

                  Architectural Philosophy
                </div>
              </li>
              <li
                class="p-2 mb-6 font-semibold text-xl cursor-pointer"
                [ngClass]="isActive('blog')"
                (click)="navigateTo('blog')"
              >
                <div
                  id="blog-link"
                  class="flex align-items-center justify-content-between"
                >
                  <i class="pi pi-file-edit" style="font-size: 2rem"></i>

                  Thoughts
                </div>
              </li>
              <!-- <li [ngClass]="isActive('portfolio')" (click)="scroll('portfolio')">
          <div id="portfolio-link" class="nav flex justify-content-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-2 h-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
              />
            </svg>

            Digital Portfolio
          </div>
        </li> -->
              <li
                class="p-2 mb-6 font-semibold text-xl cursor-pointer"
                [ngClass]="isActive('about')"
                (click)="scroll('about')"
              >
                <div
                  id="about-link"
                  class="flex align-items-center justify-content-between"
                >
                  <i class="pi pi-user" style="font-size: 2rem"></i>

                  Biography
                </div>
              </li>
              <li
                class="p-2 mb-6 font-semibold text-xl cursor-pointer"
                [ngClass]="isActive('contact')"
                (click)="scroll('contact')"
              >
                <div
                  id="contact-link"
                  class="flex align-items-center justify-content-between"
                >
                  <i class="pi pi-envelope" style="font-size: 2rem"></i>

                  Contact
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <p-divider />

        <!-- Social Icons -->
        <div class="mt-8">
          <ul class="list-none p-0 flex justify-content-around">
            <li>
              <a
                href="https://www.linkedin.com/in/dalenguyenblogger/"
                class="icon"
                target="_blank"
              >
                <i
                  class="pi pi-linkedin"
                  style="font-size: 2rem; color: white"
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dalenguyen"
                class="icon"
                target="_blank"
              >
                <i
                  class="pi pi-github"
                  style="font-size: 2rem; color: white"
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/dale_nguyen"
                class="icon"
                target="_blank"
              >
                <i
                  class="pi pi-twitter"
                  style="font-size: 2rem; color: white"
                ></i>
              </a>
            </li>
            <li>
              <a href="mailto:dale@dalenguyen.me" class="icon">
                <i
                  class="pi pi-envelope"
                  style="font-size: 2rem; color: white"
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  private router = inject(Router)
  private navService = inject(NavService)
  private sidebarService = inject(SidebarService)

  activeEl = 'intro'

  // @HostListener('document:click', ['$event'])
  // clickedOut(event: Event & { target: HTMLElement }) {
  //   if (
  //     event.target?.id !== 'header' &&
  //     !event.target?.className.includes('list-none')
  //   ) {
  //     console.log('CLOSE????')
  //     this.sidebarService.closeSidebar()
  //   }
  // }

  scroll(id: string) {
    // TODO: figured out how to navigate on mobile
    this.activeEl = id
    if (this.router.url !== '/') {
      this.router.navigate([''])
      setTimeout(() => {
        this.navService.navigateTo(id)
        this.navService.target.next(null)
      }, 1000)
    } else {
      this.navService.navigateTo(id)
      this.navService.target.next(null)
    }
  }

  navigateTo(slug: string) {
    this.activeEl = 'blog'
    this.router.navigate([slug])
    this.navService.target.next(null)
  }

  isActive(id: string) {
    if (id === this.activeEl) {
      return 'active'
    }
    return ''
  }
}
