import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { GlobalBuildingService } from './global-building.service';
import { SniperService } from './sniper.service';

@Injectable({
  providedIn: 'root'
})
export class CostsService {
  private _multiplicator: number = 1.9;
  private _building = 'arc';
  private _level: number = 30;
  private _levelFrom: number = 1;
  private _levelTo: number = 80;
  private costsSource = new BehaviorSubject({});
  private ownShareCostsSource = new BehaviorSubject({});

  public costs = this.costsSource.asObservable();
  public ownShareCosts = this.ownShareCostsSource.asObservable();


  constructor(private globalBuildingService: GlobalBuildingService) { }

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

  public calculateOwnShare() {
    let levelData: object[] = new Array();
    let buildingCost: number = 0;
    let ownShare: number = 0;
    let buildingCostTotal: number = 0;
    let ownShareTotal: number = 0;
    let result: object = {};

    this._getAllBuildingData().subscribe(allBuildingData => {
      for (let i = this.getLevelFrom(); i <= this.getLevelTo(); i++) {
        let buildingData = allBuildingData[i - 1];
        let baseReward = buildingData.reward;
        buildingCost = ownShare = buildingData.cost;

        for (let rank = 1; rank <= 5; rank++) {
          let rankReward = this._calculateReward4Rank(baseReward, rank);
          let rankCost = this._getCost4Rank(rankReward);
          ownShare -= rankCost;
        }

        buildingCostTotal += buildingCost;
        ownShareTotal += ownShare;

        levelData.push({
          'level': i,
          'buildingCost': buildingCost,
          'ownShare': ownShare
        });
      }

      result = {
        'levelData': levelData,
        'buildingCostTotal': buildingCostTotal,
        'ownShareTotal': ownShareTotal,
      };

      this.ownShareCostsSource.next(result);
    });
  }

  public getLevel(): number {
    return this._level;
  }

  public setLevel(level): void {
    this._level = level;
    this.calculateCosts();
  }

  public getLevelFrom(): number {
    return this._levelFrom;
  }

  public setLevelFrom(level): void {
    this._levelFrom = level;
    this.calculateOwnShare();
  }

  public getLevelTo(): number {
    return this._levelTo;
  }

  public setLevelTo(level): void {
    this._levelTo = level;
    this.calculateOwnShare();
  }

  public setBuilding(building): void {
    this._building = building;
    this.calculateCosts();
    this.calculateOwnShare();
  }

  public setFactor(factor: number) {
    this._multiplicator = factor;
    this.calculateCosts();
    this.calculateOwnShare();
  }

  public getBuilding(): string {
    return this._building;
  }

  private _getBuildingData(): Observable<any> {
    const rewardObservable = new Observable(observer => {
      this.globalBuildingService.getBuildingData(this._building, this.getLevel()).subscribe(buildingData => {
        observer.next(buildingData);
        observer.complete();
      });
    });

    return rewardObservable;
  }

  private _getAllBuildingData(): Observable<any> {
    const rewardObservable = new Observable(observer => {
      this.globalBuildingService.getAllBuildingData(this._building).subscribe(buildingData => {
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
