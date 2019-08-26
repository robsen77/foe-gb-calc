(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h1>\r\n        {{ title }}\r\n      </h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-level-selector></app-level-selector>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-sniping></app-sniping>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\">&nbsp;</div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-cost-table></app-cost-table>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-summary></app-summary>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _costs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./costs.service */ "./src/app/costs.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_costsService) {
        this._costsService = _costsService;
        this.title = 'FOE LG Kalkulator';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._costsService.costs.subscribe(function (costs) { return _this.costs = costs; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_costs_service__WEBPACK_IMPORTED_MODULE_2__["CostsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/de */ "./node_modules/@angular/common/locales/de.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/extra/de */ "./node_modules/@angular/common/locales/extra/de.js");
/* harmony import */ var _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _level_selector_level_selector_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./level-selector/level-selector.component */ "./src/app/level-selector/level-selector.component.ts");
/* harmony import */ var _cost_table_cost_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cost-table/cost-table.component */ "./src/app/cost-table/cost-table.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _sniping_sniping_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sniping/sniping.component */ "./src/app/sniping/sniping.component.ts");










Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_6___default.a, _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_7___default.a);





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _level_selector_level_selector_component__WEBPACK_IMPORTED_MODULE_10__["LevelSelectorComponent"],
                _cost_table_cost_table_component__WEBPACK_IMPORTED_MODULE_11__["CostTableComponent"],
                _summary_summary_component__WEBPACK_IMPORTED_MODULE_12__["SummaryComponent"],
                _sniping_sniping_component__WEBPACK_IMPORTED_MODULE_13__["SnipingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"], useValue: 'de' },
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/configuration.service.ts":
/*!******************************************!*\
  !*** ./src/app/configuration.service.ts ***!
  \******************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigurationService = /** @class */ (function () {
    function ConfigurationService() {
        this._cookieName = 'foe-gb-calc';
    }
    ConfigurationService.prototype.getCookieName = function () {
        return this._cookieName;
    };
    ConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/app/cost-table/cost-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/cost-table/cost-table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvc3QtdGFibGUvY29zdC10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cost-table/cost-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/cost-table/cost-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\r\n  <table class=\"table table-sm table-hover\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th scope=\"col\" class=\"text-right\">Rang</th>\r\n        <th scope=\"col\" class=\"text-right\">Belohnung</th>\r\n        <th scope=\"col\" class=\"text-right\">Kosten</th>\r\n        <th scope=\"col\" class=\"text-right\">Absicherung</th>\r\n        <th scope=\"col\" class=\"text-right\">Sniping</th>\r\n        <th scope=\"col\" class=\"text-right\">Summe</th>\r\n        <th scope=\"col\" class=\"text-right\">Rest</th>\r\n        <th scope=\"col\">offen</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let cost of costs.rankData\" [ngClass]=\"cost.highRisk ? 'bg-danger text-white' : '' \">\r\n        <th scope=\"row\" class=\"text-right\">{{ cost.rank | number }}</th>\r\n        <td class=\"text-right\">{{ cost.reward > 0 ? (cost.reward | number) : \"-\"}}</td>\r\n        <td class=\"text-right\">{{ cost.cost > 0 ? (cost.cost | number) : \"-\" }}</td>\r\n        <td class=\"text-right\" [ngSwitch]=\"cost.hedge > 0\">\r\n          <span *ngSwitchCase=\"true\">{{ cost.hedgeTotal | number }} (+{{ cost.hedge | number }})</span>\r\n          <span *ngSwitchDefault>-</span>\r\n        </td>\r\n        <td class=\"text-right\">{{ cost.snipingCost > 0 ? (cost.snipingCost | number) : \"-\" }}</td>\r\n        <td class=\"text-right\">{{ cost.alreadyPaid | number }}</td>\r\n        <td class=\"text-right\">{{ cost.rest | number }}</td>\r\n        <td>\r\n          <div class=\"custom-control custom-switch\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"openSlots[cost.rank - 1]\" id=\"slot-{{ cost.rank - 1 }}\" (change)=\"changeSlot()\">\r\n            <label class=\"custom-control-label\" for=\"slot-{{ cost.rank - 1 }}\"></label>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n    <tfoot>\r\n      <tr>\r\n        <td colspan=\"8\" class=\"text-center\"><strong>Gesamtkosten: {{ costs.buildingCost | number }}</strong> / <strong>eigene Kosten: {{ costs.ownCost | number }}</strong></td>\r\n      </tr>\r\n    </tfoot>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cost-table/cost-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cost-table/cost-table.component.ts ***!
  \****************************************************/
/*! exports provided: CostTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostTableComponent", function() { return CostTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _costs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../costs.service */ "./src/app/costs.service.ts");
/* harmony import */ var _slot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slot.service */ "./src/app/slot.service.ts");




var CostTableComponent = /** @class */ (function () {
    function CostTableComponent(costsService, slotService) {
        this.costsService = costsService;
        this.slotService = slotService;
        this.openSlots = this.slotService.getSlots();
    }
    CostTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.costsService.costs.subscribe(function (costs) {
            _this.costs = costs;
        });
    };
    CostTableComponent.prototype.changeSlot = function () {
        this.slotService.setSlots(this.openSlots);
    };
    CostTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cost-table',
            template: __webpack_require__(/*! ./cost-table.component.html */ "./src/app/cost-table/cost-table.component.html"),
            styles: [__webpack_require__(/*! ./cost-table.component.css */ "./src/app/cost-table/cost-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_costs_service__WEBPACK_IMPORTED_MODULE_2__["CostsService"], _slot_service__WEBPACK_IMPORTED_MODULE_3__["SlotService"]])
    ], CostTableComponent);
    return CostTableComponent;
}());



/***/ }),

/***/ "./src/app/costs.service.ts":
/*!**********************************!*\
  !*** ./src/app/costs.service.ts ***!
  \**********************************/
/*! exports provided: CostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostsService", function() { return CostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _global_building_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-building.service */ "./src/app/global-building.service.ts");
/* harmony import */ var _sniper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sniper.service */ "./src/app/sniper.service.ts");






var CostsService = /** @class */ (function () {
    function CostsService(globalBuildingService, sniperService) {
        this.globalBuildingService = globalBuildingService;
        this.sniperService = sniperService;
        this._multiplicator = 1.9;
        this._building = 'arc';
        this._level = 30;
        this.costsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.costs = this.costsSource.asObservable();
    }
    CostsService.prototype.calculateCosts = function () {
        var _this = this;
        var rankData = [];
        var buildingCost;
        var ownCost;
        this._getBuildingData().subscribe(function (buildingData) {
            var alreadyPaid = 0;
            var snipingCost = 0;
            var rankHedgingTotal = 0;
            var highRisk = false;
            var baseReward = buildingData.reward;
            buildingCost = ownCost = buildingData.cost;
            for (var rank = 1; rank <= 5; rank++) {
                var rankReward = _this._calculateReward4Rank(baseReward, rank);
                var rankCost = _this._getCost4Rank(rankReward);
                var rankHedging = _this._getHedging4Rank(buildingCost, alreadyPaid, rankCost);
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
            var result = {
                'buildingCost': buildingCost,
                'ownCost': ownCost,
                'rankData': rankData
            };
            _this.costsSource.next(result);
        });
    };
    CostsService.prototype.getLevel = function () {
        return this._level;
    };
    CostsService.prototype.setLevel = function (level) {
        this._level = level;
        this.calculateCosts();
    };
    CostsService.prototype.setBuilding = function (building) {
        this._building = building;
        this.calculateCosts();
    };
    CostsService.prototype.setFactor = function (factor) {
        this._multiplicator = factor;
        this.calculateCosts();
    };
    CostsService.prototype.getBuilding = function () {
        return this._building;
    };
    CostsService.prototype._getBuildingData = function () {
        var _this = this;
        var rewardObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.globalBuildingService.getBuildingData(_this._building, _this._level).subscribe(function (buildingData) {
                observer.next(buildingData);
                observer.complete();
            });
        });
        return rewardObservable;
    };
    CostsService.prototype._getCost4Rank = function (reward) {
        return Math.round(reward * this._multiplicator);
    };
    CostsService.prototype._calculateReward4Rank = function (reward, rank) {
        for (var i = 1; i <= rank; i++) {
            reward = Math.round(reward / i / 5) * 5;
        }
        return reward;
    };
    CostsService.prototype._getHedging4Rank = function (buildingCost, alreadyPaid, rankCost) {
        var toHedge = 0;
        if (rankCost > 0) {
            toHedge = buildingCost - alreadyPaid - rankCost * 2;
        }
        return toHedge > 0 ? toHedge : 0;
    };
    CostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_building_service__WEBPACK_IMPORTED_MODULE_3__["GlobalBuildingService"], _sniper_service__WEBPACK_IMPORTED_MODULE_4__["SniperService"]])
    ], CostsService);
    return CostsService;
}());



/***/ }),

/***/ "./src/app/global-building.service.ts":
/*!********************************************!*\
  !*** ./src/app/global-building.service.ts ***!
  \********************************************/
/*! exports provided: GlobalBuildingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalBuildingService", function() { return GlobalBuildingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var GlobalBuildingService = /** @class */ (function () {
    function GlobalBuildingService(http) {
        this.http = http;
        this._mappingLoaded = false;
        this._getBuildingData().subscribe();
    }
    GlobalBuildingService.prototype.getBuildingData = function (building, level) {
        var _this = this;
        var ageObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._getBuildingData().subscribe(function (mappingData) {
                var age = mappingData[building].age;
                _this._getAgeData(age).subscribe(function (data) {
                    observer.next(data[level - 1]);
                    observer.complete();
                });
            });
        });
        return ageObservable;
    };
    GlobalBuildingService.prototype.getGlobalBuildings = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._getBuildingData().subscribe(function (buildingDataObj) {
                var buildings = _this._convertIntoArray(buildingDataObj);
                observer.next(buildings);
                observer.complete();
            });
        });
        return observable;
    };
    GlobalBuildingService.prototype._getAgeData = function (age) {
        return this.http.get("./assets/data/ages/" + age + ".json");
    };
    GlobalBuildingService.prototype._getBuildingData = function () {
        var _this = this;
        var mappingObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            if (!_this._mappingLoaded) {
                _this.http.get("./assets/data/buildings.json").subscribe(function (data) {
                    _this._mapping = data;
                    _this._mappingLoaded = true;
                    observer.next(_this._mapping);
                    observer.complete();
                });
            }
            else {
                observer.next(_this._mapping);
                observer.complete();
            }
        });
        return mappingObservable;
    };
    GlobalBuildingService.prototype._convertIntoArray = function (dataObj) {
        var result = [];
        for (var key in dataObj) {
            result.push({
                name: dataObj[key].name,
                key: key
            });
        }
        return this._sortBuildingsAsc(result);
    };
    GlobalBuildingService.prototype._sortBuildingsAsc = function (buildings) {
        return buildings.sort(function (obj1, obj2) {
            if (obj1.name > obj2.name) {
                return 1;
            }
            if (obj1.name < obj2.name) {
                return -1;
            }
            return 0;
        });
    };
    GlobalBuildingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GlobalBuildingService);
    return GlobalBuildingService;
}());



/***/ }),

/***/ "./src/app/level-selector/level-selector.component.css":
/*!*************************************************************!*\
  !*** ./src/app/level-selector/level-selector.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xldmVsLXNlbGVjdG9yL2xldmVsLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/level-selector/level-selector.component.html":
/*!**************************************************************!*\
  !*** ./src/app/level-selector/level-selector.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-row\">\r\n  <div class=\"form-group col-md-2\">\r\n    <label>Faktor</label>\r\n    <select class=\"custom-select custom-select-sm \" [(ngModel)]=\"factor\" id=\"factorselect\" (change)=\"factorChanged()\">\r\n      <option *ngFor=\"let factor of factors\" [value]=\"factor\">{{ factor }}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group col-md-2\">\r\n    <label for=\"gbselect\">LG auswählen:</label>\r\n    <select class=\"custom-select custom-select-sm \" [(ngModel)]=\"gb\" id=\"gbselect\" (change)=\"globalBuildingChanged()\">\r\n      <option *ngFor=\"let globalBuilding of globalBuildings\" [value]=\"globalBuilding.key\">{{ globalBuilding.name }}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group col-md-2\">\r\n    <label>Level</label>\r\n    <input [(ngModel)]=\"level\" placeholder=\"1\" type=\"number\" (change)=\"levelChanged()\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/level-selector/level-selector.component.ts":
/*!************************************************************!*\
  !*** ./src/app/level-selector/level-selector.component.ts ***!
  \************************************************************/
/*! exports provided: LevelSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelSelectorComponent", function() { return LevelSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _costs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../costs.service */ "./src/app/costs.service.ts");
/* harmony import */ var _global_building_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global-building.service */ "./src/app/global-building.service.ts");
/* harmony import */ var _summary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../summary.service */ "./src/app/summary.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configuration.service */ "./src/app/configuration.service.ts");







var LevelSelectorComponent = /** @class */ (function () {
    function LevelSelectorComponent(costsService, globalBuildingService, summaryService, cookieService, config) {
        this.costsService = costsService;
        this.globalBuildingService = globalBuildingService;
        this.summaryService = summaryService;
        this.cookieService = cookieService;
        this.config = config;
        this.level = 30;
        this.gb = 'arc';
        this.factors = [1.85, 1.9];
        this.factor = 1.9;
        this.initCookie();
        this.costsService.setBuilding(this.gb);
        this.costsService.setLevel(this.level);
        this.costsService.setFactor(this.factor);
    }
    LevelSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.costsService.calculateCosts();
        this.globalBuildingService.getGlobalBuildings().subscribe(function (globalBuildings) {
            _this.globalBuildings = globalBuildings;
            _this.summaryService.setBuilding(_this._getGlobalBuildingByKey(_this.gb).name);
        });
    };
    LevelSelectorComponent.prototype.levelChanged = function () {
        this.costsService.setLevel(this.level);
        this.storeCookie();
    };
    LevelSelectorComponent.prototype.factorChanged = function () {
        this.costsService.setFactor(this.factor);
        this.storeCookie();
    };
    LevelSelectorComponent.prototype.globalBuildingChanged = function () {
        this.costsService.setBuilding(this.gb);
        this.summaryService.setBuilding(this._getGlobalBuildingByKey(this.gb).name);
        this.storeCookie();
    };
    LevelSelectorComponent.prototype._getGlobalBuildingByKey = function (key) {
        for (var _i = 0, _a = this.globalBuildings; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.key === key) {
                return obj;
            }
        }
    };
    LevelSelectorComponent.prototype.initCookie = function () {
        if (this.cookieService.check(this.config.getCookieName())) {
            var cookie = JSON.parse(this.cookieService.get(this.config.getCookieName()));
            this.gb = cookie.gb;
            this.level = cookie.level;
            this.factor = cookie.factor;
        }
    };
    LevelSelectorComponent.prototype.storeCookie = function () {
        var cookie = {
            gb: this.gb,
            level: this.level,
            factor: this.factor
        };
        this.cookieService.set(this.config.getCookieName(), JSON.stringify(cookie));
    };
    LevelSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-level-selector',
            template: __webpack_require__(/*! ./level-selector.component.html */ "./src/app/level-selector/level-selector.component.html"),
            styles: [__webpack_require__(/*! ./level-selector.component.css */ "./src/app/level-selector/level-selector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_costs_service__WEBPACK_IMPORTED_MODULE_2__["CostsService"],
            _global_building_service__WEBPACK_IMPORTED_MODULE_3__["GlobalBuildingService"],
            _summary_service__WEBPACK_IMPORTED_MODULE_4__["SummaryService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"]])
    ], LevelSelectorComponent);
    return LevelSelectorComponent;
}());



/***/ }),

/***/ "./src/app/shared/no-duplicate.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/no-duplicate.validator.ts ***!
  \**************************************************/
/*! exports provided: NoDuplicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDuplicate", function() { return NoDuplicate; });
function NoDuplicate(compareWith) {
    return function (control) {
        if (compareWith.indexOf(control.value) != -1) {
            return { duplicate: true };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/shared/validation.ts":
/*!**************************************!*\
  !*** ./src/app/shared/validation.ts ***!
  \**************************************/
/*! exports provided: CustomValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidator", function() { return CustomValidator; });
var CustomValidator = /** @class */ (function () {
    function CustomValidator() {
    }
    // Validates URL
    CustomValidator.urlValidator = function (url) {
        if (url.pristine) {
            return null;
        }
        var URL_REGEXP = /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
        url.markAsTouched();
        if (URL_REGEXP.test(url.value)) {
            return null;
        }
        return {
            invalidUrl: true
        };
    };
    // Validates passwords
    CustomValidator.matchPassword = function (group) {
        var password = group.controls.password;
        var confirm = group.controls.confirm;
        if (password.pristine || confirm.pristine) {
            return null;
        }
        group.markAsTouched();
        if (password.value === confirm.value) {
            return null;
        }
        return {
            invalidPassword: true
        };
    };
    // Validates numbers
    CustomValidator.numberValidator = function (number) {
        if (number.pristine) {
            return null;
        }
        var NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
        number.markAsTouched();
        if (NUMBER_REGEXP.test(number.value)) {
            return null;
        }
        return {
            invalidNumber: true
        };
    };
    // Validates US SSN
    CustomValidator.ssnValidator = function (ssn) {
        if (ssn.pristine) {
            return null;
        }
        var SSN_REGEXP = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
        ssn.markAsTouched();
        if (SSN_REGEXP.test(ssn.value)) {
            return null;
        }
        return {
            invalidSsn: true
        };
    };
    // Validates US phone numbers
    CustomValidator.phoneValidator = function (number) {
        if (number.pristine) {
            return null;
        }
        var PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        number.markAsTouched();
        if (PHONE_REGEXP.test(number.value)) {
            return null;
        }
        return {
            invalidNumber: true
        };
    };
    // Validates zip codes
    CustomValidator.zipCodeValidator = function (zip) {
        if (zip.pristine) {
            return null;
        }
        var ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
        zip.markAsTouched();
        if (ZIP_REGEXP.test(zip.value)) {
            return null;
        }
        return {
            invalidZip: true
        };
    };
    return CustomValidator;
}());



/***/ }),

/***/ "./src/app/slot.service.ts":
/*!*********************************!*\
  !*** ./src/app/slot.service.ts ***!
  \*********************************/
/*! exports provided: SlotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotService", function() { return SlotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SlotService = /** @class */ (function () {
    function SlotService() {
        this._openSlots = [false, false, false, false, false];
        this._slotBehavior = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.slotBehaviorObservable = this._slotBehavior.asObservable();
    }
    SlotService.prototype.getSlots = function () {
        return this._openSlots;
    };
    SlotService.prototype.setSlots = function (slots) {
        this._openSlots = slots;
        this._slotBehavior.next(slots);
    };
    SlotService.prototype.getOpenSlots = function () {
        return this._openSlots.reduce(function (acc, curr, index) {
            if (curr == true) {
                acc.push(index + 1);
            }
            return acc;
        }, []);
    };
    SlotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlotService);
    return SlotService;
}());



/***/ }),

/***/ "./src/app/sniper.service.ts":
/*!***********************************!*\
  !*** ./src/app/sniper.service.ts ***!
  \***********************************/
/*! exports provided: SniperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SniperService", function() { return SniperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SniperService = /** @class */ (function () {
    function SniperService() {
        this._snipers = [];
    }
    SniperService.prototype.addSniper = function (sniper) {
        this._snipers.push(sniper);
    };
    SniperService.prototype.removeSniper = function (sniper) {
        var index = this._snipers.indexOf(sniper);
        if (index !== -1) {
            this._snipers.splice(index, 1);
        }
    };
    SniperService.prototype.getSnipers = function () {
        return this._snipers;
    };
    SniperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SniperService);
    return SniperService;
}());



/***/ }),

/***/ "./src/app/sniping/sniping.component.css":
/*!***********************************************!*\
  !*** ./src/app/sniping/sniping.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc25pcGluZy9zbmlwaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEIsRUFBRSxVQUFVO0FBQzVDOztBQUVBO0VBQ0UsOEJBQThCLEVBQUUsUUFBUTtBQUMxQyIsImZpbGUiOiJzcmMvYXBwL3NuaXBpbmcvc25pcGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sniping/sniping.component.html":
/*!************************************************!*\
  !*** ./src/app/sniping/sniping.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-control custom-switch\">\r\n  <input type=\"checkbox\" class=\"custom-control-input\" id=\"sniperActive\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n  <label class=\"custom-control-label\" for=\"sniperActive\">Sniper vorhanden?</label>\r\n</div>\r\n<div class=\"collapse\" id=\"collapseExample\">\r\n  <div class=\"card card-body\">\r\n    <form class=\"form-inline\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"sniperForm\">\r\n      <div class=\"form-group mx-sm-3 mb-2\">\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"sniperInput\" placeholder=\"Einlage in FP\"><br />\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary mb-2\" [disabled]=\"!sniperForm.valid\">Hinzufügen</button>\r\n    </form>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <span *ngFor=\"let sniper of snipers\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeSniper(sniper)\">{{ sniper | number }} x</button>&nbsp;\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sniping/sniping.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sniping/sniping.component.ts ***!
  \**********************************************/
/*! exports provided: SnipingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnipingComponent", function() { return SnipingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sniper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sniper.service */ "./src/app/sniper.service.ts");
/* harmony import */ var _shared_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/validation */ "./src/app/shared/validation.ts");
/* harmony import */ var _shared_no_duplicate_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/no-duplicate.validator */ "./src/app/shared/no-duplicate.validator.ts");






var SnipingComponent = /** @class */ (function () {
    function SnipingComponent(formBuilder, sniperService) {
        this.formBuilder = formBuilder;
        this.sniperService = sniperService;
        this.snipers = [];
    }
    SnipingComponent.prototype.ngOnInit = function () {
        this.sniperForm = this.formBuilder.group({
            sniperInput: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidator"].numberValidator, Object(_shared_no_duplicate_validator__WEBPACK_IMPORTED_MODULE_5__["NoDuplicate"])(this.sniperService.getSnipers())]]
        });
    };
    SnipingComponent.prototype.onSubmit = function () {
        if (this.sniperForm.invalid) {
            return;
        }
        this.sniperService.addSniper(this.sniperForm.value.sniperInput);
        this.snipers = this.sniperService.getSnipers();
        this.sniperForm.reset();
    };
    SnipingComponent.prototype.removeSniper = function (sniper) {
        this.sniperService.removeSniper(sniper);
        this.snipers = this.sniperService.getSnipers();
    };
    SnipingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sniping',
            template: __webpack_require__(/*! ./sniping.component.html */ "./src/app/sniping/sniping.component.html"),
            styles: [__webpack_require__(/*! ./sniping.component.css */ "./src/app/sniping/sniping.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _sniper_service__WEBPACK_IMPORTED_MODULE_3__["SniperService"]])
    ], SnipingComponent);
    return SnipingComponent;
}());



/***/ }),

/***/ "./src/app/summary.service.ts":
/*!************************************!*\
  !*** ./src/app/summary.service.ts ***!
  \************************************/
/*! exports provided: SummaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryService", function() { return SummaryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slot.service */ "./src/app/slot.service.ts");
/* harmony import */ var _costs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./costs.service */ "./src/app/costs.service.ts");




var SummaryService = /** @class */ (function () {
    function SummaryService(slotService, costsService) {
        var _this = this;
        this.slotService = slotService;
        this.costsService = costsService;
        this._prefix = "";
        this._suffix = "";
        this._building = "";
        this.costsService.costs.subscribe(function (costs) {
            _this._costs = costs;
            _this.createSummary();
        });
        this.slotService.slotBehaviorObservable.subscribe(function (slots) {
            _this.createSummary();
        });
    }
    SummaryService.prototype.createSummary = function () {
        var openSlots = this.slotService.getOpenSlots();
        var openSlotsStr = [];
        var summary = "";
        for (var _i = 0, openSlots_1 = openSlots; _i < openSlots_1.length; _i++) {
            var slot = openSlots_1[_i];
            openSlotsStr.push("P" + slot + " (" + this._costs.rankData[slot - 1].cost + ")");
        }
        if (openSlotsStr.length > 0) {
            if (this._prefix != "") {
                summary += this._getInterpolated(this._prefix) + " ";
            }
            summary += openSlotsStr.join(", ");
            if (this._suffix != "") {
                summary += " " + this._getInterpolated(this._suffix);
            }
        }
        return summary;
    };
    SummaryService.prototype.getSummary = function () {
        return this.createSummary();
    };
    SummaryService.prototype.setSuffix = function (suffix) {
        this._suffix = suffix;
    };
    SummaryService.prototype.setPrefix = function (prefix) {
        this._prefix = prefix;
    };
    SummaryService.prototype.setBuilding = function (building) {
        this._building = building;
    };
    SummaryService.prototype._getInterpolated = function (str) {
        return str.replace('{LG}', this._building);
    };
    SummaryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_slot_service__WEBPACK_IMPORTED_MODULE_2__["SlotService"], _costs_service__WEBPACK_IMPORTED_MODULE_3__["CostsService"]])
    ], SummaryService);
    return SummaryService;
}());



/***/ }),

/***/ "./src/app/summary/summary.component.css":
/*!***********************************************!*\
  !*** ./src/app/summary/summary.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/summary/summary.component.html":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"collapse\" href=\"#settings\" role=\"button\" aria-expanded=\"false\" aria-controls=\"settings\">Einstellungen</button>&nbsp;\r\n  </div>\r\n  <div class=\"col text-right\" *ngIf=\"summary\">\r\n    <input type=\"text\" [(ngModel)]=\"summary\" id=\"summarycopymanual\" />&nbsp;\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"copy2Clipboard()\">{{ summary }}</button>\r\n  </div>\r\n</div>\r\n<div class=\"clearfix\">&nbsp;</div>\r\n<div class=\"card collapse\" id=\"settings\">\r\n  <div class=\"card-header\">\r\n    Einstellungen\r\n  </div>\r\n  <div class=\"card card-body\">\r\n    <div class=\"input-group\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\">Prefix / Suffix</span>\r\n      </div>\r\n      <input type=\"text\" class=\"form-control\" autocomplete=\"off\" [(ngModel)]=\"prefix\" placeholder=\"verwende {LG} für das ausgewählte LG\" (change)=\"changePrefix()\" />\r\n      <input type=\"text\" class=\"form-control\" autocomplete=\"off\" [(ngModel)]=\"suffix\" placeholder=\"verwende {LG} für das ausgewählte LG\" (change)=\"changeSuffix()\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _costs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../costs.service */ "./src/app/costs.service.ts");
/* harmony import */ var _slot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slot.service */ "./src/app/slot.service.ts");
/* harmony import */ var _summary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../summary.service */ "./src/app/summary.service.ts");





var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(costsService, slotService, summaryService) {
        this.costsService = costsService;
        this.slotService = slotService;
        this.summaryService = summaryService;
        this.prefix = "";
        this.suffix = "";
        this.summary = "";
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.costsService.costs.subscribe(function (costs) {
            _this._costs = costs;
            _this.changeSummary();
        });
        this.slotService.slotBehaviorObservable.subscribe(function (slots) {
            _this.changeSummary();
        });
    };
    SummaryComponent.prototype.changeSummary = function () {
        this.summary = this.summaryService.getSummary();
    };
    SummaryComponent.prototype.changePrefix = function () {
        this.summaryService.setPrefix(this.prefix);
        this.changeSummary();
    };
    SummaryComponent.prototype.changeSuffix = function () {
        this.summaryService.setSuffix(this.suffix);
        this.changeSummary();
    };
    SummaryComponent.prototype.copy2Clipboard = function () {
        var input = document.getElementById('summarycopymanual');
        input.focus();
        input.select();
        input.setSelectionRange(0, 9999);
        document.execCommand('copy');
    };
    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/summary/summary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_costs_service__WEBPACK_IMPORTED_MODULE_2__["CostsService"],
            _slot_service__WEBPACK_IMPORTED_MODULE_3__["SlotService"],
            _summary_service__WEBPACK_IMPORTED_MODULE_4__["SummaryService"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\cygwin64\home\robert.bernhard\foe\foe-gb-calc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map