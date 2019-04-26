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

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h1>\r\n        {{ title }}\r\n      </h1>\r\n    </div>\r\n  </div>\r\n\r\n  <app-level-selector></app-level-selector>\r\n  <app-cost-table></app-cost-table>\r\n</div>\r\n"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _level_selector_level_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./level-selector/level-selector.component */ "./src/app/level-selector/level-selector.component.ts");
/* harmony import */ var _cost_table_cost_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cost-table/cost-table.component */ "./src/app/cost-table/cost-table.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _level_selector_level_selector_component__WEBPACK_IMPORTED_MODULE_6__["LevelSelectorComponent"],
                _cost_table_cost_table_component__WEBPACK_IMPORTED_MODULE_7__["CostTableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-hover\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th scope=\"col\">Rang</th>\r\n        <th scope=\"col\">Belohnung</th>\r\n        <th scope=\"col\">Kosten</th>\r\n        <th scope=\"col\">Absicherung</th>\r\n        <th scope=\"col\">Sniping</th>\r\n        <th scope=\"col\">Summe</th>\r\n        <th scope=\"col\">Rest</th>\r\n        <th scope=\"col\">offen</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let cost of costs.rankData\" [ngClass]=\"cost.highRisk ? 'bg-danger text-white' : '' \">\r\n        <th scope=\"row\">{{ cost.rank }}</th>\r\n        <td>{{ cost.reward > 0 ? cost.reward : \"-\"}}</td>\r\n        <td>{{ cost.cost > 0 ? cost.cost : \"-\" }}</td>\r\n        <td>{{ cost.hedge > 0 ? cost.hedge : \"-\" }}</td>\r\n        <td>{{ cost.snipingCost > 0 ? cost.snipingCost : \"-\" }}</td>\r\n        <td>{{ cost.alreadyPaid }}</td>\r\n        <td>{{ cost.rest }}</td>\r\n        <td>\r\n          <div class=\"custom-control custom-switch\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"openSlot[cost.rank - 1]\" id=\"slot-{{ cost.rank - 1 }}\" (change)=\"changeSummary()\">\r\n            <label class=\"custom-control-label\" for=\"slot-{{ cost.rank - 1 }}\"></label>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n    <tfoot>\r\n      <tr>\r\n        <th scope=\"row\" colspan=\"5\"></th>\r\n        <td>{{ costs.buildingCost }}</td>\r\n        <td>-</td>\r\n        <td></td>\r\n      </tr>\r\n    </tfoot>\r\n  </table>\r\n</div>\r\n<div class=\"row justify-content-between\">\r\n  <div class=\"col-4\">\r\n    <label><input [(ngModel)]=\"prefix\" placeholder=\"Prefix\" type=\"text\" (change)=\"changeSummary()\" /></label><br />\r\n    <label><input [(ngModel)]=\"suffix\" placeholder=\"Suffix\" type=\"text\" (change)=\"changeSummary()\" /></label>\r\n  </div>\r\n  <div class=\"col-8 text-right\">\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"summary\" (click)=\"copy2Clipboard()\">{{ summary }}</button>\r\n  </div>\r\n</div>\r\n"

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



var CostTableComponent = /** @class */ (function () {
    function CostTableComponent(_costsService) {
        this._costsService = _costsService;
        this.prefix = "Arche";
        this.suffix = "";
        this.summary = "";
        this.openSlot = [false, false, false, false, false];
    }
    ;
    CostTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._costsService.costs.subscribe(function (costs) {
            _this.costs = costs;
            _this.changeSummary();
        });
    };
    CostTableComponent.prototype.changeSummary = function () {
        this.summary = "";
        var slots = [];
        for (var i = 0; i < 5; i++) {
            if (this.openSlot[i] === true) {
                slots.push("P" + (i + 1) + " (" + this.costs.rankData[i].cost + ")");
            }
        }
        if (slots.length > 0) {
            if (this.prefix != "") {
                this.summary += this.prefix + " ";
            }
            this.summary += slots.join(", ");
            if (this.suffix != "") {
                this.summary += " " + this.suffix;
            }
        }
    };
    CostTableComponent.prototype.copy2Clipboard = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.summary;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    CostTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cost-table',
            template: __webpack_require__(/*! ./cost-table.component.html */ "./src/app/cost-table/cost-table.component.html"),
            styles: [__webpack_require__(/*! ./cost-table.component.css */ "./src/app/cost-table/cost-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_costs_service__WEBPACK_IMPORTED_MODULE_2__["CostsService"]])
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





var CostsService = /** @class */ (function () {
    function CostsService(_globalBuildingService) {
        this._globalBuildingService = _globalBuildingService;
        this._multiplicator = 1.9;
        this._building = 'arc';
        this._level = 10;
        this.costsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.costs = this.costsSource.asObservable();
    }
    CostsService.prototype.calculateCosts = function () {
        var _this = this;
        var rankData = [];
        var buildingCost;
        this._getBuildingData().subscribe(function (buildingData) {
            var alreadyPaid = 0;
            var snipingCost = 0;
            var highRisk = false;
            var baseReward = buildingData.reward;
            buildingCost = buildingData.cost;
            for (var rank = 1; rank <= 5; rank++) {
                var rankReward = _this._calculateReward4Rank(baseReward, rank);
                var rankCost = _this._getCost4Rank(rankReward);
                var rankHedging = _this._getHedging4Rank(buildingCost, alreadyPaid, rankCost);
                highRisk = buildingCost - alreadyPaid - rankCost * 2 < -1;
                snipingCost = highRisk ? Math.round((buildingCost - alreadyPaid) / 2) : 0;
                alreadyPaid += rankCost + rankHedging;
                rankData.push({
                    rank: rank,
                    reward: rankReward,
                    cost: rankCost,
                    hedge: rankHedging,
                    alreadyPaid: alreadyPaid,
                    rest: buildingCost - alreadyPaid,
                    highRisk: highRisk,
                    snipingCost: snipingCost,
                });
            }
            var result = {
                'buildingCost': buildingCost,
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
    CostsService.prototype._getBuildingData = function () {
        var _this = this;
        var rewardObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._globalBuildingService.getBuildingData(_this._building, _this._level).subscribe(function (buildingData) {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_building_service__WEBPACK_IMPORTED_MODULE_3__["GlobalBuildingService"]])
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
        this._getMappingData().subscribe();
    }
    GlobalBuildingService.prototype.getBuildingData = function (building, level) {
        var _this = this;
        var ageObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._getMappingData().subscribe(function (mappingData) {
                var age = mappingData[building];
                _this._getAgeData(age).subscribe(function (data) {
                    observer.next(data[level - 1]);
                    observer.complete();
                });
            });
        });
        return ageObservable;
    };
    GlobalBuildingService.prototype._getAgeData = function (age) {
        return this.http.get("./assets/data/" + age + ".json");
    };
    GlobalBuildingService.prototype._getMappingData = function () {
        var _this = this;
        var mappingObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            if (!_this._mappingLoaded) {
                _this.http.get("./assets/data/mapping.json").subscribe(function (data) {
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

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <label>Arche Level: <input [(ngModel)]=\"level\" placeholder=\"1\" type=\"number\" (change)=\"levelChanged()\" /></label>\r\n  </div>\r\n</div>\r\n"

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



var LevelSelectorComponent = /** @class */ (function () {
    function LevelSelectorComponent(_costsService) {
        this._costsService = _costsService;
        this.level = this._costsService.getLevel();
    }
    LevelSelectorComponent.prototype.levelChanged = function () {
        this._costsService.setLevel(this.level);
    };
    LevelSelectorComponent.prototype.ngOnInit = function () {
        this._costsService.calculateCosts();
    };
    LevelSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-level-selector',
            template: __webpack_require__(/*! ./level-selector.component.html */ "./src/app/level-selector/level-selector.component.html"),
            styles: [__webpack_require__(/*! ./level-selector.component.css */ "./src/app/level-selector/level-selector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_costs_service__WEBPACK_IMPORTED_MODULE_2__["CostsService"]])
    ], LevelSelectorComponent);
    return LevelSelectorComponent;
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