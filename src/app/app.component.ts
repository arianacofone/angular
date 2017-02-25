// This is the root component of your angular app

import { Component } from '@angular/core';

@Component({
  // Selector selects the HTML element to put the template in
  selector: 'my-app',

  // Template takes data exported below and add it to the HTML elements
  // The double curlys denote interpolation/data binding
  template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`,
})

// Allows you to export properties from your database
export class AppComponent  {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}
