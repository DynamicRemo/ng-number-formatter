import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-number-formatter',
  inputs: ['ngNumber'],
  template: '<span>{{ngOutputNumber}}</span>',
})

export class NgNumberFormatterComponent implements OnInit {
  ngNumber: number | string;
  ngOutputNumber: string;

  constructor() { }

  ngOnInit() {
    // to process both numbers and strings
    const incomingString = this.ngNumber.toString();
    const incomingNumber = parseInt(incomingString);
    if (isNaN(incomingNumber)) {
      // if its not a number then return as it is!
      this.ngOutputNumber = incomingString;
    } else {
      // handling minus sign for negative numbers
      this.ngOutputNumber = (incomingNumber > 0) ? '' : '-';
      this.ngOutputNumber += this.nFormatter(Math.abs(incomingNumber));
    }
  }

  nFormatter(num, digits = 1) {
    const si = [
      { value: 1E18, symbol: "E" },
      { value: 1E15, symbol: "P" },
      { value: 1E12, symbol: "T" },
      { value: 1E9, symbol: "B" },
      { value: 1E6, symbol: "M" },
      { value: 1E3, symbol: "K" }
    ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    for (let i = 0; i < si.length; i++) {
      if (num >= si[i].value) {
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
      }
    }
    return num.toFixed(digits).replace(rx, "$1");
  }
}
