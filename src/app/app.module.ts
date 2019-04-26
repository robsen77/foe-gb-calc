import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LevelSelectorComponent } from './level-selector/level-selector.component';
import { CostTableComponent } from './cost-table/cost-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelSelectorComponent,
    CostTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
