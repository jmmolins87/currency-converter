import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {

  public amount: number = 0;
  public iHave: string = '$';
  public iWant: string = '€';
  public total: number = 0;
  public currencies: string[] = ['$', '€', '£'];

  constructor() { }

  changeCurrency() {
    switch( this.iHave ) {
      case '$':
        if( this.iWant === '$' ) {
        this.total = this.amount;
        }
        if ( this.iWant === '€') {
          this.total = this.amount * 0.94;
        }
        if ( this.iWant === '£') {
          this.total = this.amount * 0.83;
        }
        break;
      case '€':
        if( this.iWant === '$' ) {
          this.total = this.amount * 1.06;
        }
        if( this.iWant === '€' ) {
          this.total = this.amount;
        }
        if (this.iWant === '£') {
          this.total = this.amount * 0.88;
        }
        break;
      case '£':
        if( this.iWant === '$' ) {
          this.total = this.amount * 1.20;
        }
        if( this.iWant === '€' ) {
          this.total = this.amount * 1.14;
        }
        if (this.iWant === '£') {
          this.total = this.amount;
        }
        break;
    }
  }

}
