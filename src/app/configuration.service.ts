import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfigurationService {
  private selectionCookieName: string = 'foe-gb-calc-selection';
  private userDataCookieName: string = 'foe-gb-calc-userdata';

  constructor() { }

  public getSelectionCookieName() {
    return this.selectionCookieName;
  }

  public getUserDataCookieName() {
    return this.userDataCookieName;
  }
}
