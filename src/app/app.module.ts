import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes } from '@angular/router';

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
import { GbCalcComponent } from './gb-calc/gb-calc.component';
import { OwnShareComponent } from './own-share/own-share.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OwnShareTableComponent } from './own-share-table/own-share-table.component';

const appRoutes: Routes = [
  { path: '', component: GbCalcComponent },
  { path: 'own-share', component: OwnShareComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LevelSelectorComponent,
    CostTableComponent,
    SummaryComponent,
    SnipingComponent,
    GbCalcComponent,
    OwnShareComponent,
    PageNotFoundComponent,
    OwnShareTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
