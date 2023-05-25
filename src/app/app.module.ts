import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {ConvertorComponent} from './components/convertor/convertor.component';
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        ConvertorComponent,
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
