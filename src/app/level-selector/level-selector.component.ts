import { Component, OnInit } from '@angular/core';
import { CostsService } from '../costs.service';
import { GlobalBuildingService } from '../global-building.service';
import { SummaryService } from '../summary.service';
import { CookieService } from 'ngx-cookie-service';
import { ConfigurationService } from '../configuration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-level-selector',
  templateUrl: './level-selector.component.html',
  styleUrls: ['./level-selector.component.css']
})
export class LevelSelectorComponent implements OnInit {

  public level = 30;
  public levelFrom = 1;
  public levelTo = 80;
  public globalBuildings;
  public gb = 'arc';
  public factors = [1.85, 1.9];
  public factor = 1.9;
  public mode = 'gb-calc';

  constructor(
    private costsService: CostsService,
    private globalBuildingService: GlobalBuildingService,
    private summaryService: SummaryService,
    private cookieService: CookieService,
    private config: ConfigurationService,
    private route: ActivatedRoute
  ) {
    this.initCookie();
    this.costsService.setBuilding(this.gb);
    this.costsService.setLevel(this.level);
    this.costsService.setLevelFrom(this.levelFrom);
    this.costsService.setLevelTo(this.levelTo);
    this.costsService.setFactor(this.factor);
  }

  ngOnInit() {
    this.costsService.calculateCosts();
    this.globalBuildingService.getGlobalBuildings().subscribe(globalBuildings => {
      this.globalBuildings = globalBuildings;
      this.summaryService.setBuilding(this._getGlobalBuildingByKey(this.gb).name);
    });

    this.mode = this.route.snapshot.routeConfig.path == 'own-share' ? 'own-share' : 'gb-calc';
  }

  public levelChanged() {
    this.costsService.setLevel(this.level);
    this.storeCookie();
  }

  public levelFromToChanged() {
    this.costsService.setLevelFrom(this.levelFrom);
    this.costsService.setLevelTo(this.levelTo);
  }

  public factorChanged() {
    this.costsService.setFactor(this.factor);
    this.storeCookie();
  }

  public globalBuildingChanged() {
    this.costsService.setBuilding(this.gb);
    this.summaryService.setBuilding(this._getGlobalBuildingByKey(this.gb).name);
    this.storeCookie();
  }

  private _getGlobalBuildingByKey(key) {
    for (let obj of this.globalBuildings) {
      if (obj.key === key) {
        return obj;
      }
    }
  }

  private initCookie() {
    if (this.cookieService.check(this.config.getSelectionCookieName())) {
      let cookie = JSON.parse(this.cookieService.get(this.config.getSelectionCookieName()));
      this.gb = cookie.gb;
      this.level = cookie.level;
      this.factor = cookie.factor;
    }
  }

  private storeCookie() {
    let cookie = {
      gb: this.gb,
      level: this.level,
      factor: this.factor
    };

    this.cookieService.set(this.config.getSelectionCookieName(), JSON.stringify(cookie), this.config.getCooieExpireDays());
  }
}
