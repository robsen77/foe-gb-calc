import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfigurationService {
  private _cookieName: string = 'foe-gb-calc';

  constructor() { }

  public getCookieName() {
    return this._cookieName;
  }
}
