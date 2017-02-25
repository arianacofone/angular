// This is the root component of your angular app

import { Component } from '@angular/core';

@Component({
  selector: 'angular',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
