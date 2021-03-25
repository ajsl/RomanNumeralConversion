import { Injectable } from '@angular/core';
import { IValues } from '../models/values';

@Injectable({
  providedIn: 'root',
})
export class RomanService {
  constructor() {}

  romanToNumber(values: IValues): number {
    let conversion = 0;
    const numeral = values.numeral;
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

  numberToRoman(values: IValues): string {
    let numberValue = values.number;
    let numerals = '';
    const romanNumberList = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XV: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

    let current: number;

    // tslint:disable-next-line: forin
    for (const key in romanNumberList){
      current = Math.floor(numberValue / romanNumberList[key]);
      if (current >= 0){
        for (let i = 0; i < current; i++ ){
          numerals += key;
        }
      }
      numberValue = numberValue % romanNumberList[key];
    }

    return numerals;

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
