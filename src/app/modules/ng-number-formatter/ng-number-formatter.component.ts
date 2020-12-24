import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-number-formatter',
  inputs: ['ngNumber'],
  template: '<span>{{ngOutputNumber}}</span>',
})

export class NgNumberFormatterComponent implements OnInit {
  ngNumber: string;
  ngOutputNumber: string;

  constructor() { }

  ngOnInit() {
    const incomingNumber = parseInt(this.ngNumber);
    if (isNaN(incomingNumber)) {
      this.ngOutputNumber = (this.ngNumber).toString();
    } else {
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
