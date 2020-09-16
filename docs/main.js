(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: TracksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tracks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracks.service */ "./src/app/_services/tracks.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TracksService", function() { return _tracks_service__WEBPACK_IMPORTED_MODULE_0__["TracksService"]; });




/***/ }),

/***/ "./src/app/_services/tracks.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/tracks.service.ts ***!
  \*********************************************/
/*! exports provided: TracksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracksService", function() { return TracksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TracksService {
    constructor() {
        this.tracks = [];
        this.duplicateTracks = [];
    }
}
TracksService.ɵfac = function TracksService_Factory(t) { return new (t || TracksService)(); };
TracksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TracksService, factory: TracksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TracksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");


// import {


















// } from '@angular/material';
class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, providers: [
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"]
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"]
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"]
                ],
                providers: [
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ "./src/app/panel/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");






const routes = [
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'panel', component: _panel__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"] },
    { path: '**', redirectTo: 'login' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'spotify-duplicates-finder';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _panel_panel_component__WEBPACK_IMPORTED_MODULE_6__["PanelComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _panel_panel_component__WEBPACK_IMPORTED_MODULE_6__["PanelComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginComponent {
    constructor() {
        this.client_id = 'client_id=6da24dd6364f4df391ece422462529cb';
        this.redirect_uri = 'redirect_uri=http://127.0.0.1:4200/panel';
        this.response_type = 'response_type=code';
        this.scope = 'scope=' + ['user-read-email', 'user-library-read'].join(' ');
        this.authUrl = `https://accounts.spotify.com/authorize?${this.client_id}&${this.response_type}&${this.redirect_uri}&${this.scope}`;
    }
    ngOnInit() { }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 4, vars: 1, consts: [[1, "login-link", 3, "href"], ["src", "/assets/spotify-logo.svg", "alt", "spotify", 1, "login-link__image"], [1, "login-link__button"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.authUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-rows: auto;\n  justify-items: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.login-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: grid;\n  justify-items: center;\n  height: 150px;\n}\n\n.login-link__image[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n\n.login-link__button[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 30px;\n  outline: none;\n  border: none;\n  background-color: #7abd00;\n  border-radius: 30px;\n  color: RGBA(231, 252, 255, 1);\n  font-weight: 400;\n  font-size: 12px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcXDpob3N0XHJcbiAgZGlzcGxheTogZ3JpZFxyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0b1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlclxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICBoZWlnaHQ6IDEwMHZoXHJcblxyXG4ubG9naW4tbGlua1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG4gIGRpc3BsYXk6IGdyaWRcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXJcclxuICBoZWlnaHQ6IDE1MHB4XHJcblxyXG4gICZfX2ltYWdlXHJcbiAgICBoZWlnaHQ6IDEwMHB4XHJcbiAgICB3aWR0aDogMTAwcHhcclxuXHJcbiAgJl9fYnV0dG9uXHJcbiAgICB3aWR0aDogMTIwcHhcclxuICAgIGhlaWdodDogMzBweFxyXG4gICAgb3V0bGluZTogbm9uZVxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FiZDAwXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4XHJcbiAgICBjb2xvcjogUkdCQSgyMzEsIDI1MiwgMjU1LCAxKVxyXG4gICAgZm9udC13ZWlnaHQ6IDQwMFxyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.sass'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/panel/index.ts":
/*!********************************!*\
  !*** ./src/app/panel/index.ts ***!
  \********************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.component */ "./src/app/panel/panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return _panel_component__WEBPACK_IMPORTED_MODULE_0__["PanelComponent"]; });




/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function PanelComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Duplicates Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Analyzing ", ctx_r1.lastOffset, " tracks\n");
} }
const _c0 = function (a0) { return { explicit: a0 }; };
function PanelComponent_div_2_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Added in ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, track_r6.addDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Album: ", track_r6.album, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Year: ", track_r6.year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Popularity: ", track_r6.popularity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration: ", track_r6.duration / 100, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, track_r6 == null ? null : track_r6.explicit));
} }
function PanelComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " times on your library");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_div_2_div_1_Template_span_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.openDetails($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PanelComponent_div_2_div_1_div_15_Template, 15, 10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.artists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r4.tracks);
} }
function PanelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelComponent_div_2_div_1_Template, 16, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.duplicateTracks);
} }
class PanelComponent {
    constructor(http, route, router, tracksService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.tracksService = tracksService;
        this.permit = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.lastOffset = 0;
        this.openDetails = (event) => {
            const target = event.target.parentElement
                .parentElement;
            target.classList.contains('open')
                ? target.classList.toggle('open')
                : target.classList.add('open');
        };
        this.findDuplicates = () => {
            const { tracks } = this.tracksService;
            const counterMap = tracks.reduce((acc, cur) => {
                var _a, _b, _c, _d;
                const key = `${cur.name}|*|${cur.artists}`;
                acc[key] = {
                    artists: cur.artists,
                    name: cur.name,
                    count: ((_b = (_a = acc[key]) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0) + 1,
                    tracks: [...((_d = (_c = acc[key]) === null || _c === void 0 ? void 0 : _c.tracks) !== null && _d !== void 0 ? _d : []), cur],
                };
                return acc;
            }, {});
            const duplicateTracks = Object.values(counterMap)
                .filter(e => e.count > 1)
                .sort((a, b) => b.count - a.count);
            this.duplicateTracks = duplicateTracks;
            console.log({ duplicateTracks });
        };
        this.getTracks = (permit) => {
            if (!permit) {
                return;
            }
            const access_token = localStorage.getItem('access_token');
            if (access_token) {
                this.http
                    .get(`https://api.spotify.com/v1/me/tracks?limit=50&offset=${this.lastOffset}`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                    .subscribe(({ next, items, offset }) => {
                    this.lastOffset = offset + 50;
                    this.saveTracks(items);
                    if (next) {
                        this.getTracks(true);
                    }
                    else {
                        this.findDuplicates();
                    }
                }, this.refreshToken);
            }
        };
        this.saveTracks = (tracks) => {
            this.tracksService.tracks.push(...tracks.map(({ added_at, track }) => ({
                addDate: new Date(added_at),
                album: track.album.name,
                name: track.name,
                popularity: track.popularity,
                artists: track.artists.map(a => a.name),
                duration: track.duration_ms,
                explicit: track.explicit,
                uri: track.uri,
                year: +track.album.release_date.split('-')[0],
            })));
        };
        this.refreshToken = () => {
            debugger;
            const refresh_token = localStorage.getItem('refresh_token');
            this.http
                .post('https://accounts.spotify.com/api/token', `grant_type=refresh_token&refresh_token=${refresh_token}`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Basic NmRhMjRkZDYzNjRmNGRmMzkxZWNlNDIyNDYyNTI5Y2I6OTM4ZDQzMjEwNGFlNDc2ODk2ZjlhMDI4N2I5MTc5Mzk=',
                },
            })
                .subscribe(this.saveToken, err => console.error('quebrou ao revalidar token', err));
        };
        this.saveToken = (res) => {
            console.log('saveToken', res);
            localStorage.setItem('access_token', res.access_token);
            if (res.refresh_token) {
                localStorage.setItem('refresh_token', res.refresh_token);
            }
            console.log(res);
            this.setPermit();
            return this.router.navigateByUrl('/panel');
        };
        this.permit.subscribe(this.getTracks);
        this.checkAuthorizationCode();
        this.setPermit();
    }
    ngOnInit() { }
    checkAuthorizationCode() {
        this.route.queryParamMap.subscribe(params => {
            const code = params.get('code');
            if (!code) {
                if (!localStorage.getItem('access_token')) {
                    this.router.navigateByUrl('/login');
                }
                return;
            }
            localStorage.clear();
            this.http
                .post(`https://accounts.spotify.com/api/token`, `grant_type=authorization_code&code=${code}&redirect_uri=http://127.0.0.1:4200/panel`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Basic NmRhMjRkZDYzNjRmNGRmMzkxZWNlNDIyNDYyNTI5Y2I6OTM4ZDQzMjEwNGFlNDc2ODk2ZjlhMDI4N2I5MTc5Mzk=',
                },
            })
                .subscribe(res => {
                this.saveToken(res);
            }, () => this.router.navigateByUrl('/login'));
        });
    }
    setPermit() {
        const refresh_token = localStorage.getItem('refresh_token');
        if (refresh_token) {
            this.permit.next(true);
        }
    }
    logout() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["TracksService"])); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["app-panel"]], decls: 3, vars: 3, consts: [["class", "duplicates-found", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], ["class", "duplicates", 4, "ngIf"], [1, "duplicates-found"], [1, "spinner"], [1, "duplicates"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "details", "details--block"], [1, "item__name"], [1, "item__artist"], [1, "item__quantity"], [1, "item__open", 3, "click"], ["class", "hidden-details", 4, "ngFor", "ngForOf"], [1, "hidden-details"], [1, "details"], [3, "ngClass"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelComponent_div_2_Template, 2, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.duplicateTracks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.duplicateTracks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.duplicateTracks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["@charset \"UTF-8\";\n.duplicates-found[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-left: 3%;\n  font-size: 44px;\n}\n.spinner[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 77px;\n  margin-top: 10%;\n}\n.duplicates[_ngcontent-%COMP%] {\n  margin: 20px 5%;\n  font-size: 24px;\n}\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 4px 0;\n}\n.details[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.details--lefts[_ngcontent-%COMP%] {\n  display: block;\n}\n.hidden-details[_ngcontent-%COMP%] {\n  margin: 22px 0;\n}\n.explicit[_ngcontent-%COMP%]::after {\n  content: \"Explicit\";\n}\n.item[_ngcontent-%COMP%] {\n  display: block;\n  margin: 15px 5px;\n  padding: 0 12px;\n  overflow: hidden;\n  max-height: 35px;\n  border-radius: 5px;\n  background-color: #f1f1f1;\n  transition: max-height 0.3s;\n}\n.item.open[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.item[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.item__open[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  border: 1px solid #0001;\n  height: 21px;\n  width: 21px;\n  transition: background-color 0.3s;\n  border-radius: 5px;\n  margin-left: auto;\n}\n.item__open[_ngcontent-%COMP%]:hover {\n  background-color: #dadada;\n  cursor: pointer;\n}\n.item__open[_ngcontent-%COMP%]::after {\n  content: \"\u2195\uFE0F\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRUY7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFHRjtBQURBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFJRjtBQUZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUtGO0FBSEU7RUFDRSxrQkFBQTtBQUtKO0FBSEU7RUFDRSxjQUFBO0FBS0o7QUFIQTtFQUNFLGNBQUE7QUFNRjtBQUhBO0VBQ0UsbUJBQUE7QUFNRjtBQUpBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFPRjtBQUxFO0VBQ0UsaUJBQUE7QUFPSjtBQUxFO0VBQ0UsZ0JBQUE7QUFPSjtBQUxFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFHQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFPSjtBQUxJO0VBQ0UseUJBQUE7RUFFQSxlQUFBO0FBTU47QUFKSTtFQUNFLGFBQUE7QUFNTiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmR1cGxpY2F0ZXMtZm91bmQge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBmb250LXNpemU6IDQ0cHg7XG59XG5cbi5zcGlubmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDc3cHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmR1cGxpY2F0ZXMge1xuICBtYXJnaW46IDIwcHggNSU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDRweCAwO1xufVxuLmRldGFpbHMgPiAqIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLmRldGFpbHMtLWxlZnRzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oaWRkZW4tZGV0YWlscyB7XG4gIG1hcmdpbjogMjJweCAwO1xufVxuXG4uZXhwbGljaXQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJFeHBsaWNpdFwiO1xufVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDE1cHggNXB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzO1xufVxuLml0ZW0ub3BlbiB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuLml0ZW0gYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaXRlbV9fb3BlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAxO1xuICBoZWlnaHQ6IDIxcHg7XG4gIHdpZHRoOiAyMXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLml0ZW1fX29wZW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaXRlbV9fb3Blbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKGle+4j1wiO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.sass'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["TracksService"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git\spotify-duplicate-finder\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map