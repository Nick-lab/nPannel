(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resources-resources-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/resources/resources.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/resources/resources.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-sm-6\">\r\n                <h1 class=\"m-0 text-dark\">Resources</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"content\">\r\n    \r\n</section>"

/***/ }),

/***/ "./src/app/home/resources/resources.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/resources/resources.module.ts ***!
  \****************************************************/
/*! exports provided: ResourcesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesModule", function() { return ResourcesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resources_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.page */ "./src/app/home/resources/resources.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var Routes = [{
        path: '',
        component: _resources_page__WEBPACK_IMPORTED_MODULE_2__["ResourcesComponent"]
    }];
var ResourcesModule = /** @class */ (function () {
    function ResourcesModule() {
    }
    ResourcesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Routes)
            ],
            declarations: [
                _resources_page__WEBPACK_IMPORTED_MODULE_2__["ResourcesComponent"]
            ]
        })
    ], ResourcesModule);
    return ResourcesModule;
}());



/***/ }),

/***/ "./src/app/home/resources/resources.page.scss":
/*!****************************************************!*\
  !*** ./src/app/home/resources/resources.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: #cecece;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yZXNvdXJjZXMvQzpcXFVzZXJzXFxCcmlhblxcRG9jdW1lbnRzXFxhcHBzXFxuUGFuZWwvc3JjXFxhcHBcXGhvbWVcXHJlc291cmNlc1xccmVzb3VyY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9yZXNvdXJjZXMvcmVzb3VyY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Jlc291cmNlcy9yZXNvdXJjZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xyXG59IiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/resources/resources.page.ts":
/*!**************************************************!*\
  !*** ./src/app/home/resources/resources.page.ts ***!
  \**************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./resources.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/resources/resources.page.html"),
            selector: 'app-resources',
            styles: [__webpack_require__(/*! ./resources.page.scss */ "./src/app/home/resources/resources.page.scss")]
        })
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=resources-resources-module-es5.js.map