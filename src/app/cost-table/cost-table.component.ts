import { Component, OnInit } from '@angular/core';

import { CostsService } from '../costs.service';

@Component({
  selector: 'app-cost-table',
  templateUrl: './cost-table.component.html',
  styleUrls: ['./cost-table.component.css']
})
export class CostTableComponent implements OnInit {
  public costs = {};
  public prefix: string = "Arche";
  public suffix: string = "";
  public summary: string = "";
  public openSlot;

  constructor(private _costsService: CostsService) {
    this.openSlot = [false, false, false, false, false];
  }

  ngOnInit() {
    this._costsService.costs.subscribe(costs => {
      this.costs = costs;
      this.changeSummary();
    });
  }

  changeSummary() {
    this.summary = "";

    let slots = [];
    for (let i = 0; i < 5; i++) {
      if (this.openSlot[i] === true) {
        slots.push("P" + (i + 1) + " (" + this.costs.rankData[i].cost + ")");
      }
    }

    if (slots.length > 0) {

      if (this.prefix != "") {
        this.summary += this.prefix + " ";
      }

      this.summary += slots.join(", ");

      if (this.suffix != "") {
        this.summary += " " + this.suffix;
      }
    }
  }

  copy2Clipboard() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.summary;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
