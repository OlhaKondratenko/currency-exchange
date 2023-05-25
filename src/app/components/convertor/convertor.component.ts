import {Component} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";

interface Currencies {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-convertor',
    templateUrl: './convertor.component.html',
    styleUrls: ['./convertor.component.css'],
})
export class ConvertorComponent {
    public currencies: Currencies[] = [
        {value: 'UAH', viewValue: 'UAH'},
        {value: 'EUR', viewValue: 'EUR'},
        {value: 'USD', viewValue: 'USD'},
        {value: 'GBP', viewValue: 'GBP'},
    ];

    public fromValue = null;
    public toValue = null;
    public fromCurrency = 'USD';
    public toCurrency = 'UAH';

    public lastTouchedInput = '';

    constructor(private currencyService: CurrencyService) {
    }

    convert() {
        if (this.fromCurrency !== '' && this.toCurrency !== '' && this.fromValue !== null) {
            this.currencyService.convert(this.fromCurrency, this.toCurrency, this.fromValue).subscribe((response) => this.toValue = response.conversion_result)
            this.lastTouchedInput = 'from'
        }

        if (this.fromValue === null) {
            this.toValue = null
        }
    }

    convertBack() {
        if (this.fromCurrency !== '' && this.toCurrency !== '' && this.toValue !== null) {
            this.currencyService.convert(this.toCurrency, this.fromCurrency, this.toValue).subscribe((response) => this.fromValue = response.conversion_result)
            this.lastTouchedInput = 'to'
        }

        if (this.toValue === null) {
            this.fromValue = null
        }
    }

    convertOnToSelect() {
        if (this.lastTouchedInput === 'from') {
            this.convert();
            return;
        }
        this.convertBack();
    }

}
