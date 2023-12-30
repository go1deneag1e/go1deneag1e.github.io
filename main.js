"use strict";
(self["webpackChunkflipbook_app"] = self["webpackChunkflipbook_app"] || []).push([["main"],{

/***/ 8518:
/*!*************************************************************!*\
  !*** ./projects/flipbook-app/src/app/app-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 3622:
/*!********************************************************!*\
  !*** ./projects/flipbook-app/src/app/app.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _labsforge_flipbook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @labsforge/flipbook */ 3768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AppComponent {
    constructor(elr, flipService) {
        this.elr = elr;
        this.flipService = flipService;
        this.startAt = 0;
        this.currentPage = 1;
    }
    get demoBook() {
        return this.flipService.book;
    }
    ngOnInit() {
        this.flipService.book = {
            width: 1190,
            height: 800,
            zoom: 1,
            cover: {
                front: {
                    imageUrl: 'assets/demo/Cover.png',
                },
                back: {
                    imageUrl: 'assets/demo/50.png',
                }
            },
            pages: [
                {
                    imageUrl: 'assets/demo/guard.jpg',
                },
                {
                    imageUrl: 'assets/demo/guard.jpg',
                    backgroundColor: '#41473A', // don't use if want to see back-cover inverted image
                },
                {
                    imageUrl: 'assets/demo/1.png',
                },
                {
                    imageUrl: 'assets/demo/2.png',
                },
                {
                    imageUrl: 'assets/demo/3.png',
                },
                {
                    imageUrl: 'assets/demo/4.png',
                },
                {
                    imageUrl: 'assets/demo/5.png',
                },
                {
                    imageUrl: 'assets/demo/6.png',
                },
                {
                    imageUrl: 'assets/demo/7.png',
                },
                {
                    imageUrl: 'assets/demo/8.png',
                },
                {
                    imageUrl: 'assets/demo/9.png',
                },
                {
                    imageUrl: 'assets/demo/10.png',
                },
                {
                    imageUrl: 'assets/demo/11.png',
                },
                {
                    imageUrl: 'assets/demo/12.png',
                },
                {
                    imageUrl: 'assets/demo/13.png',
                },
                {
                    imageUrl: 'assets/demo/14.png',
                },
                {
                    imageUrl: 'assets/demo/15.png',
                },
                {
                    imageUrl: 'assets/demo/16.png',
                },
                {
                    imageUrl: 'assets/demo/17.png',
                },
                {
                    imageUrl: 'assets/demo/18.png',
                },
                {
                    imageUrl: 'assets/demo/19.png',
                },
                {
                    imageUrl: 'assets/demo/20.png',
                },
                {
                    imageUrl: 'assets/demo/21.png',
                },
                {
                    imageUrl: 'assets/demo/22.png',
                },
                {
                    imageUrl: 'assets/demo/23.png',
                },
                {
                    imageUrl: 'assets/demo/24.png',
                },
                {
                    imageUrl: 'assets/demo/25.png',
                },
                {
                    imageUrl: 'assets/demo/26.png',
                },
                {
                    imageUrl: 'assets/demo/27.png',
                },
                {
                    imageUrl: 'assets/demo/28.png',
                },
                {
                    imageUrl: 'assets/demo/29.png',
                },
                {
                    imageUrl: 'assets/demo/30.png',
                },
                {
                    imageUrl: 'assets/demo/31.png',
                },
                {
                    imageUrl: 'assets/demo/32.png',
                },
                {
                    imageUrl: 'assets/demo/33.png',
                },
                {
                    imageUrl: 'assets/demo/34.png',
                },
                {
                    imageUrl: 'assets/demo/35.png',
                },
                {
                    imageUrl: 'assets/demo/36.png',
                },
                {
                    imageUrl: 'assets/demo/37.png',
                },
                {
                    imageUrl: 'assets/demo/38.png',
                },
                {
                    imageUrl: 'assets/demo/39.png',
                },
                {
                    imageUrl: 'assets/demo/40.png',
                },
                {
                    imageUrl: 'assets/demo/41.png',
                },
                {
                    imageUrl: 'assets/demo/42.png',
                },
                {
                    imageUrl: 'assets/demo/43.png',
                },
                {
                    imageUrl: 'assets/demo/44.png',
                },
                {
                    imageUrl: 'assets/demo/45.png',
                },
                {
                    imageUrl: 'assets/demo/46.png',
                },
                {
                    imageUrl: 'assets/demo/47.png',
                },
                {
                    imageUrl: 'assets/demo/48.png',
                },
                {
                    imageUrl: 'assets/demo/49.png',
                },
                {
                    imageUrl: 'assets/demo/guard.jpg',
                    backgroundColor: '#41473A', // don't use if want to see back-cover inverted image
                }, // end guard section
            ],
            pageWidth: 585,
            pageHeight: 780,
            startPageType: _labsforge_flipbook__WEBPACK_IMPORTED_MODULE_0__.PageType.Double,
            endPageType: _labsforge_flipbook__WEBPACK_IMPORTED_MODULE_0__.PageType.Double
        };
    }
    onPrev() {
        this.flipService.prev.next();
    }
    onPlay() {
        this.flipService.play.next();
    }
    onPause() {
        this.flipService.pause.next();
    }
    onNext() {
        this.flipService.next.next();
    }
    onWindowResize() {
        if (!this.flipService.book) {
            return;
        }
        const boundsWidth = this.elr.nativeElement.getBoundingClientRect().width * .8;
        const boundsHeight = this.elr.nativeElement.getBoundingClientRect().height * .6;
        this.flipService.book.zoom = Math.min(boundsWidth / this.flipService.book.width, boundsHeight / this.flipService.book.height);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_labsforge_flipbook__WEBPACK_IMPORTED_MODULE_0__.FlipbookService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 10, vars: 2, consts: [[3, "model", "startAt"], [1, "controls"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "flipbook", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() { return ctx.onPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.onPlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "play");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.onPause(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "pause");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.onNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", ctx.demoBook)("startAt", ctx.startAt);
    } }, directives: [_labsforge_flipbook__WEBPACK_IMPORTED_MODULE_0__.BookComponent], styles: ["[_nghost-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #eee;\n}\n\nflipbook[_ngcontent-%COMP%] {\n  filter: drop-shadow(0px 7px 6px #00000040);\n}\n\n.controls[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbmZsaXBib29rIHtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA3cHggNnB4ICMwMDAwMDA0MClcclxufVxyXG5cclxuLmNvbnRyb2xzIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBnYXA6IDIwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6636:
/*!*****************************************************!*\
  !*** ./projects/flipbook-app/src/app/app.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 8518);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 3622);
/* harmony import */ var _labsforge_flipbook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @labsforge/flipbook */ 3768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _labsforge_flipbook__WEBPACK_IMPORTED_MODULE_4__.FlipBookModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _labsforge_flipbook__WEBPACK_IMPORTED_MODULE_4__.FlipBookModule] }); })();


/***/ }),

/***/ 9456:
/*!***************************************************************!*\
  !*** ./projects/flipbook-app/src/environments/environment.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4034:
/*!*******************************************!*\
  !*** ./projects/flipbook-app/src/main.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6636);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 9456);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4034)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map