import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SniperService {
  private _snipers: Array<Number> = [];

  constructor() { }

  public addSniper(sniper) {
    this._snipers.push(sniper);
  }

  public removeSniper(sniper) {
    let index = this._snipers.indexOf(sniper);
    if (index !== -1) {
      this._snipers.splice(index, 1);
    }
  }

  public getSnipers():Array<Number> {
    return this._snipers;
  }
}
