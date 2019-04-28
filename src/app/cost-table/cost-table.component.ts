import { Component, OnInit } from '@angular/core';

import { CostsService } from '../costs.service';
import { SlotService } from '../slot.service';

@Component({
  selector: 'app-cost-table',
  templateUrl: './cost-table.component.html',
  styleUrls: ['./cost-table.component.css']
})
export class CostTableComponent implements OnInit {
  public costs;
  public openSlots;

  constructor(private costsService: CostsService, private slotService: SlotService) {
    this.openSlots = this.slotService.getSlots();
  }

  ngOnInit() {
    this.costsService.costs.subscribe(costs => {
      this.costs = costs;
    });
  }

  public changeSlot() {
    this.slotService.setSlots(this.openSlots);
  }
}
