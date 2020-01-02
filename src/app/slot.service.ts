import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlotService {
  private _openSlots = {1: false, 2: false, 3: false, 4: false, 5: false };
  private _slotBehavior = new BehaviorSubject({});
  public slotBehaviorObservable = this._slotBehavior.asObservable();

  constructor() { }

  public getSlots(): Object {
    return this._openSlots;
  }

  public setSlots(slots): void {
    this._openSlots = slots;
    this._slotBehavior.next(slots);
  }

  public resetSlots(): void {
    this._openSlots = { 1: false, 2: false, 3: false, 4: false, 5: false };
    this._slotBehavior.next(this._openSlots);
  }
}
