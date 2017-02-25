// This is the root component of your angular app

import { Component } from '@angular/core';

// Creates a class object hero with an id and name
export class Hero {
  id: number;
  name: string;
}

@Component({
  // Selector selects the HTML element to put the template in
  selector: 'my-app',

  // Template takes data exported below and add it to the DOM
  // The double curlys denote interpolation/data binding
  // Now hero object is called and it's name is referenced
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input value="{{hero.name}}" placeholder="name">
    </div>
    `,
})

// Allows you to export properties from your database
export class AppComponent  {
  title = 'Tour of Heroes';
  // Now this refers to Hero object created above for information
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
