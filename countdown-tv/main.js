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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ".fullScreen {\n  color: var(--running-color);\n  position: absolute;\n  right: 1vmax;\n  top: 1vmax;\n}\n\n.countdown {\n  background-color: var(--running-background-color);\n  color: var(--running-color);\n  display: -ms-grid;\n  display: grid;\n  font-family: Arial, Helvetica, sans-serif;\n  grid-auto-rows: 48px;\n  grid-row-gap: 5px;\n  -ms-grid-rows: 1fr 48px;\n      grid-template-rows: 1fr 48px;\n  min-height: 100vh;\n  overflow: hidden;\n  padding: 1em 0;\n  transition: background-color 1000ms ease-in-out, color 1000ms ease-in-out;\n}\n\n.countdown.config {\n  background-color: var(--config-background-color);\n  color: var(--running-background-color);\n}\n\n.countdown > * {\n  -ms-grid-row-align: center;\n      align-self: center;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  text-align: center;\n}\n\n.counter {\n  -ms-grid-row-align: center;\n      align-self: center;\n  color: var(--running-counter-color);\n  display: -ms-grid;\n  display: grid;\n  font-family: 'Orbitron', sans-serif;\n  font-size: 12vw;\n  -ms-grid-columns: (1ch)[2] 0.5ch (1ch)[2] 0.5ch (1ch)[2];\n      grid-template-columns: repeat(2, 1ch) 0.5ch repeat(2, 1ch) 0.5ch repeat(2, 1ch);\n  text-shadow:\n    0 0 5px var(--running-counter-color),\n    0 0 10px var(--running-counter-color),\n    0 0 20px var(--running-background-color);\n  transition: color 1000ms ease-in-out, text-shadow 1000ms ease-in-out;\n\n}\n\n.config .counter {\n  color: var(--running-color);\n  text-shadow:\n    0 0 5px var(--running-background-color),\n    0 0 10px var(--running-background-color),\n    0 0 20px var(--running-color);\n}\n\n.countdown > button,\n.countdown > input,\n.countdown > label {\n  background-color: var(--transparent);\n  color: var(--running-color);\n  height: 100%;\n  transition: background-color 1000ms ease-in-out, color 1000ms ease-in-out, border 1000ms ease-in-out;\n}\n\n.countdown > button {\n  width: 80%;\n  border: var(--running-border) 0.1px dashed;\n}\n\n.countdown > input {\n  height: 60%;\n  border: none;\n  border-bottom: var(--running-background-color) 1px solid;\n}\n\n.config button, .config input, .config label {\n  color: var(--running-background-color);\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"fullScreen\">\n  <input type=\"checkbox\" (change)=\"toogleFullScreen($event.target)\" id=\"fullScreen\">\n  <span>Full screen</span>\n</label>\n<form class=\"countdown\" [ngClass]=\"{'config': !running}\" (submit)=\"start()\">\n  <section class=\"counter\" *ngIf=\"counter$ | async; let counter; else instructions\">\n    <output>{{ counter.hh[0] }}</output>\n    <output>{{ counter.hh[1] }}</output>\n    <span>:</span>\n    <output>{{ counter.mm[0] }}</output>\n    <output>{{ counter.mm[1] }}</output>\n    <span>:</span>\n    <output>{{ counter.ss[0] }}</output>\n    <output>{{ counter.ss[1] }}</output>\n  </section>\n  <ng-template #instructions>\n    <p>\n      Please select a time and press \"Start\".\n    </p>\n  </ng-template>\n  <ng-template [ngIf]=\"running\" [ngIfElse]=\"stopped\">\n    <button type=\"button\" (click)=\"pauseOrContinue()\">⏯ Pause/Continue</button>\n    <button type=\"button\" (click)=\"stop()\" *ngIf=\"running\">⏹ Stop</button>\n  </ng-template>\n  <ng-template #stopped>\n    <input pattern=\"(\\d*h\\s*)?(\\d*m\\s*)?(\\d*s\\s*)?\" [(ngModel)]=\"timeStr\" name=\"timeStr\" placeholder=\"1h 30m 50s\">\n    <button type=\"submit\">▶️ Start</button>\n  </ng-template>\n</form>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.paused$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.running = false;
        this.timeStr = '1h 30m 50s';
    }
    Object.defineProperty(AppComponent.prototype, "time", {
        get: function () {
            var _a = this.timeStr.match(/(\d*\.?\d*h\s*)?(\d*\.?\d*m\s*)?(\d*\.?\d*s\s*)?/), h = _a[1], m = _a[2], s = _a[3];
            var strToNumber = function (str) { return Number((str || '0').match(/\d*\.?\d+/)[0]); };
            return 3600 * strToNumber(h) + 60 * strToNumber(m) + strToNumber(s);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.start = function () {
        var _this = this;
        this.running = true;
        this.paused$.next(false);
        var format = function (n) {
            var floor = Math.floor(n);
            return ((floor < 10) ? '0' + floor : String(floor))
                .split('');
        };
        var currentNumber = this.time;
        var numbers$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (s) { return currentNumber--; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function (n) { return n >= 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { if (currentNumber <= 0) {
            _this.stop();
        } }));
        this.counter$ = this.paused$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (paused) { return paused ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["never"])() : numbers$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (s) { return ({ hh: format(s / 3600), mm: format((s % 3600) / 60), ss: format(s % 60) }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.stop$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.running = false; }));
    };
    AppComponent.prototype.stop = function () {
        this.stop$.next();
    };
    AppComponent.prototype.pauseOrContinue = function () {
        this.paused$.next(!this.paused$.value);
    };
    AppComponent.prototype.toogleFullScreen = function (_a) {
        var checked = _a.checked;
        if (!screenfull__WEBPACK_IMPORTED_MODULE_3__["enabled"]) {
            return;
        }
        return checked ? screenfull__WEBPACK_IMPORTED_MODULE_3__["request"]() : screenfull__WEBPACK_IMPORTED_MODULE_3__["exit"]();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cmolina/code/countdown-tv/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map