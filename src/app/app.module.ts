import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgNumberFormatterModule } from './modules/ng-number-formatter/ng-number-formatter.module';

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
