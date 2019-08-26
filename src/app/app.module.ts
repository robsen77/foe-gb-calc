import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { LOCALE_ID } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe, localeDeExtra);

import { AppComponent } from './app.component';
import { LevelSelectorComponent } from './level-selector/level-selector.component';
import { CostTableComponent } from './cost-table/cost-table.component';
import { SummaryComponent } from './summary/summary.component';
import { SnipingComponent } from './sniping/sniping.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelSelectorComponent,
    CostTableComponent,
    SummaryComponent,
    SnipingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
