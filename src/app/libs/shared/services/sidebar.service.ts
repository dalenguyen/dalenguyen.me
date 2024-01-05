import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  showSidebar = signal(false)

  toggleSidebar() {
    if (this.showSidebar()) {
      this.closeSidebar()
    } else {
      this.openSidebar()
    }
  }

  closeSidebar() {
    setTimeout(() => {
      this.showSidebar.set(false)
    }, 500)
  }

  openSidebar() {
    setTimeout(() => {
      this.showSidebar.set(true)
    }, 500)
  }
}
