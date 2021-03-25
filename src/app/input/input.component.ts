import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RomanService } from '../serivces/roman.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  numeralForm: FormGroup;
  numeralConversion: number;
  numberConversion: string;
  numeralInput: any;
  numberInput: any;

  constructor(private romanService: RomanService) {}

  ngOnInit(): void {
    this.createForm();
    this.numeralInput = document.getElementById('numeral');
    this.numberInput = document.getElementById('number');
  }

  createForm(): void {
    this.numeralForm = new FormGroup({
      numeral: new FormControl('', [
        Validators.pattern(
          '^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})m{0,3}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$',
        ),
      ]),
      number: new FormControl('', [Validators.max(3999), Validators.min(1)]),
    });
  }

  onChange(event): void {
    console.log(this.numeralForm);

  }

  onSubmit(): void {
    console.log(this.numeralForm.value);
    if (this.numeralForm.value.numeral) {
      this.numeralInput = this.numeralForm.value.numeral;
      this.numeralConversion = this.romanService.romanToNumber(this.numeralForm.value);
    }
    if (this.numeralForm.value.number) {
      this.numberInput = this.numeralForm.value.number;
      this.numberConversion = this.romanService.numberToRoman(this.numeralForm.value);
    }
  }
}
