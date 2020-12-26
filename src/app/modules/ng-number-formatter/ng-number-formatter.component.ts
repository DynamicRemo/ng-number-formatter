import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-number-formatter',
  inputs: ['ngNumber', 'ngFormat'],
  template: '<span>{{ngOutputNumber}}</span>',
})

export class NgNumberFormatterComponent implements OnInit {
  ngNumber: number | string;
  ngFormat: string;
  ngOutputNumber: string;

  constructor() { }

  ngOnInit() {
    // to process both numbers and strings
    const incomingString = this.ngNumber.toString();
    let incomingNumber = parseFloat(incomingString);
    if (isNaN(incomingNumber)) {
      // if its not a number then return as it is!
      this.ngOutputNumber = incomingString;
    } else {
      // handling minus sign for negative numbers
      this.ngOutputNumber = (incomingNumber > 0) ? '' : '-';
      incomingNumber = Math.abs(incomingNumber);
      switch (this.ngFormat) {
        case 'emoji':
          this.ngOutputNumber += this.emojifyNumber(incomingNumber);
          break;
        case 'comma':
          this.ngOutputNumber += this.numberWithCommas(incomingNumber);
          break;
        case 'metrics-name':
          this.ngOutputNumber += this.numberWithMetricsName(incomingNumber);
          break;
        case 'metrics-symbol':
          this.ngOutputNumber += this.numberWithMetricsSymbol(incomingNumber);
          break;
        default:
          // metrics symbol based (K thousand, M million, B billion)
          this.ngOutputNumber += this.numberWithMetricsSymbol(incomingNumber);
          // if someone sets the ngFormat value not as string or other than the expexted formats
          // console.log(`Ng-Number-Formatter: String value is requried for the property ngFormat ['', 'metrics-symbol', 'metrics-name', 'comma', 'emoji']`);
          break;
      }
    }
  }

  emojifyNumber(num) {
    let emojifiedString = '';
    const emojiArray = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    if (num <= 10) {
      emojifiedString = emojiArray[num];
    } else {
      const numString = num.toString();
      for (let i = 0; i < numString.length; i++) {
        emojifiedString += isNaN(numString.charAt(i)) ? numString.charAt(i) : emojiArray[numString.charAt(i)];
      }
    }

    return emojifiedString;
  }

  beautifyNumber(num) {
    let numString = num;
    if (num > 0) {
      if (num % 10 == 1 && num != 11) numString = `${num}st`;
      if (num % 10 == 2 && num != 12) numString = `${num}nd`;
      if (num % 10 == 3 && num != 13) numString = `${num}rd`;
      if ((num % 10 != 1 && num % 10 != 2 && num % 10 != 3) || (num == 11 || num == 12 || num == 13)) numString = `${num}th`;
    }
    return numString;
  }

  numberWithCommas(num) {
    // setting maximum to 15, so that its the maximum value possible for JS
    return num.toLocaleString('en-US', { maximumFractionDigits: 15 });
  }

  numberWithMetricsName(num, digits = 1) {
    // https://en.wikipedia.org/wiki/Peta-
    const si = [
      { value: 1E24, symbol: " septillion" },
      { value: 1E21, symbol: " sextillion" },
      { value: 1E18, symbol: " quintillion" },
      { value: 1E15, symbol: " quadrillion" },
      { value: 1E12, symbol: " trillion" },
      { value: 1E9, symbol: " billion" },
      { value: 1E6, symbol: " million" },
      { value: 1E3, symbol: " thousand" }
    ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    for (let i = 0; i < si.length; i++) {
      if (num >= si[i].value) {
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
      }
    }
    return num.toFixed(digits).replace(rx, "$1");
  }

  numberWithMetricsSymbol(num, digits = 1) {
    // https://en.wikipedia.org/wiki/Peta-
    const si = [
      { value: 1E24, symbol: "Y" },
      { value: 1E21, symbol: "Z" },
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