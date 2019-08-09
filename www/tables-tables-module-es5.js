(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/tables/tables.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/tables/tables.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Tables</h1>"

/***/ }),

/***/ "./src/app/home/tables/tables.module.ts":
/*!**********************************************!*\
  !*** ./src/app/home/tables/tables.module.ts ***!
  \**********************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tables_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.page */ "./src/app/home/tables/tables.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var Routes = [{
        path: '',
        component: _tables_page__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"]
    }];
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Routes)
            ],
            declarations: [
                _tables_page__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"]
            ]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "./src/app/home/tables/tables.page.scss":
/*!**********************************************!*\
  !*** ./src/app/home/tables/tables.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: #cecece;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90YWJsZXMvQzpcXFVzZXJzXFxCcmlhblxcRG9jdW1lbnRzXFxhcHBzXFxuUGFuZWwvc3JjXFxhcHBcXGhvbWVcXHRhYmxlc1xcdGFibGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS90YWJsZXMvdGFibGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL3RhYmxlcy90YWJsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xyXG59IiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/tables/tables.page.ts":
/*!********************************************!*\
  !*** ./src/app/home/tables/tables.page.ts ***!
  \********************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./tables.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/tables/tables.page.html"),
            selector: 'app-tables',
            styles: [__webpack_require__(/*! ./tables.page.scss */ "./src/app/home/tables/tables.page.scss")]
        })
    ], TablesComponent);
    return TablesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=tables-tables-module-es5.js.map