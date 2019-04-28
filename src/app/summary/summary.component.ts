import { Component, OnInit } from '@angular/core';

import { CostsService } from '../costs.service';
import { SlotService } from '../slot.service';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  public prefix: string = "";
  public suffix: string = "";
  public summary: string = "";

  private _costs;

  constructor(
    private costsService: CostsService,
    private slotService: SlotService,
    private summaryService: SummaryService) { }

  ngOnInit() {
    this.costsService.costs.subscribe(costs => {
      this._costs = costs;
      this.changeSummary();
    });

    this.slotService.slotBehaviorObservable.subscribe(slots => {
      this.changeSummary();
    });
  }

  public changeSummary() {
    this.summary = this.summaryService.getSummary();
  }

  public changePrefix() {
    this.summaryService.setPrefix(this.prefix);
    this.changeSummary();
  }

  public changeSuffix() {
    this.summaryService.setSuffix(this.suffix);
    this.changeSummary();
  }

  public copy2Clipboard() {
    let input = document.getElementById('summarycopymanual');
    input.focus();
    input.select();
    document.execCommand('copy');
  }
}
