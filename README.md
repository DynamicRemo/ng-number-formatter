# Angular Number Formatter

Number Formatter for [Angular](http://angular.io); Transforms the number into human readable formats ['', 'metrics-symbol', 'metrics-name', 'comma', 'emoji']. Integers, floating point numbers, negative and also numeric strings can be formatted as numerical Metrics Symbols, Comma separated and Emojified 🔢
* 37474
    - default: 37.5K
    - metrics-symbol: 37.5K
    - metrics-name: 37.5 thousands
    - comma: 37,474
    - emoji:  3️⃣ 7️⃣ 4️⃣ 7️⃣ 4️⃣ 
* 1222130 -> 1.2M | 1.2 million | 1,222,130 |  1️⃣ 2️⃣ 2️⃣ 2️⃣ 1️⃣ 3️⃣ 0️⃣ 
* 12414770 -> 12.4M | 12.4 million | 12,414,770 |  1️⃣ 2️⃣ 4️⃣ 1️⃣ 4️⃣ 7️⃣ 7️⃣ 0️⃣ 
* 19121364128 -> 19.1B | 19.1 billion | 12,121,364,128 |  1️⃣ 9️⃣ 1️⃣ 2️⃣ 1️⃣ 3️⃣ 6️⃣ 4️⃣ 1️⃣ 2️⃣ 8️⃣ 

# Installation
```js
npm install ng-number-formatter --save
```

# Usage

### Import `NgNumberFormatterModule`

You need to import the `NgNumberFormatterModule` in the module of your app where you want to use it.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgNumberFormatterModule } from 'ng-number-formatter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgNumberFormatterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Use the `ng-number-formatter` selector
Place the `ng-number-formatter` and pass the un-formatted number as an input to `ngNumber`

```html
<ng-number-formatter [ngNumber]="1222130"></ng-number-formatter>
<ng-number-formatter [ngNumber]="1222130" [ngFormat]="'metrics-symbol'"></ng-number-formatter>
<ng-number-formatter [ngNumber]="1222130" [ngFormat]="'metrics-name'"></ng-number-formatter>
<ng-number-formatter [ngNumber]="1222130" [ngFormat]="'comma'"></ng-number-formatter>
<ng-number-formatter [ngNumber]="1222130" [ngFormat]="'emoji'"></ng-number-formatter>
```

# Demo App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1 and works perfectly fine with the latest Angular Builds (last tested with the versions upto 11.0.5). You can consume the Demo App with in the Repository and can understand the flow of how this Package works.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Further details here in this ReadMe is to extend this project.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
