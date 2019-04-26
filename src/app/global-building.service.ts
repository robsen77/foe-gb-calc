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
    this._getMappingData().subscribe();
  }

  public getBuildingData(building, level): Observable<any> {
    const ageObservable = new Observable(observer => {
      this._getMappingData().subscribe(mappingData => {
        let age = mappingData[building];

        this._getAgeData(age).subscribe(data => {
          observer.next(data[level - 1]);
          observer.complete();
        });
      });
    });

    return ageObservable;
  }

  private _getAgeData(age): Observable<any> {
    return this.http.get("./assets/data/" + age + ".json");
  }

  private _getMappingData(): Observable<any> {
    const mappingObservable = new Observable(observer => {
      if (!this._mappingLoaded) {
        this.http.get("./assets/data/mapping.json").subscribe(data => {
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
}
