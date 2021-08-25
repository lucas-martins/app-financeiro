import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinancialMenuComponent } from 'src/modules/financial-menu/financial-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { PeriodComponent } from './components/period/period.component';
import { FinancialInfoComponent } from '../modules/financial-info/financial-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancialMenuComponent,
    HeaderComponent,
    PeriodComponent,
    FinancialInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
