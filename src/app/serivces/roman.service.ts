import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RomanService {
  constructor() {}

  romanToNumber(numeral: string): number {
    let conversion = 0;
    const numeralArray = numeral.toUpperCase().split('');
    console.log(numeralArray);

    if (numeralArray.length === 1) {
      conversion = this.numberals(numeralArray[0]);
    }

    if (numeralArray.length > 1) {
      let value = 0;

      for (let i = 0; i < numeralArray.length; i++) {
        const currentValue = this.numberals(numeralArray[i]);

        if (i + 1 < numeralArray.length) {
          const nextValue = this.numberals(numeralArray[i + 1]);
          if (currentValue >= nextValue) {
            value += currentValue;
          }
          if (currentValue < nextValue) {
            value += nextValue - currentValue;
            i++;
          }
        } else {
          value += currentValue;
        }
      }

      return value;
    }

    return conversion;
  }

  numberals(charecter: string): number {
    let returnNumber: number;
    switch (charecter) {
      case 'I':
        returnNumber = 1;
        break;
      case 'V':
        returnNumber = 5;
        break;
      case 'X':
        returnNumber = 10;
        break;
      case 'L':
        returnNumber = 50;
        break;
      case 'C':
        returnNumber = 100;
        break;
      case 'D':
        returnNumber = 500;
        break;
      case 'M':
        returnNumber = 1000;
        break;
    }
    return returnNumber;
  }
}
