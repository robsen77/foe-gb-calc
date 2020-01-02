import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SlotService } from './slot.service';
import { CostsService } from './costs.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private _costs;
  private _prefix: string = "";
  private _suffix: string = "";
  private _building;
  private _slots;

  constructor(private slotService: SlotService, private costsService: CostsService) {
    this.costsService.costs.subscribe(costs => {
      this._costs = costs;
      this.createSummary();
    });

    this.slotService.slotBehaviorObservable.subscribe(slots => {
      this._slots = slots;
      this.createSummary();
    });
  }

  private createSummary() {
    let openSlotsStr = [];
    let summary: string = "";

    for (let place in this._slots) {
      if (!this._slots[place]) {
        continue;
      }

      let rank = Number(place) + 1;
      openSlotsStr.push("P" + rank + " (" + this._costs.rankData[rank - 1].cost + ")");
    }

    openSlotsStr = openSlotsStr.reverse();

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
    str = str.replace('{LG}', this._building.name);
    str = str.replace('{LGS}', this._building.shortname);
    return str;
  }
}
