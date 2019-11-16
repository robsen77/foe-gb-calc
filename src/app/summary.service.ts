import { Injectable } from '@angular/core';

import { SlotService } from './slot.service';
import { CostsService } from './costs.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private _costs;
  private _prefix: string = "";
  private _suffix: string = "";
  private _building: string = "";

  constructor(private slotService: SlotService, private costsService: CostsService) {
    this.costsService.costs.subscribe(costs => {
      this._costs = costs;
      this.createSummary();
    });

    this.slotService.slotBehaviorObservable.subscribe(slots => {
      this.createSummary();
    });
  }

  private createSummary() {
    let openSlots = this.slotService.getOpenSlots().reverse();
    let openSlotsStr = [];
    let summary: string = "";

    for (let slot of openSlots) {
      openSlotsStr.push("P" + slot + " (" + this._costs.rankData[slot - 1].cost + ")");
    }

    if (openSlotsStr.length > 0) {

      if (this._prefix != "") {
        summary += this._getInterpolated(this._prefix) + " ";
      }

      summary += openSlotsStr.join(" ");

      if (this._suffix != "") {
        summary += " " + this._getInterpolated(this._suffix);
      }
    }

    return summary;
  }

  public getSummary() {
    return this.createSummary();
  }

  public setSuffix(suffix) {
    this._suffix = suffix;
  }

  public setPrefix(prefix) {
    this._prefix = prefix;
  }

  public setBuilding(building) {
    this._building = building;
  }

  private _getInterpolated(str: string): string {
    return str.replace('{LG}', this._building);
  }
}
