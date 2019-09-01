import { Component, OnInit, NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  providers: [{ provide: APP_BASE_HREF, useValue: '/foe-gb-calc' }]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'FOE Tools';
  lgCalcTitle = 'LG Rechner';
  ownShareTitle = 'Eigenanteilsrechner';

  constructor() { }

  ngOnInit() {}
}
