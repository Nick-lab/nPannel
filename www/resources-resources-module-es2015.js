(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resources-resources-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/resources/resources.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/resources/resources.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\n    <div class=\"container-fluid\">\n        <div class=\"row mb-2\">\n            <div class=\"col-sm-6\">\n                <h1 class=\"m-0 text-dark\">Resources</h1>\n            </div>\n            <div class=\"col-sm-6\">\n                <ol class=\"breadcrumb float-sm-right\">\n                    <li class=\"breadcrumb-item\" *ngFor=\"let route of routeArr\" [class.active]=\"route.active\"><a (click)=\"onRoute(route.path)\">{{ route.text }}</a></li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"content\">\n    <div [class.open]=\"filesOpen\" class=\"files-panel open\">\n        <div class=\"files list-group\">\n            <div class=\"list-group-item settings\">\n                <a class=\"toggle\" (document:keydown.meta.b)=\"onToggleFiles($event)\" (click)=\"onToggleFiles()\"><i [class.fa-rotate-180]=\"filesOpen\" class=\"fas fa-caret-right\"></i></a>\n                <a class=\"settings\" (click)=\"onSettings()\"><i class=\"fas fa-cog\"></i></a>\n            </div>\n            <div class=\"list-group-item\" *ngIf=\"route !== ''\" (dblclick)=\"onBackRoute()\">\n                <i class=\"fas fa-level-up-alt\"></i>\n                <span class=\"list-text\">. . .</span>\n            </div>\n            <div class=\"list-group-item\" *ngFor=\"let file of files\" (dblclick)=\"onOpen(file)\">\n                <i class=\"fas fa-file-code\" *ngIf=\"file.file\"></i>\n                <i class=\"fas fa-folder\" *ngIf=\"file.directory\"></i>\n                <span class=\"list-text\">{{ file.name }}</span>\n            </div>\n            <div class=\"list-group-item\" (click)=\"onUpload()\">\n                <i class=\"fas fa-upload\"></i>\n                <span class=\"list-text\">Upload to {{ route.split('/').pop() }}</span>\n            </div>\n        </div>\n        <div class=\"ace-panel\">\n            <ace [config]=\"config\" [(value)]=\"code[codeTab]\"></ace>\n        </div>\n    </div>\n    <div class=\"editor-panel card\">\n\n        <div class=\"card-header\">\n            <ul class=\"nav nav-tabs\" style=\"border-bottom: 0;\">\n                <li class=\"nav-item\" *ngFor=\"let file of code; let i = index\">\n                    <a [class.active]=\"file.active\" class=\"nav-link\" (click)=\"onActive(i)\">\n                        <span class=\"edited\" *ngIf=\"file.lastEdit !== file.lastSave\">•</span>\n                        {{file.name}} \n                        <a (click)=\"onClose(i)\">\n                            <i class=\"fas fa-times\"></i>\n                        </a>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body\">\n            <div class=\"editor\" *ngIf=\"activeIndex >= 0 && code[activeIndex]\">\n                <div class=\"image\" *ngIf=\"code[activeIndex].type == 'image'\">\n                    <img [src]=\"code[activeIndex].name\" [alt]=\"code[activeIndex].name\">\n                </div>\n                <div class=\"video\" *ngIf=\"code[activeIndex].type == 'video'\">\n                    <video [src]=\"code[activeIndex].path\"></video>\n                </div>\n                <div class=\"code\" *ngIf=\"code[activeIndex].config\">\n                    <ace [config]=\"code[activeIndex].config\" [(value)]=\"code[activeIndex].code\" (valueChange)=\"onEdited(activeIndex)\"></ace>\n                </div>\n                <div class=\"error\" *ngIf=\"!code[activeIndex]?.type && !code[activeIndex]?.config\">\n                    <p>Un handled file type cannot open {{code[activeIndex].name}}</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</section>");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _resources_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.page */ "./src/app/home/resources/resources.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_ace_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ace-wrapper */ "./node_modules/ngx-ace-wrapper/dist/ngx-ace-wrapper.es5.js");







const Routes = [{
        path: '',
        component: _resources_page__WEBPACK_IMPORTED_MODULE_2__["ResourcesComponent"]
    }];
let ResourcesModule = class ResourcesModule {
};
ResourcesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            ngx_ace_wrapper__WEBPACK_IMPORTED_MODULE_6__["AceModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Routes)
        ],
        declarations: [
            _resources_page__WEBPACK_IMPORTED_MODULE_2__["ResourcesComponent"]
        ]
    })
], ResourcesModule);



/***/ }),

/***/ "./src/app/home/resources/resources.page.scss":
/*!****************************************************!*\
  !*** ./src/app/home/resources/resources.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n\n.background {\n  background-color: #cecece;\n}\n\nsection.content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\nsection.content .files-panel {\n  width: 50px;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n\nsection.content .files-panel .list-group-item {\n  white-space: nowrap;\n  padding: 0.5rem 1rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\nsection.content .files-panel .list-group-item.settings {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\nsection.content .files-panel .list-group-item.settings a.settings {\n  opacity: 0;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n\nsection.content .files-panel .list-group-item i {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\nsection.content .files-panel .list-group-item .list-text {\n  padding-left: 0.5rem;\n  opacity: 0;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n\nsection.content .files-panel.open, section.content .files-panel:hover {\n  width: 15vw;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  min-width: 200px;\n}\n\nsection.content .files-panel.open .list-group-item, section.content .files-panel:hover .list-group-item {\n  text-align: left;\n}\n\nsection.content .files-panel.open .list-group-item.settings, section.content .files-panel:hover .list-group-item.settings {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\nsection.content .files-panel.open .list-group-item.settings a.settings, section.content .files-panel:hover .list-group-item.settings a.settings {\n  opacity: 1;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n\nsection.content .files-panel.open .list-group-item i, section.content .files-panel:hover .list-group-item i {\n  -webkit-box-flex: unset;\n          flex: unset;\n}\n\nsection.content .files-panel.open .list-group-item .list-text, section.content .files-panel:hover .list-group-item .list-text {\n  -webkit-box-flex: 1;\n          flex: 1;\n  opacity: 1;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n\nsection.content .editor-panel {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: 0px 5px;\n}\n\nsection.content .editor-panel .card-header {\n  padding: 5px 5px 0px 5px;\n  min-height: 48px;\n}\n\nsection.content .editor-panel .card-header .nav-tabs {\n  overflow: auto hidden;\n  flex-wrap: nowrap;\n}\n\nsection.content .editor-panel .card-header .nav-tabs .nav-item {\n  white-space: nowrap;\n}\n\nsection.content .editor-panel .card-body .editor {\n  height: calc(100% + 2.50rem);\n  margin: -1.25rem;\n}\n\nsection.content .editor-panel .card-body .editor .image {\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\nsection.content .editor-panel .card-body .editor .code {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrbGFicmVjcXVlL0RvY3VtZW50cy9hcHBzL25QYW5lbC9zcmMvYXBwL2hvbWUvcmVzb3VyY2VzL3Jlc291cmNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvcmVzb3VyY2VzL3Jlc291cmNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0NSOztBRENRO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0NaOztBRENZO0VBQ0kseUJBQUE7VUFBQSw4QkFBQTtBQ0NoQjs7QURLZ0I7RUFDSSxVQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtBQ0hwQjs7QURVWTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtBQ1JoQjs7QURVWTtFQUNJLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QUNSaEI7O0FEYVE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGdCQUFBO0FDWFo7O0FEYVk7RUFDSSxnQkFBQTtBQ1hoQjs7QURhZ0I7RUFDSSx5QkFBQTtVQUFBLDhCQUFBO0FDWHBCOztBRGFvQjtFQUNJLFVBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0FDWHhCOztBRGVnQjtFQUNJLHVCQUFBO1VBQUEsV0FBQTtBQ2JwQjs7QURlZ0I7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtBQ2JwQjs7QURtQkk7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxlQUFBO0FDakJSOztBRG1CUTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7QUNqQlo7O0FEa0JZO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQ2hCaEI7O0FEaUJnQjtFQUNJLG1CQUFBO0FDZnBCOztBRHFCWTtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7QUNuQmhCOztBRHFCZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDbkJwQjs7QURzQmdCO0VBQ0ksWUFBQTtBQ3BCcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Jlc291cmNlcy9yZXNvdXJjZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG59XG5cbnNlY3Rpb24uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXg6IDE7XG5cbiAgICAuZmlsZXMtcGFuZWwge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNTByZW0gMXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLnNldHRpbmdze1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhLnRvZ2dsZXtcbiAgICAgICAgICAgICAgICAgICAgaXtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGEuc2V0dGluZ3N7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xuICAgICAgICAgICAgICAgICAgICBpe1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgZmxleDoxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3QtdGV4dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLm9wZW4sICY6aG92ZXJ7XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJi5zZXR0aW5nc3tcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYS5zZXR0aW5nc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IHVuc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGlzdC10ZXh0e1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmVkaXRvci1wYW5lbHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuXG4gICAgICAgIC5jYXJkLWhlYWRlcntcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAubmF2LXRhYnN7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG8gaGlkZGVuO1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgICAgIC5uYXYtaXRlbXtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1ib2R5e1xuICAgICAgICAgICAgLmVkaXRvcntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDIuNTByZW0pO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogLTEuMjVyZW07XG5cbiAgICAgICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29kZSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xufVxuXG5zZWN0aW9uLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4OiAxO1xufVxuc2VjdGlvbi5jb250ZW50IC5maWxlcy1wYW5lbCB7XG4gIHdpZHRoOiA1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuc2VjdGlvbi5jb250ZW50IC5maWxlcy1wYW5lbCAubGlzdC1ncm91cC1pdGVtIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuc2VjdGlvbi5jb250ZW50IC5maWxlcy1wYW5lbCAubGlzdC1ncm91cC1pdGVtLnNldHRpbmdzIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuc2VjdGlvbi5jb250ZW50IC5maWxlcy1wYW5lbCAubGlzdC1ncm91cC1pdGVtLnNldHRpbmdzIGEuc2V0dGluZ3Mge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG59XG5zZWN0aW9uLmNvbnRlbnQgLmZpbGVzLXBhbmVsIC5saXN0LWdyb3VwLWl0ZW0gaSB7XG4gIGZsZXg6IDE7XG59XG5zZWN0aW9uLmNvbnRlbnQgLmZpbGVzLXBhbmVsIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG59XG5zZWN0aW9uLmNvbnRlbnQgLmZpbGVzLXBhbmVsLm9wZW4sIHNlY3Rpb24uY29udGVudCAuZmlsZXMtcGFuZWw6aG92ZXIge1xuICB3aWR0aDogMTV2dztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cbnNlY3Rpb24uY29udGVudCAuZmlsZXMtcGFuZWwub3BlbiAubGlzdC1ncm91cC1pdGVtLCBzZWN0aW9uLmNvbnRlbnQgLmZpbGVzLXBhbmVsOmhvdmVyIC5saXN0LWdyb3VwLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuc2VjdGlvbi5jb250ZW50IC5maWxlcy1wYW5lbC5vcGVuIC5saXN0LWdyb3VwLWl0ZW0uc2V0dGluZ3MsIHNlY3Rpb24uY29udGVudCAuZmlsZXMtcGFuZWw6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS5zZXR0aW5ncyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbnNlY3Rpb24uY29udGVudCAuZmlsZXMtcGFuZWwub3BlbiAubGlzdC1ncm91cC1pdGVtLnNldHRpbmdzIGEuc2V0dGluZ3MsIHNlY3Rpb24uY29udGVudCAuZmlsZXMtcGFuZWw6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS5zZXR0aW5ncyBhLnNldHRpbmdzIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xufVxuc2VjdGlvbi5jb250ZW50IC5maWxlcy1wYW5lbC5vcGVuIC5saXN0LWdyb3VwLWl0ZW0gaSwgc2VjdGlvbi5jb250ZW50IC5maWxlcy1wYW5lbDpob3ZlciAubGlzdC1ncm91cC1pdGVtIGkge1xuICBmbGV4OiB1bnNldDtcbn1cbnNlY3Rpb24uY29udGVudCAuZmlsZXMtcGFuZWwub3BlbiAubGlzdC1ncm91cC1pdGVtIC5saXN0LXRleHQsIHNlY3Rpb24uY29udGVudCAuZmlsZXMtcGFuZWw6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC10ZXh0IHtcbiAgZmxleDogMTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xufVxuc2VjdGlvbi5jb250ZW50IC5lZGl0b3ItcGFuZWwge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDBweCA1cHg7XG59XG5zZWN0aW9uLmNvbnRlbnQgLmVkaXRvci1wYW5lbCAuY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG59XG5zZWN0aW9uLmNvbnRlbnQgLmVkaXRvci1wYW5lbCAuY2FyZC1oZWFkZXIgLm5hdi10YWJzIHtcbiAgb3ZlcmZsb3c6IGF1dG8gaGlkZGVuO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbnNlY3Rpb24uY29udGVudCAuZWRpdG9yLXBhbmVsIC5jYXJkLWhlYWRlciAubmF2LXRhYnMgLm5hdi1pdGVtIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbnNlY3Rpb24uY29udGVudCAuZWRpdG9yLXBhbmVsIC5jYXJkLWJvZHkgLmVkaXRvciB7XG4gIGhlaWdodDogY2FsYygxMDAlICsgMi41MHJlbSk7XG4gIG1hcmdpbjogLTEuMjVyZW07XG59XG5zZWN0aW9uLmNvbnRlbnQgLmVkaXRvci1wYW5lbCAuY2FyZC1ib2R5IC5lZGl0b3IgLmltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5zZWN0aW9uLmNvbnRlbnQgLmVkaXRvci1wYW5lbCAuY2FyZC1ib2R5IC5lZGl0b3IgLmNvZGUge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! brace */ "./node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var brace_mode_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! brace/mode/css */ "./node_modules/brace/mode/css.js");
/* harmony import */ var brace_mode_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(brace_mode_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var brace_mode_handlebars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! brace/mode/handlebars */ "./node_modules/brace/mode/handlebars.js");
/* harmony import */ var brace_mode_handlebars__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(brace_mode_handlebars__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var brace_mode_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! brace/mode/javascript */ "./node_modules/brace/mode/javascript.js");
/* harmony import */ var brace_mode_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(brace_mode_javascript__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var brace_theme_github__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! brace/theme/github */ "./node_modules/brace/theme/github.js");
/* harmony import */ var brace_theme_github__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(brace_theme_github__WEBPACK_IMPORTED_MODULE_8__);









let ResourcesComponent = class ResourcesComponent {
    constructor(dataMngr) {
        this.dataMngr = dataMngr;
        this.files = [];
        this.route = "";
        this.routeArr = [];
        this.activeIndex = null;
        this.code = [];
        this.mode = '';
        this.filesOpen = true;
        this.onRoute(this.route);
    }
    onRoute(path) {
        this.dataMngr.post('resouces-load', { path }).then((data) => {
            this.route = data.route;
            this.files = data.files.sort((a, b) => {
                if (a.directory && b.directory || a.file && b.file) {
                    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
                }
                else {
                    return a.file && b.directory ? 1 : b.directory && a.file ? -1 : 0;
                }
            });
            this.onCalcRouteArr();
        });
    }
    onBackRoute() {
        if (this.route !== "") {
            let routeArr = this.route.split('/');
            routeArr.pop();
            this.onRoute(routeArr.join('/'));
        }
    }
    onCalcRouteArr() {
        let arr = this.route.split('/');
        console.log(arr);
        let routes = [];
        if (arr.length > 0) {
            arr.forEach((route, i) => {
                if (route === '') {
                    routes.push({
                        text: 'resources',
                        path: '',
                        active: false
                    });
                }
                else if (routes[i - 1].path === '') {
                    routes.push({
                        text: route,
                        path: route,
                        active: false
                    });
                }
                else {
                    routes.push({
                        text: route,
                        path: routes[i].path + '/' + route,
                        active: false
                    });
                }
                if (i === arr.length - 1) {
                    routes[i].active = true;
                    this.routeArr = routes;
                }
            });
        }
    }
    onOpen(file) {
        if (file.file) {
            let path = file.path.split('resources').pop();
            console.log('open: ', path);
            const handler = '/_clientfile/resources';
            const codeTypes = {
                css: 'css',
                js: 'javascript'
            };
            const videoTypes = ['mp4', 'webm', 'avi'];
            const imageTypes = ['jpg', 'jpeg', 'png', 'ico'];
            let fileExt = file.name.split('.').pop();
            this.code.forEach((code) => {
                code.active = false;
            });
            if (Object.keys(codeTypes).indexOf(fileExt) >= 0) {
                this.dataMngr.get(handler + path).then((fileData) => {
                    const reader = new FileReader();
                    reader.addEventListener('loadend', (e) => {
                        let codeText = reader.result;
                        let codeHash = ts_md5__WEBPACK_IMPORTED_MODULE_3__["Md5"].hashStr(codeText).toString();
                        let code = {
                            name: file.name,
                            active: true,
                            lastEdit: codeHash,
                            lastSave: codeHash,
                            path: file.path,
                            config: {
                                mode: codeTypes[file.name.split('.').pop()],
                                theme: 'github',
                                readOnly: false
                            },
                            code: codeText
                        };
                        console.log(code);
                        this.code.push(code);
                        this.activeIndex = this.code.length - 1;
                    });
                    reader.readAsText(fileData);
                });
            }
            else if (videoTypes.indexOf(fileExt) >= 0) {
                this.code.push({
                    active: true,
                    name: file.name,
                    type: 'video',
                    fileType: fileExt,
                    path: file.path
                });
                this.activeIndex = this.code.length - 1;
            }
            else if (imageTypes.indexOf(fileExt) >= 0) {
                this.code.push({
                    active: true,
                    name: file.name,
                    type: 'image',
                    fileType: fileExt,
                    path: file.path
                });
                this.activeIndex = this.code.length - 1;
            }
            else {
                this.code.push({
                    active: true,
                    name: file.name
                });
                this.activeIndex = this.code.length - 1;
            }
        }
        else if (file.directory) {
            let path = this.route + '/' + file.name;
            this.onRoute(path);
        }
    }
    onEdited(i) {
        let file = this.code[i];
        file.lastEdit = ts_md5__WEBPACK_IMPORTED_MODULE_3__["Md5"].hashStr(file.code).toString();
        console.log(file.lastEdit, file.lastSave);
    }
    onActive(index) {
        this.code.forEach((code, i) => {
            if (index == i) {
                code.active = true;
            }
            else {
                code.active = false;
            }
        });
        this.activeIndex = index;
    }
    onClose(index) {
        // check if code is saved and alert user to save then close
        if (this.code[index].active && this.code.length > 1) {
            if (index === 0) {
                this.code[1].active = true;
                this.activeIndex = 1;
            }
            else {
                this.code[index - 1].active = true;
                this.activeIndex = index - 1;
            }
        }
        else if (this.code.length == 1) {
            this.activeIndex = null;
        }
        this.code.splice(index, 1);
    }
    onToggleFiles(e = null) {
        if (e)
            e.preventDefault();
        this.filesOpen = !this.filesOpen;
    }
};
ResourcesComponent.ctorParameters = () => [
    { type: src_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"] }
];
ResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resources.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/resources/resources.page.html")).default,
        selector: 'app-resources',
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resources.page.scss */ "./src/app/home/resources/resources.page.scss")).default]
    })
], ResourcesComponent);

;


/***/ })

}]);
//# sourceMappingURL=resources-resources-module-es2015.js.map