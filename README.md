# Angular Homes App

- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Clone this branch to your local machine

  `git clone -b homes-app-start git@github.com:angular/codelabs.git homes-app`

- Once the code has been downloaded

  `cd homes-app`

- Install the depencies

  `npm install`

- Run the application

  `ng serve`

  Lesson #1 Creating A Component
  `ng generate component Home --standalone --inline-template`

  Shorthand of Generating Component

  `ng g c details --standalone --inline-template`
  g = generate
  c = component

  Property Binding Method
  `<img class="listing-photo" [src]="housingLocation?.photo" />`
  using [src]: allows the element to use property binding

  Event Binding Method
  `<form [formGroup]="applyForm" (submit)="submitApplication()">`

  using (submit) : "{functionName()"} : allows the HTMLbutton to use event binding
