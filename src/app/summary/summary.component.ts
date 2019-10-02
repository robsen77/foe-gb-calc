import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { CostsService } from '../costs.service';
import { SlotService } from '../slot.service';
import { SummaryService } from '../summary.service';
import { ConfigurationService } from '../configuration.service';

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
    private summaryService: SummaryService,
    private config: ConfigurationService,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.initCookie();
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
    this.storeCookie();
  }

  public changeSuffix() {
    this.summaryService.setSuffix(this.suffix);
    this.changeSummary();
    this.storeCookie();
  }

  public copy2Clipboard() {
    let input = document.getElementById('summarycopymanual') as HTMLInputElement;
    input.focus();
    input.select();
    input.setSelectionRange(0, 9999);
    document.execCommand('copy');
  }

  private initCookie() {
    if (this.cookieService.check(this.config.getUserDataCookieName())) {
      let cookie = JSON.parse(this.cookieService.get(this.config.getUserDataCookieName()));

      this.prefix = cookie.prefix;
      this.suffix = cookie.suffix;

      this.summaryService.setPrefix(this.prefix);
      this.summaryService.setSuffix(this.suffix);
    }
  }

  private storeCookie() {
    let cookie = {
      prefix: this.prefix,
      suffix: this.suffix
    };

    this.cookieService.set(this.config.getUserDataCookieName(), JSON.stringify(cookie), this.config.getCooieExpireDays());
  }
}
