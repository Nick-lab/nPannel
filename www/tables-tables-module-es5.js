function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/tables/tables.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/tables/tables.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeTablesTablesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Tables</h1>";
    /***/
  },

  /***/
  "./src/app/home/tables/tables.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/home/tables/tables.module.ts ***!
    \**********************************************/

  /*! exports provided: TablesModule */

  /***/
  function srcAppHomeTablesTablesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
      return TablesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tables_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tables.page */
    "./src/app/home/tables/tables.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var Routes = [{
      path: '',
      component: _tables_page__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"]
    }];

    var TablesModule = function TablesModule() {
      _classCallCheck(this, TablesModule);
    };

    TablesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Routes)],
      declarations: [_tables_page__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"]]
    })], TablesModule);
    /***/
  },

  /***/
  "./src/app/home/tables/tables.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/home/tables/tables.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeTablesTablesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  background-color: #cecece;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrbGFicmVjcXVlL0RvY3VtZW50cy9hcHBzL25QYW5lbC9zcmMvYXBwL2hvbWUvdGFibGVzL3RhYmxlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvdGFibGVzL3RhYmxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS90YWJsZXMvdGFibGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG59IiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/tables/tables.page.ts":
  /*!********************************************!*\
    !*** ./src/app/home/tables/tables.page.ts ***!
    \********************************************/

  /*! exports provided: TablesComponent */

  /***/
  function srcAppHomeTablesTablesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
      return TablesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TablesComponent = function TablesComponent() {
      _classCallCheck(this, TablesComponent);
    };

    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tables.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/tables/tables.page.html")).default,
      selector: 'app-tables',
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tables.page.scss */
      "./src/app/home/tables/tables.page.scss")).default]
    })], TablesComponent);
    /***/
  }
}]);
//# sourceMappingURL=tables-tables-module-es5.js.map