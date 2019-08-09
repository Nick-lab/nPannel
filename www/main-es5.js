(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/home/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./pages/pages.module": [
		"./src/app/home/pages/pages.module.ts",
		"pages-pages-module"
	],
	"./resources/resources.module": [
		"./src/app/home/resources/resources.module.ts",
		"resources-resources-module"
	],
	"./settings/settings.module": [
		"./src/app/home/settings/settings.module.ts",
		"settings-settings-module"
	],
	"./signin/signin.module": [
		"./src/app/signin/signin.module.ts",
		"signin-signin-module"
	],
	"./tables/tables.module": [
		"./src/app/home/tables/tables.module.ts",
		"tables-tables-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/pages/create-page/create-page.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/pages/create-page/create-page.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">New Page {{ (parent ? parent : 'Root') }}</h4>\r\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" (click)=\"onClose()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n    </div>\r\n    \r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"title\" [(ngModel)]=\"title\" (change)=\"onUpdateRoute()\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"route\" [(ngModel)]=\"route\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <select class=\"form-control\" name=\"type\" [(ngModel)]=\"type\">\r\n                    <option value=\"default\">Default</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"modal-footer\">\r\n            <button _ngcontent-jwm-c4=\"\" class=\"btn btn-outline-success\" type=\"button\" (click)=\"onSave()\">Save</button>\r\n    </div>\r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/access-gaurd.service.ts":
/*!*****************************************!*\
  !*** ./src/app/access-gaurd.service.ts ***!
  \*****************************************/
/*! exports provided: AccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessGuard", function() { return AccessGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");




var AccessGuard = /** @class */ (function () {
    function AccessGuard(dataMngr, router) {
        this.dataMngr = dataMngr;
        this.router = router;
        // this.dataMngr.loadUser();
    }
    AccessGuard.prototype.canActivate = function (route) {
        var requiresAdmin = route.data.requiresAdmin || false;
        if (requiresAdmin) {
            // Check that the user is logged in...
            var user = this.dataMngr.load('user-data');
            if (user) {
                return true;
            }
            else {
                console.log('deny');
                this.router.navigateByUrl('admin/signin');
                return false;
            }
        }
        else {
            return true;
        }
    };
    AccessGuard.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataManagerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AccessGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AccessGuard);
    return AccessGuard;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _access_gaurd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-gaurd.service */ "./src/app/access-gaurd.service.ts");




var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin'
    },
    {
        path: 'admin',
        loadChildren: './home/home.module#HomeModule',
        data: { requiresAdmin: true },
        canActivate: [_access_gaurd_service__WEBPACK_IMPORTED_MODULE_3__["AccessGuard"]]
    },
    {
        path: 'admin/signin',
        loadChildren: './signin/signin.module#SigninModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'n-pannel';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_ace_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ace-wrapper */ "./node_modules/ngx-ace-wrapper/dist/ngx-ace-wrapper.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _access_gaurd_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./access-gaurd.service */ "./src/app/access-gaurd.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_pages_create_page_create_page_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/pages/create-page/create-page.page */ "./src/app/home/pages/create-page/create-page.page.ts");















var DEFAULT_ACE_CONFIG = {};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_pages_create_page_create_page_page__WEBPACK_IMPORTED_MODULE_13__["CreatePageComponent"]
            ],
            entryComponents: [
                _home_pages_create_page_create_page_page__WEBPACK_IMPORTED_MODULE_13__["CreatePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                ngx_ace_wrapper__WEBPACK_IMPORTED_MODULE_6__["AceModule"]
            ],
            providers: [
                _access_gaurd_service__WEBPACK_IMPORTED_MODULE_9__["AccessGuard"],
                _data_service__WEBPACK_IMPORTED_MODULE_10__["DataManagerService"],
                { provide: ngx_ace_wrapper__WEBPACK_IMPORTED_MODULE_6__["ACE_CONFIG"], useValue: DEFAULT_ACE_CONFIG },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagerService", function() { return DataManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var DataManagerService = /** @class */ (function () {
    function DataManagerService(http) {
        var _this = this;
        this.http = http;
        this.ep = 'localhost';
        this.prod = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production;
        this.devPoints = {
            ep: 'localhost:3000/'
        };
        this.prodPoints = {
            ep: 'https://punchcardllc.com/_endpoints/punchcard_001/'
        };
        if (this.prod) {
            Object.keys(this.prodPoints).forEach(function (key) {
                _this[key] = _this.prodPoints[key];
            });
        }
        else {
            Object.keys(this.devPoints).forEach(function (key) {
                _this[key] = _this.devPoints[key];
            });
        }
    }
    DataManagerService.prototype.localSave = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };
    DataManagerService.prototype.Localload = function (key) {
        if (localStorage.getItem(key) != null) {
            return JSON.parse(localStorage.getItem(key));
        }
        else {
            return false;
        }
    };
    DataManagerService.prototype.save = function (key, data) {
        return this.localSave(key, data);
    };
    DataManagerService.prototype.load = function (key) {
        return this.Localload(key);
    };
    DataManagerService.prototype.post = function (command, data) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
        });
        console.log(data);
        return new Promise(function (resolve, reject) {
            _this.http.post('/' + command, JSON.stringify(data), { headers: headers }).toPromise().then(function (response) {
                // clearTimeout(timeout);
                if (response) {
                    resolve(response);
                }
                else {
                    resolve(false);
                }
            }).catch(function (error) {
                // if (triggerError) this.serverError();
            });
        });
    };
    DataManagerService.prototype.filePost = function (command, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (res, rej) {
                        // data.append('command', command);
                        _this.http.post('/' + command, data, {
                            reportProgress: true,
                            observe: 'events',
                            responseType: 'text',
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ processData: 'false' }),
                        }).subscribe(function (event) {
                            switch (event.type) {
                                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Sent:
                                    // start
                                    // load.present();
                                    break;
                                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                                    // complete
                                    // load.dismiss();
                                    _this.uploadedPercentage = 0;
                                    res(event.body);
                                    break;
                                case 1: {
                                    if (Math.round(_this.uploadedPercentage) !== Math.round(event['loaded'] / event['total'] * 100)) {
                                        _this.uploadedPercentage = event['loaded'] / event['total'] * 100;
                                        // this.event.publish('loader', this.uploadedPercentage);
                                    }
                                    break;
                                }
                            }
                        });
                    })];
            });
        });
    };
    DataManagerService.prototype.get = function (path, options) {
        var _this = this;
        if (options === void 0) { options = false; }
        return new Promise(function (res, rej) {
            _this.http.get(path, { responseType: 'blob' }).subscribe(function (file) {
                res(file);
            });
        });
    };
    DataManagerService.prototype.loadUser = function () {
        this.user = this.Localload('user-data');
    };
    DataManagerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DataManagerService);
    return DataManagerService;
}());



/***/ }),

/***/ "./src/app/home/pages/create-page/create-page.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/home/pages/create-page/create-page.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYWdlcy9jcmVhdGUtcGFnZS9DOlxcVXNlcnNcXEJyaWFuXFxEb2N1bWVudHNcXGFwcHNcXG5QYW5lbC9zcmNcXGFwcFxcaG9tZVxccGFnZXNcXGNyZWF0ZS1wYWdlXFxjcmVhdGUtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvcGFnZXMvY3JlYXRlLXBhZ2UvY3JlYXRlLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFnZXMvY3JlYXRlLXBhZ2UvY3JlYXRlLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59IiwiLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/pages/create-page/create-page.page.ts":
/*!************************************************************!*\
  !*** ./src/app/home/pages/create-page/create-page.page.ts ***!
  \************************************************************/
/*! exports provided: CreatePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageComponent", function() { return CreatePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




var CreatePageComponent = /** @class */ (function () {
    function CreatePageComponent(dataMngr, data, dialogRef) {
        this.dataMngr = dataMngr;
        this.data = data;
        this.dialogRef = dialogRef;
        this.parent = this.data.parent;
        this.parentRoute = this.data.parentRoute || false;
    }
    CreatePageComponent.prototype.onSave = function () {
        var _this = this;
        var tmp = {
            do: this.data.page ? 'edit-page' : 'create-page',
            title: this.title,
            route: this.route,
            type: this.type,
            parent: this.parent
        };
        this.dataMngr.post('page', tmp).then(function () {
            _this.onClose();
        });
    };
    CreatePageComponent.prototype.onUpdateRoute = function () {
        this.route = (this.parentRoute ? this.parentRoute : '') + '/' + this.title.toLowerCase().replace(/[ ]/gm, '_');
    };
    CreatePageComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    CreatePageComponent.ctorParameters = function () { return [
        { type: src_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
    ]; };
    CreatePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./create-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/pages/create-page/create-page.page.html"),
            selector: 'app-create-page',
            styles: [__webpack_require__(/*! ./create-page.page.scss */ "./src/app/home/pages/create-page/create-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], CreatePageComponent);
    return CreatePageComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Brian\Documents\apps\nPanel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map