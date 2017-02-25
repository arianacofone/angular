// This file compiles (using JIT Compiler) the app main
// module (AppModule) and runs it in the browser. 

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
