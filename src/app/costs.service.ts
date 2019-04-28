import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { GlobalBuildingService } from './global-building.service';
import { SniperService } from './sniper.service';

@Injectable({
  providedIn: 'root'
})
export class CostsService {
  private _multiplicator = 1.9;
  private _building = 'arc';
  private _level: number = 30;
  private costsSource = new BehaviorSubject({});
  public costs = this.costsSource.asObservable();


  constructor(private globalBuildingService: GlobalBuildingService, private sniperService: SniperService) { }

  public calculateCosts() {
    let rankData = []
    let buildingCost: number;
    let ownCost: number;

    this._getBuildingData().subscribe(buildingData => {
      let alreadyPaid: number = 0;
      let snipingCost: number = 0;
      let rankHedgingTotal: number = 0;
      let highRisk: boolean = false;
      let baseReward = buildingData.reward;
      buildingCost = ownCost = buildingData.cost;

      for (let rank = 1; rank <= 5; rank++) {
        let rankReward = this._calculateReward4Rank(baseReward, rank);
        let rankCost = this._getCost4Rank(rankReward);
        let rankHedging = this._getHedging4Rank(buildingCost, alreadyPaid, rankCost);

        rankHedgingTotal = alreadyPaid + rankHedging;
        highRisk = buildingCost - alreadyPaid - rankCost * 2 < -1;
        snipingCost = highRisk ? Math.round((buildingCost - alreadyPaid) / 2) : 0;
        alreadyPaid += rankCost + rankHedging;
        ownCost -= rankCost;

        rankData.push({
          rank: rank,
          reward: rankReward,
          cost: rankCost,
          hedge: rankHedging,
          hedgeTotal: rankHedgingTotal,
          alreadyPaid: alreadyPaid,
          rest: buildingCost - alreadyPaid,
          highRisk: highRisk,
          snipingCost: snipingCost,
        });
      }

      let result = {
        'buildingCost': buildingCost,
        'ownCost': ownCost,
        'rankData': rankData
      };

      this.costsSource.next(result);
    });
  }

  public getLevel(): number {
    return this._level;
  }

  public setLevel(level): void {
    this._level = level;
    this.calculateCosts();
  }

  public setBuilding(building): void {
    this._building = building;
    this.calculateCosts();
  }

  public getBuilding(): string {
    return this._building;
  }

  private _getBuildingData(): Observable<any> {
    const rewardObservable = new Observable(observer => {
      this.globalBuildingService.getBuildingData(this._building, this._level).subscribe(buildingData => {
        observer.next(buildingData);
        observer.complete();
      });
    });

    return rewardObservable;
  }

  private _getCost4Rank(reward): number {
    return Math.round(reward * this._multiplicator);
  }

  private _calculateReward4Rank(reward, rank): number {
    for (let i = 1; i <= rank; i++) {
      reward = Math.round(reward / i / 5) * 5
    }

    return reward
  }

  private _getHedging4Rank(buildingCost, alreadyPaid, rankCost): number {
    let toHedge: number = 0;

    if (rankCost > 0) {
      toHedge = buildingCost - alreadyPaid - rankCost * 2
    }

    return toHedge > 0 ? toHedge : 0;
  }
}
