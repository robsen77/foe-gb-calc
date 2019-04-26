import { Component, OnInit } from '@angular/core';
import { CostsService } from './costs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FOE LG Kalkulator';
  costs;

  constructor(private _costsService: CostsService) { }

  ngOnInit() {
    this._costsService.costs.subscribe(costs => this.costs = costs)
  }
}
