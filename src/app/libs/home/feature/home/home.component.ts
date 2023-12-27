import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IntroComponent } from "../../ui/intro/intro.component";

@Component({
  selector: "app-home",
  standalone: true,
  template: ` <app-intro /> `,
  styles: ``,
  imports: [CommonModule, IntroComponent],
})
export class HomeComponent {}
