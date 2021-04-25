(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/r2b":
    /*!************************************************************!*\
      !*** ./src/app/hello-world-di/hello-world-di.component.ts ***!
      \************************************************************/

    /*! exports provided: HelloWorldDependencyInjectionComponent */

    /***/
    function r2b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloWorldDependencyInjectionComponent", function () {
        return HelloWorldDependencyInjectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../logger.service */
      "dtEc");

      var HelloWorldDependencyInjectionComponent = /*#__PURE__*/function () {
        function HelloWorldDependencyInjectionComponent(logger) {
          _classCallCheck(this, HelloWorldDependencyInjectionComponent);

          this.logger = logger;
          this.count = 0;
        }

        _createClass(HelloWorldDependencyInjectionComponent, [{
          key: "onLogMe",
          value: function onLogMe() {
            this.logger.writeCount(this.count);
            this.count++;
          }
        }]);

        return HelloWorldDependencyInjectionComponent;
      }();

      HelloWorldDependencyInjectionComponent.ɵfac = function HelloWorldDependencyInjectionComponent_Factory(t) {
        return new (t || HelloWorldDependencyInjectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_logger_service__WEBPACK_IMPORTED_MODULE_1__["Logger"]));
      };

      HelloWorldDependencyInjectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelloWorldDependencyInjectionComponent,
        selectors: [["hello-world-di"]],
        decls: 6,
        vars: 0,
        consts: [[3, "click"]],
        template: function HelloWorldDependencyInjectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello World: Dependency Injection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelloWorldDependencyInjectionComponent_Template_button_click_2_listener() {
              return ctx.onLogMe();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Be sure to open the console to view the output!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/potential-octo-tribble/potential-octo-tribble/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "68dY":
    /*!******************************************************!*\
      !*** ./src/app/hello-world/hello-world.component.ts ***!
      \******************************************************/

    /*! exports provided: HelloWorldComponent */

    /***/
    function dY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloWorldComponent", function () {
        return HelloWorldComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HelloWorldComponent = function HelloWorldComponent() {
        _classCallCheck(this, HelloWorldComponent);
      };

      HelloWorldComponent.ɵfac = function HelloWorldComponent_Factory(t) {
        return new (t || HelloWorldComponent)();
      };

      HelloWorldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelloWorldComponent,
        selectors: [["hello-world"]],
        decls: 4,
        vars: 0,
        template: function HelloWorldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello World");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is my first component!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "Cvf2":
    /*!**********************************************************************************!*\
      !*** ./src/app/hello-world-interpolation/hello-world-interpolation.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: HelloWorldInterpolationComponent */

    /***/
    function Cvf2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloWorldInterpolationComponent", function () {
        return HelloWorldInterpolationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HelloWorldInterpolationComponent = function HelloWorldInterpolationComponent() {
        _classCallCheck(this, HelloWorldInterpolationComponent);

        this.message = 'Hello, World!';
      };

      HelloWorldInterpolationComponent.ɵfac = function HelloWorldInterpolationComponent_Factory(t) {
        return new (t || HelloWorldInterpolationComponent)();
      };

      HelloWorldInterpolationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelloWorldInterpolationComponent,
        selectors: [["hello-world-interpolation"]],
        decls: 2,
        vars: 1,
        template: function HelloWorldInterpolationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./hello-world/hello-world.component */
      "68dY");
      /* harmony import */


      var _hello_world_interpolation_hello_world_interpolation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hello-world-interpolation/hello-world-interpolation.component */
      "Cvf2");
      /* harmony import */


      var _hello_world_bindings_hello_world_bindings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hello-world-bindings/hello-world-bindings.component */
      "sczc");
      /* harmony import */


      var _hello_world_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./hello-world-template.component */
      "ZJBb");
      /* harmony import */


      var _hello_world_ngif_hello_world_ngif_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hello-world-ngif/hello-world-ngif.component */
      "l59R");
      /* harmony import */


      var _hello_world_di_hello_world_di_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hello-world-di/hello-world-di.component */
      "/r2b");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 8,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Understanding Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hello-world");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hello-world-interpolation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hello-world-bindings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hello-world-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hello-world-ngif");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hello-world-di");
          }
        },
        directives: [_hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_1__["HelloWorldComponent"], _hello_world_interpolation_hello_world_interpolation_component__WEBPACK_IMPORTED_MODULE_2__["HelloWorldInterpolationComponent"], _hello_world_bindings_hello_world_bindings_component__WEBPACK_IMPORTED_MODULE_3__["HelloWorldBindingsComponent"], _hello_world_template_component__WEBPACK_IMPORTED_MODULE_4__["HelloWorldTemplateComponent"], _hello_world_ngif_hello_world_ngif_component__WEBPACK_IMPORTED_MODULE_5__["HelloWorldNgIfComponent"], _hello_world_di_hello_world_di_component__WEBPACK_IMPORTED_MODULE_6__["HelloWorldDependencyInjectionComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hello-world/hello-world.component */
      "68dY");
      /* harmony import */


      var _hello_world_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hello-world-template.component */
      "ZJBb");
      /* harmony import */


      var _hello_world_ngif_hello_world_ngif_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./hello-world-ngif/hello-world-ngif.component */
      "l59R");
      /* harmony import */


      var _hello_world_di_hello_world_di_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hello-world-di/hello-world-di.component */
      "/r2b");
      /* harmony import */


      var _hello_world_interpolation_hello_world_interpolation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hello-world-interpolation/hello-world-interpolation.component */
      "Cvf2");
      /* harmony import */


      var _hello_world_bindings_hello_world_bindings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./hello-world-bindings/hello-world-bindings.component */
      "sczc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_2__["HelloWorldComponent"], _hello_world_template_component__WEBPACK_IMPORTED_MODULE_3__["HelloWorldTemplateComponent"], _hello_world_ngif_hello_world_ngif_component__WEBPACK_IMPORTED_MODULE_4__["HelloWorldNgIfComponent"], _hello_world_di_hello_world_di_component__WEBPACK_IMPORTED_MODULE_5__["HelloWorldDependencyInjectionComponent"], _hello_world_interpolation_hello_world_interpolation_component__WEBPACK_IMPORTED_MODULE_6__["HelloWorldInterpolationComponent"], _hello_world_bindings_hello_world_bindings_component__WEBPACK_IMPORTED_MODULE_7__["HelloWorldBindingsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZJBb":
    /*!***************************************************!*\
      !*** ./src/app/hello-world-template.component.ts ***!
      \***************************************************/

    /*! exports provided: HelloWorldTemplateComponent */

    /***/
    function ZJBb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloWorldTemplateComponent", function () {
        return HelloWorldTemplateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HelloWorldTemplateComponent = /*#__PURE__*/function () {
        function HelloWorldTemplateComponent() {
          _classCallCheck(this, HelloWorldTemplateComponent);

          this.message = 'I am read only!';
          this.canEdit = false;
        }

        _createClass(HelloWorldTemplateComponent, [{
          key: "onEditClick",
          value: function onEditClick() {
            this.canEdit = !this.canEdit;

            if (this.canEdit) {
              this.message = 'You can edit me!';
            } else {
              this.message = 'I am read only!';
            }
          }
        }]);

        return HelloWorldTemplateComponent;
      }();

      HelloWorldTemplateComponent.ɵfac = function HelloWorldTemplateComponent_Factory(t) {
        return new (t || HelloWorldTemplateComponent)();
      };

      HelloWorldTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelloWorldTemplateComponent,
        selectors: [["hello-world-template"]],
        decls: 6,
        vars: 2,
        consts: [[3, "click"], [3, "contentEditable"]],
        template: function HelloWorldTemplateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello World Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelloWorldTemplateComponent_Template_button_click_2_listener() {
              return ctx.onEditClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Make text editable!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentEditable", ctx.canEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "dtEc":
    /*!***********************************!*\
      !*** ./src/app/logger.service.ts ***!
      \***********************************/

    /*! exports provided: Logger */

    /***/
    function dtEc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Logger", function () {
        return Logger;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Logger = /*#__PURE__*/function () {
        function Logger() {
          _classCallCheck(this, Logger);
        }

        _createClass(Logger, [{
          key: "writeCount",
          value: function writeCount(count) {
            console.warn(count);
          }
        }]);

        return Logger;
      }();

      Logger.ɵfac = function Logger_Factory(t) {
        return new (t || Logger)();
      };

      Logger.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Logger,
        factory: Logger.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "l59R":
    /*!****************************************************************!*\
      !*** ./src/app/hello-world-ngif/hello-world-ngif.component.ts ***!
      \****************************************************************/

    /*! exports provided: HelloWorldNgIfComponent */

    /***/
    function l59R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloWorldNgIfComponent", function () {
        return HelloWorldNgIfComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HelloWorldNgIfComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You can edit the following paragraph.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HelloWorldNgIfComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The following paragraph is read only. Try clicking the button!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HelloWorldNgIfComponent = /*#__PURE__*/function () {
        function HelloWorldNgIfComponent() {
          _classCallCheck(this, HelloWorldNgIfComponent);

          this.message = 'I\'m read only!';
          this.canEdit = false;
        }

        _createClass(HelloWorldNgIfComponent, [{
          key: "onEditClick",
          value: function onEditClick() {
            this.canEdit = !this.canEdit;

            if (this.canEdit) {
              this.message = 'You can edit me!';
            } else {
              this.message = 'I\'m read only!';
            }
          }
        }]);

        return HelloWorldNgIfComponent;
      }();

      HelloWorldNgIfComponent.ɵfac = function HelloWorldNgIfComponent_Factory(t) {
        return new (t || HelloWorldNgIfComponent)();
      };

      HelloWorldNgIfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelloWorldNgIfComponent,
        selectors: [["hello-world-ngif"]],
        decls: 9,
        vars: 4,
        consts: [[3, "click"], [4, "ngIf", "ngIfElse"], ["noEdit", ""], [3, "contentEditable"]],
        template: function HelloWorldNgIfComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello World: ngIf!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelloWorldNgIfComponent_Template_button_click_2_listener() {
              return ctx.onEditClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Make text editable!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HelloWorldNgIfComponent_div_4_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HelloWorldNgIfComponent_ng_template_5_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canEdit)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentEditable", ctx.canEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "sczc":
    /*!************************************************************************!*\
      !*** ./src/app/hello-world-bindings/hello-world-bindings.component.ts ***!
      \************************************************************************/

    /*! exports provided: HelloWorldBindingsComponent */

    /***/
    function sczc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloWorldBindingsComponent", function () {
        return HelloWorldBindingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HelloWorldBindingsComponent = /*#__PURE__*/function () {
        function HelloWorldBindingsComponent() {
          _classCallCheck(this, HelloWorldBindingsComponent);

          this.fontColor = 'blue';
          this.sayHelloId = 1;
          this.canClick = false;
          this.message = 'Hello, World';
        }

        _createClass(HelloWorldBindingsComponent, [{
          key: "sayMessage",
          value: function sayMessage() {
            alert(this.message);
          }
        }]);

        return HelloWorldBindingsComponent;
      }();

      HelloWorldBindingsComponent.ɵfac = function HelloWorldBindingsComponent_Factory(t) {
        return new (t || HelloWorldBindingsComponent)();
      };

      HelloWorldBindingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelloWorldBindingsComponent,
        selectors: [["hello-world-bindings"]],
        decls: 4,
        vars: 4,
        consts: [[3, "disabled", "click"], [3, "id"]],
        template: function HelloWorldBindingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelloWorldBindingsComponent_Template_button_click_0_listener() {
              return ctx.sayMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trigger alert message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You can set my color in the component!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.canClick);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.fontColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.sayHelloId);
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map