import {Component} from '@angular/core';
import {CurrencyService} from "./services/currency.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'currency-exchange';

    public usdCurrency: string = '';
    public eurCurrency: string = '';

    constructor(private currencyService: CurrencyService) {
    }

    subscriptions: Subscription = new Subscription();

    ngOnInit(): void {
        this.subscriptions.add(this.currencyService.getUsdInfo().subscribe(
            {
                next: (currencyData) => {
                    this.usdCurrency = currencyData.conversion_rates.UAH
                }
            }
        ))
        this.subscriptions.add(this.currencyService.getEurInfo().subscribe(
            {
                next: (currencyData) => {
                    this.eurCurrency = currencyData.conversion_rates.UAH
                }
            }
        ))
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
