(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/settings/settings.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/settings/settings.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-sm-6\">\r\n                <h1 class=\"m-0 text-dark\">Settings</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/settings/settings.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/settings/settings.module.ts ***!
  \**************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page */ "./src/app/home/settings/settings.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var Routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]
    }];
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Routes)
            ],
            declarations: [
                _settings_page__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/home/settings/settings.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/settings/settings.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: #cecece;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zZXR0aW5ncy9DOlxcVXNlcnNcXEJyaWFuXFxEb2N1bWVudHNcXGFwcHNcXG5QYW5lbC9zcmNcXGFwcFxcaG9tZVxcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XHJcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/settings/settings.page.ts":
/*!************************************************!*\
  !*** ./src/app/home/settings/settings.page.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/settings/settings.page.html"),
            selector: 'app-settings',
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/home/settings/settings.page.scss")]
        })
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map