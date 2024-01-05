import { DOCUMENT } from '@angular/common'
import { Injectable, inject } from '@angular/core'
import { Subject } from 'rxjs'
import { SidebarService } from './sidebar.service'

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private document = inject(DOCUMENT)
  private sidebarService = inject(SidebarService)
  target = new Subject()

  navigateTo(section: string) {
    try {
      this.document
        .querySelector('#' + section)
        ?.scrollIntoView({ behavior: 'smooth' })

      if (this.sidebarService.showSidebar()) {
        this.sidebarService.closeSidebar()
      }
    } catch (e) {
      console.error(e)
    }
  }
}
