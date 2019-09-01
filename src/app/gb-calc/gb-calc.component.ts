import { Component, OnInit } from '@angular/core';
import { CostsService } from '../costs.service';

@Component({
  selector: 'app-gb-calc',
  templateUrl: './gb-calc.component.html',
  styleUrls: ['./gb-calc.component.css']
})
export class GbCalcComponent implements OnInit {
  costs;

  constructor(
    private costsService: CostsService
  ) { }

  ngOnInit() {
    this.costsService.costs.subscribe(costs => this.costs = costs);
  }

}
