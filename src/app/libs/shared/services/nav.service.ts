import { DOCUMENT } from '@angular/common'
import { Injectable, inject } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private document = inject(DOCUMENT)
  target = new Subject()

  navigateTo(section: string) {
    try {
      this.document
        .querySelector('#' + section)
        ?.scrollIntoView({ behavior: 'smooth' })
    } catch (e) {
      console.error(e)
    }
  }
}
