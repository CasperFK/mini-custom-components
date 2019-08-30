/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Mini Custom Components</title>\n</head>\n<body>\n    <app-root></app-root>\n</body>\n</html>";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<h3>{{hello}}</h3>\n<!-- <navbar-component></navbar-component> -->\n<footer-component></footer-component>\n<footer-component></footer-component>\n<footer-component></footer-component>\n<article-component></article-component>\n<!-- <app-root></app-root> -->";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<footer-component></footer-component>\n<navbar-component></navbar-component>\n<footer-component></footer-component>\n<h1>{{hello}}</h1>\n<h1>{{hello}}</h1>\n\n\n\n";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<h2>{{hello}}</h2>\n<!-- <navbar-component></navbar-component> -->\n<!-- <footer-component></footer-component> -->\n<article-component></article-component>";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<h3>{{hello}}</h3>\n";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./dev/index.html
var dev = __webpack_require__(1);

// EXTERNAL MODULE: ./dev/styles.css
var styles = __webpack_require__(2);

// CONCATENATED MODULE: ./dev/component.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ComponentGenerator =
/*#__PURE__*/
function () {
  function ComponentGenerator() {
    _classCallCheck(this, ComponentGenerator);
  }

  _createClass(ComponentGenerator, null, [{
    key: "generate",
    value: function generate(_ref) {
      var selector = _ref.selector,
          template = _ref.template,
          id = _ref.id;

      var ComponentTemplate =
      /*#__PURE__*/
      function (_HTMLElement) {
        _inherits(ComponentTemplate, _HTMLElement);

        function ComponentTemplate() {
          _classCallCheck(this, ComponentTemplate);

          return _possibleConstructorReturn(this, _getPrototypeOf(ComponentTemplate).call(this));
        }

        _createClass(ComponentTemplate, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            this.innerHTML = "".concat(template);
          }
        }]);

        return ComponentTemplate;
      }(_wrapNativeSuper(HTMLElement));

      customElements.define(selector, ComponentTemplate);
    }
  }]);

  return ComponentGenerator;
}();
// CONCATENATED MODULE: ./dev/app/decorators/components.decoratos.js

function getComponent(_ref) {
  var cImport = _ref.cImport,
      cExport = _ref.cExport;
  return function get(target) {
    cImport.map(function (el) {
      if (typeof el === "function") {
        var component = new el();
        window.addEventListener('loadedmetadata', function () {
          return component.active();
        });
      } else {
        var _component = new el.component();

        window.addEventListener('loadedmetadata', function () {
          return _component.active();
        });
        var components = el.children;
        components.map(function (com) {
          var child = new com();
          window.addEventListener('loadedmetadata', function () {
            return child.active();
          });
        });
      }
    });
  };
}
function Component(_ref2) {
  var selector = _ref2.selector,
      template = _ref2.template,
      style = _ref2.style,
      id = _ref2.id;
  return function decorator(target) {
    target.prototype.selector = selector;
    target.prototype.template = template;
    target.prototype.thisTarget = target;
    target.prototype.documentComponents = document.querySelectorAll(selector);

    var doc1 = function doc1(event, callback) {
      target.prototype.documentComponents.forEach(function (el) {
        el.addEventListener(event, callback);
      });
    };

    target.prototype.documentComponentListener = function (event, callback) {
      return doc1(event, callback);
    };

    var bb = function bb() {
      return document.querySelectorAll(selector);
    };

    target.prototype.DOMComponents = bb();

    var aa = function aa() {
      var el = document.querySelectorAll(selector);

      if (el.length === 1) {
        return el;
      } else if (el.length >= 1) {
        target.prototype.DOMComponents = el;
      }
    };

    target.prototype.DOMComponent = aa();
    ComponentGenerator.generate({
      selector: target.prototype.selector,
      template: template,
      id: id
    });
  };
}
function printDataInHTML() {
  return function render(target, key) {
    var val;
    return {
      set: function set(value) {
        window.addEventListener('load', function () {
          var text = document.querySelector(target.selector).innerHTML;
          var flag1 = false;
          var flag2 = true;

          var runReplace = function runReplace() {
            flag1 = false;

            for (var i = 0; i < text.length; i++) {
              if (flag1 == false && text[i] == '{' && text[i + 1] == '{') {
                for (var e = i + 1; e < text.length; e++) {
                  if (text[e] == '}' && text[e + 1] == '}') {
                    var textOld = text.slice(i + 2, e);

                    if (textOld == key) {
                      val = text.toString(text).replace('{{' + key + '}}', value);
                      text = val;
                      flag1 = true;

                      for (var ii = 0; ii < text.length; ii++) {
                        if (text[ii] == '{' && text[ii + 1] == '{') {
                          flag2 = true;
                          run();
                        } else {
                          flag2 = false;
                        }
                      }
                    }
                  }
                }
              }
            }
          };

          var run = function run() {
            if (flag2) {
              runReplace();
            }
          };

          run();
          var doc2 = document.querySelectorAll(target.selector);
          doc2.forEach(function (el) {
            el.innerHTML = val;
          });
        });
      },
      get: function get(value) {},
      enumerable: true,
      configurable: true
    };
  };
}
// CONCATENATED MODULE: ./dev/app/components/navbar/navbar.component.js
var _dec, _dec2, _class, _class2, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function navbar_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function navbar_component_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function navbar_component_createClass(Constructor, protoProps, staticProps) { if (protoProps) navbar_component_defineProperties(Constructor.prototype, protoProps); if (staticProps) navbar_component_defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


var NavbarComponent = (_dec = Component({
  selector: 'navbar-component',
  template: __webpack_require__(3),
  style: __webpack_require__(4),
  id: 'navbarComponent'
}), _dec2 = printDataInHTML(), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function () {
  function NavbarComponent() {
    navbar_component_classCallCheck(this, NavbarComponent);

    _initializerDefineProperty(this, "hello", _descriptor, this);

    this.read();
  }

  navbar_component_createClass(NavbarComponent, [{
    key: "active",
    value: function active() {}
  }, {
    key: "read",
    value: function read() {
      this.hello = "Navbar is Ok";
    }
  }]);

  return NavbarComponent;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hello", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
// CONCATENATED MODULE: ./dev/app/app.component.js
var app_component_dec, app_component_dec2, app_component_class, app_component_class2, app_component_descriptor, app_component_temp;

function app_component_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function app_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_component_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_component_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_component_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_component_defineProperties(Constructor, staticProps); return Constructor; }

function app_component_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function app_component_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


var AppComponent = (app_component_dec = Component({
  selector: 'app-root',
  template: __webpack_require__(5),
  style: __webpack_require__(6),
  id: 'appRoot'
}), app_component_dec2 = printDataInHTML(), app_component_dec(app_component_class = (app_component_class2 = (app_component_temp =
/*#__PURE__*/
function () {
  function AppComponent() {
    app_component_classCallCheck(this, AppComponent);

    app_component_initializerDefineProperty(this, "hello", app_component_descriptor, this);

    this.read();
  }

  app_component_createClass(AppComponent, [{
    key: "active",
    value: function active() {}
  }, {
    key: "read",
    value: function read() {
      this.hello = 'Ok, Work';
    }
  }]);

  return AppComponent;
}(), app_component_temp), (app_component_descriptor = app_component_applyDecoratedDescriptor(app_component_class2.prototype, "hello", [app_component_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), app_component_class2)) || app_component_class);
// CONCATENATED MODULE: ./dev/app/components/footer/footer.component.js
var footer_component_dec, footer_component_dec2, footer_component_class, footer_component_class2, footer_component_descriptor, footer_component_temp;

function footer_component_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function footer_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function footer_component_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function footer_component_createClass(Constructor, protoProps, staticProps) { if (protoProps) footer_component_defineProperties(Constructor.prototype, protoProps); if (staticProps) footer_component_defineProperties(Constructor, staticProps); return Constructor; }

function footer_component_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function footer_component_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


var FooterComponent = (footer_component_dec = Component({
  selector: 'footer-component',
  template: __webpack_require__(7),
  style: __webpack_require__(8)
}), footer_component_dec2 = printDataInHTML(), footer_component_dec(footer_component_class = (footer_component_class2 = (footer_component_temp =
/*#__PURE__*/
function () {
  function FooterComponent() {
    footer_component_classCallCheck(this, FooterComponent);

    footer_component_initializerDefineProperty(this, "hello", footer_component_descriptor, this);

    this.read();
  }

  footer_component_createClass(FooterComponent, [{
    key: "active",
    value: function active() {}
  }, {
    key: "read",
    value: function read() {
      this.hello = "Footer is works";
    }
  }]);

  return FooterComponent;
}(), footer_component_temp), (footer_component_descriptor = footer_component_applyDecoratedDescriptor(footer_component_class2.prototype, "hello", [footer_component_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), footer_component_class2)) || footer_component_class);
// CONCATENATED MODULE: ./dev/app/components/article/article.component.js
var article_component_dec, article_component_dec2, article_component_class, article_component_class2, article_component_descriptor, article_component_temp;

function article_component_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function article_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function article_component_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function article_component_createClass(Constructor, protoProps, staticProps) { if (protoProps) article_component_defineProperties(Constructor.prototype, protoProps); if (staticProps) article_component_defineProperties(Constructor, staticProps); return Constructor; }

function article_component_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function article_component_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


var ArticleComponent = (article_component_dec = Component({
  selector: 'article-component',
  template: __webpack_require__(9),
  style: __webpack_require__(10),
  id: 'articleComponent'
}), article_component_dec2 = printDataInHTML(), article_component_dec(article_component_class = (article_component_class2 = (article_component_temp =
/*#__PURE__*/
function () {
  function ArticleComponent() {
    article_component_classCallCheck(this, ArticleComponent);

    article_component_initializerDefineProperty(this, "hello", article_component_descriptor, this);

    this.read();
  }

  article_component_createClass(ArticleComponent, [{
    key: "active",
    value: function active() {}
  }, {
    key: "read",
    value: function read() {
      this.hello = "Article is Ok";
    }
  }]);

  return ArticleComponent;
}(), article_component_temp), (article_component_descriptor = article_component_applyDecoratedDescriptor(article_component_class2.prototype, "hello", [article_component_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), article_component_class2)) || article_component_class);
// CONCATENATED MODULE: ./dev/list.components.js
var list_components_dec, list_components_class;

function list_components_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var ListComponents = (list_components_dec = getComponent({
  cImport: [AppComponent, FooterComponent, NavbarComponent, FooterComponent, ArticleComponent // {
  //     component:  NavbarComponent,
  //     children: [
  //         FooterComponent
  //     ]
  // },
  // {
  //    component: FooterComponent,
  //    children: [
  //        NavbarComponent
  //    ]
  // }
  ]
}), list_components_dec(list_components_class = function ListComponents() {
  list_components_classCallCheck(this, ListComponents);
}) || list_components_class);
// CONCATENATED MODULE: ./dev/main.js




/***/ })
/******/ ]);