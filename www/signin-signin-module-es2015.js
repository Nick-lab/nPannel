(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n    <div class=\"container py-5\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 mx-auto\">\n    \n                        <!-- form card login -->\n                        <div class=\"card rounded-0\">\n                            <div class=\"card-header\">\n                                <h3 class=\"mb-0\">Login</h3>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"form-group\">\n                                    <label for=\"uname1\">Email</label>\n                                    <input type=\"text\" class=\"form-control form-control-lg rounded-0\" [(ngModel)]=\"email\">\n                                    <div class=\"invalid-feedback\" ng-style=\"passValid ? {} : {display: 'block'}\">Oops, you missed this one.</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Password</label>\n                                    <input type=\"password\" class=\"form-control form-control-lg rounded-0\" autocomplete=\"new-password\" [(ngModel)]=\"password\">\n                                    <div class=\"invalid-feedback\" ng-style=\"passValid ? {} : {display: 'block'}\">Enter your password too!</div>\n                                    <div class=\"invalid-feedback\" ng-style=\"passFail ? {} : {display: 'block'}\">Email or Password was incorrect</div>\n                                </div>\n                                <button type=\"submit\" [disabled]=\"invalid\" class=\"btn btn-success btn-lg float-right\" (click)=\"onSignin()\">Login</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/signin/signin.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninModule", function() { return SigninModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





const Routes = [{
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]
    }];
let SigninModule = class SigninModule {
};
SigninModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Routes)
        ],
        declarations: [
            _signin_page__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]
        ]
    })
], SigninModule);



/***/ }),

/***/ "./src/app/signin/signin.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  background-color: #cecece;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrbGFicmVjcXVlL0RvY3VtZW50cy9hcHBzL25QYW5lbC9zcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG59IiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/signin/signin.page.ts":
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SigninComponent = class SigninComponent {
    constructor(dataMngr, router) {
        this.dataMngr = dataMngr;
        this.router = router;
        this.invalid = false;
        this.emailValid = true;
        this.passValid = true;
        this.passFail = false;
    }
    onSignin() {
        this.passFail = false;
        if (this.email && this.password) {
            const pass = ts_md5__WEBPACK_IMPORTED_MODULE_3__["Md5"].hashStr(this.password);
            this.dataMngr.post('signin', { email: this.email, pass }).then((res) => {
                if (res) {
                    this.dataMngr.save('user-data', res);
                    this.router.navigate(['admin/']);
                }
                else {
                    this.password = '';
                    this.passFail = true;
                }
            });
        }
        else {
            if (!this.email) {
                this.emailValid = false;
            }
            if (!this.password) {
                this.passValid = false;
            }
        }
    }
};
SigninComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html")).default,
        selector: 'app-signin',
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.page.scss */ "./src/app/signin/signin.page.scss")).default]
    })
], SigninComponent);



/***/ })

}]);
//# sourceMappingURL=signin-signin-module-es2015.js.map