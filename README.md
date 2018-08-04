# Angular Number Formatter

Number Formatter for [Angular](http://angular.io); formats the number into human readable format when in Thousands, Millions and Billions.
* 307474 -> 307.5K
* 1222130 -> 1.2M
* 12414770 -> 12.4M
* 19121364128 -> 19.1B

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
import { NgNumberFormatterModule } from 'ng-number-formatter.module';

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
```


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
