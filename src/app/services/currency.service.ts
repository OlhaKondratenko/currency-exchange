import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../Users/Aleksandr/Desktop/currency-backup/environment";


@Injectable({
    providedIn: "root"
})

export class CurrencyService {
    constructor(private http: HttpClient) {
    }

    public getUsdInfo() {
        return this.http.get<any>(`https://v6.exchangerate-api.com/v6/${environment.apiKey}/latest/USD`)
    }

    public getEurInfo() {
        return this.http.get<any>(`https://v6.exchangerate-api.com/v6/${environment.apiKey}/latest/EUR`)
    }

    public convert(from: string, to: string, amount: string) {
        return this.http.get<any>(`https://v6.exchangerate-api.com/v6/${environment.apiKey}/pair/${from}/${to}/${amount}`)
    }
}
