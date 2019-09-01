import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalBuildingService {
  private _mapping: Object;
  private _mappingLoaded = false;

  constructor(private http: HttpClient) {
    this._getBuildingData().subscribe();
  }

  public getBuildingData(building, level): Observable<any> {
    const ageObservable = new Observable(observer => {
      this._getBuildingData().subscribe(mappingData => {
        let age = mappingData[building].age;

        this._getAgeData(age).subscribe(data => {
          observer.next(data[level - 1]);
          observer.complete();
        });
      });
    });

    return ageObservable;
  }

  public getAllBuildingData(building): Observable<any> {
    const ageObservable = new Observable(observer => {
      this._getBuildingData().subscribe(mappingData => {
        let age = mappingData[building].age;

        this._getAgeData(age).subscribe(data => {
          observer.next(data);
          observer.complete();
        });
      });
    });

    return ageObservable;
  }

  public getGlobalBuildings(): Observable<any> {
    const observable = new Observable(observer => {
      this._getBuildingData().subscribe(buildingDataObj => {
        let buildings = this._convertIntoArray(buildingDataObj);
        observer.next(buildings);
        observer.complete();
      });
    });

    return observable;
  }

  private _getAgeData(age): Observable<any> {
    return this.http.get("./assets/data/ages/" + age + ".json");
  }

  private _getBuildingData(): Observable<any> {
    const mappingObservable = new Observable(observer => {
      if (!this._mappingLoaded) {
        this.http.get("./assets/data/buildings.json").subscribe(data => {
          this._mapping = data;
          this._mappingLoaded = true;
          observer.next(this._mapping);
          observer.complete();
        });
      } else {
        observer.next(this._mapping);
        observer.complete();
      }

    });

    return mappingObservable;
  }

  private _convertIntoArray(dataObj) {
    let result = [];

    for (let key in dataObj) {
      result.push({
        name: dataObj[key].name,
        key: key
      });
    }

    return this._sortBuildingsAsc(result);
  }

  private _sortBuildingsAsc(buildings) {
    return buildings.sort((obj1, obj2) => {
      if (obj1.name > obj2.name) {
        return 1;
      }

      if (obj1.name < obj2.name) {
        return -1;
      }

      return 0;
    });
  }
}
