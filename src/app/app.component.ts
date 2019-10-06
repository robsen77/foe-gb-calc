import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'FOE LG Kalkulator';
  lgCalcTitle = 'LG Rechner';
  ownShareTitle = 'Eigenanteilsrechner';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
