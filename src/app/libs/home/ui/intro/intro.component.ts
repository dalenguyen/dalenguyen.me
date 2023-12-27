import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";

@Component({
  selector: "app-intro",
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule],
  template: `
    <div id="intro" class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img src="assets/images/home/intro.jpg" alt="hero image" class="absolute inset-0 h-full w-full object-cover" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1097 845"
        aria-hidden="true"
        class="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        <path
          fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
          fill-opacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="10724532-9d81-43d2-bb94-866e98dd6e42"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#776FFF"></stop>
            <stop offset="1" stop-color="#FF4694"></stop>
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1097 845"
        aria-hidden="true"
        class="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        <path
          fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
          fill-opacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#776FFF"></stop>
            <stop offset="1" stop-color="#FF4694"></stop>
          </linearGradient>
        </defs>
      </svg>

      <div class="mx-auto max-w-2xl text-center relative px-6 lg:px-8">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Howdy 👋</h2>
        <p class="my-6 text-lg leading-8 text-gray-300">
          My name is Dale Nguyen. I am a Toronto based digital architect. My competent professional work environments
          are Angular, GCP, NodeJS, JavaScript/TypeScript, SQL/NoSQL, HTML5 and CSS, Linux, Docker...
        </p>

        <div class="mb-6">
          <p-button pRipple label="Let's meet" icon="pi pi-arrow-down" />
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class IntroComponent {}
