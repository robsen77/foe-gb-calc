import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlotService {
  private _openSlots = [false, false, false, false, false];
  private _slotBehavior = new BehaviorSubject({});
  public slotBehaviorObservable = this._slotBehavior.asObservable();

  constructor() { }

  public getSlots(): Array<boolean> {
    return this._openSlots;
  }

  public setSlots(slots): void {
    this._openSlots = slots;
    this._slotBehavior.next(slots);
  }

  public getOpenSlots(): Array<number> {
    return this._openSlots.reduce(function (acc, curr, index) {
      if (curr == true) {
        acc.push(index + 1);
      }
      return acc;
    }, []);
  }
}
