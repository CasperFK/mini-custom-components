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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);


var App = {};
App.modules = {};
App.components = {};

var listComponents = __webpack_require__(12);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Mini Custom Components</title>\n</head>\n<body>\n    <app-root></app-root>\n</body>\n</html>";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<article-component></article-component>\n\n<navbar-component [dom]=\"{{hello}}3\"\"></navbar-component>\n<h1>{{hello}}</h1>\n<h1>{{hello}}</h1>\n\n\n\n";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<h3>{{hello}}</h3>\n<button id=\"btn\">Click</button>\n<h4>{{dom}}</h4>\n\n<footer-component [footer]={{human}}></footer-component>\n";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<h3>{{footer}}</h3>\n<h2>{{hello}}</h2>\n<p>{{lepiej}}</p>\n<p>{{domek}}</p>\n<button id=\"btn2\">Zobacz</button>";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<h3>{{hello}}</h3>\n";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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
          template = _ref.template;

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
            this.innerHTML = template;
          }
        }]);

        return ComponentTemplate;
      }(_wrapNativeSuper(HTMLElement));

      customElements.define(selector, ComponentTemplate);
    }
  }]);

  return ComponentGenerator;
}();
// CONCATENATED MODULE: ./dev/app/modules/components.modules.js
function printDataInHTML(value, selector, key, target) {
  var componentName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var text = '';
  var flag1 = false;
  var flag2 = true;

  if (!value) {
    value = '{{ Print Error }}';
  }

  var render = function render() {
    text = document.querySelector(selector).innerHTML;

    var runReplace = function runReplace() {
      flag1 = false;
      flag2 = false;

      for (var i = 0; i < text.length; i++) {
        if (flag1 == false && text[i] == '{' && text[i + 1] == '{') {
          for (var e = i; e < text.length; e++) {
            if (text[e] == '}' && text[e + 1] == '}') {
              var textOld = text.slice(i + 2, e);

              if (key[0] === '$') {
                var com = document.querySelector(value);
                key = key.slice(1, key.length);
                var valCom = com.getAttribute('[' + key + ']');
                value = valCom;
              }

              if (textOld == key) {
                text = text.toString(text).replace('{{' + key + '}}', value);

                for (var ii = e - 1; ii < text.length; ii = ii + 2) {
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
    var doc2 = document.querySelectorAll(selector);
    doc2.forEach(function (el) {
      el.innerHTML = text;
    });
  };

  if (!document.querySelector(selector)) {} else {
    if (componentName) {
      render();
    } else {
      window.addEventListener('load', function () {
        render();
      });
    }
  }
}
// EXTERNAL MODULE: ./dev/main.js
var main = __webpack_require__(0);

// CONCATENATED MODULE: ./dev/app/decorators/components.decoratos.js



function Component(_ref) {
  var selector = _ref.selector,
      template = _ref.template,
      style = _ref.style;
  return function decorator(target) {
    var component = new target();

    for (var el in component) {
      main["App"].components[target.name] = {};
      main["App"].components[target.name].name = target.name;
      main["App"].components[target.name].component = component;
      main["App"].components[target.name].target = target;
      main["App"].components[target.name].selector = selector;
      main["App"].components[target.name].template = template;
      component.active();

      if (el[0] === '$') {
        var key = void 0;
        key = el.slice(1, el.length);

        try {
          var x = document.querySelector(selector).getAttribute('[' + key + ']');

          if (x) {
            printDataInHTML(component[el], selector, el, target);
          } else {
            console.warn(el);
          }
        } catch (er) {
          if (er) {
            console.log('errr :' + er);
          }
        }
      } else {
        printDataInHTML(component[el], selector, el, target);
      }
    }

    ComponentGenerator.generate({
      selector: selector,
      template: template
    });
  };
}
// CONCATENATED MODULE: ./dev/app/app.component.js
var _dec, _class;

function app_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_component_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_component_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_component_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_component_defineProperties(Constructor, staticProps); return Constructor; }


var AppComponent = (_dec = Component({
  selector: 'app-root',
  template: __webpack_require__(4),
  style: __webpack_require__(5)
}), _dec(_class =
/*#__PURE__*/
function () {
  function AppComponent() {
    app_component_classCallCheck(this, AppComponent);

    this.read();
  }

  app_component_createClass(AppComponent, [{
    key: "active",
    value: function active() {}
  }, {
    key: "read",
    value: function read() {
      this.hello = 'Ok, Work 2';
    }
  }]);

  return AppComponent;
}()) || _class);
// CONCATENATED MODULE: ./dev/app/components/navbar/navbar.component.js
var navbar_component_dec, navbar_component_class, _temp;

function navbar_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function navbar_component_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function navbar_component_createClass(Constructor, protoProps, staticProps) { if (protoProps) navbar_component_defineProperties(Constructor.prototype, protoProps); if (staticProps) navbar_component_defineProperties(Constructor, staticProps); return Constructor; }



var navbar_component_NavbarComponent = (navbar_component_dec = Component({
  selector: 'navbar-component',
  template: __webpack_require__(6),
  style: __webpack_require__(7)
}), navbar_component_dec(navbar_component_class = (_temp =
/*#__PURE__*/
function () {
  function NavbarComponent() {
    navbar_component_classCallCheck(this, NavbarComponent);

    this.hello = "Navbar is Ok";
    this.human = ['Człowiek1', 'Człowiek2'];
    this.$dom = 'navbar-component';
    this.read();
  }

  navbar_component_createClass(NavbarComponent, [{
    key: "active",
    value: function active() {
      this.human = main["App"].components.NavbarComponent.name;
    }
  }, {
    key: "read",
    value: function read() {}
  }]);

  return NavbarComponent;
}(), _temp)) || navbar_component_class);
// CONCATENATED MODULE: ./dev/app/components/footer/footer.component.js
var footer_component_dec, footer_component_class, footer_component_temp;

function footer_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function footer_component_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function footer_component_createClass(Constructor, protoProps, staticProps) { if (protoProps) footer_component_defineProperties(Constructor.prototype, protoProps); if (staticProps) footer_component_defineProperties(Constructor, staticProps); return Constructor; }



var footer_component_FooterComponent = (footer_component_dec = Component({
  selector: 'footer-component',
  template: __webpack_require__(8),
  style: __webpack_require__(9)
}), footer_component_dec(footer_component_class = (footer_component_temp =
/*#__PURE__*/
function () {
  function FooterComponent() {
    footer_component_classCallCheck(this, FooterComponent);

    this.$footer = 'footer-component';
    this.$domek = void 0;
    this.$lepiej = void 0;
    this.read();
  }

  footer_component_createClass(FooterComponent, [{
    key: "active",
    value: function active() {
      main["App"].components.FooterComponent = {
        $footer: this.$footer,
        $domek: this.$domek,
        lepiej: this.lepiej
      };
    }
  }, {
    key: "read",
    value: function read() {
      var _this = this;

      this.hello = "Footer is works";
      this.lepiej = "Lepiej"; // this.lepiej !== this.$lepiej

      window.addEventListener('load', function () {
        main["App"].components.FooterComponent.$domek = 'FooterComponent';
        _this.domek = main["App"].components.FooterComponent.$domek;
        _this.$domek = main["App"].components.FooterComponent.$domek;
        document.querySelector('#btn').addEventListener('click', function () {
          console.log('FooterComponent ' + main["App"].components.FooterComponent.$footer);
          console.log(_this.$domek);
        });
      });
    }
  }]);

  return FooterComponent;
}(), footer_component_temp)) || footer_component_class);
// CONCATENATED MODULE: ./dev/app/components/article/article.component.js
var article_component_dec, article_component_class;

function article_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function article_component_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function article_component_createClass(Constructor, protoProps, staticProps) { if (protoProps) article_component_defineProperties(Constructor.prototype, protoProps); if (staticProps) article_component_defineProperties(Constructor, staticProps); return Constructor; }


var ArticleComponent = (article_component_dec = Component({
  selector: 'article-component',
  template: __webpack_require__(10),
  style: __webpack_require__(11)
}), article_component_dec(article_component_class =
/*#__PURE__*/
function () {
  function ArticleComponent() {
    article_component_classCallCheck(this, ArticleComponent);

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
}()) || article_component_class);
// CONCATENATED MODULE: ./dev/list.components.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponents", function() { return ListComponents; });
function list_components_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var ListComponents = function ListComponents() {
  list_components_classCallCheck(this, ListComponents);
};

/***/ })
/******/ ]);