import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgNumberFormatterComponent } from './ng-number-formatter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgNumberFormatterComponent
  ],
  exports: [
    NgNumberFormatterComponent
  ]
})
export class NgNumberFormatterModule { }
