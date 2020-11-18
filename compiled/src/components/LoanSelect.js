"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/LoanSelect.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  .selectContainer {\n    width: 100%;\n    display: inline-block;\n    -webkit-box-align: center;\n    align-items: center;\n    position: relative;\n    font-weight: bold;\n    border: 1px solid rgb(205, 209, 212);\n    border-radius: 8px;\n    background-color: rgb(255, 255, 255);\n    padding: 8px;\n    outline: none;\n    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;\n  }\n\n  .insideSelect {\n    flex-direction: row;\n    -webkit-box-align: center;\n    align-items: center;\n    display: flex;\n  }\n\n  .label {\n    margin-left: 0px;\n    flex: 1 1 0px;\n    width: 100%;\n    margin: 0px 8px;\n  }\n\n  .select {\n    position: absolute;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    cursor: pointer;\n    appearance: none;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n\n  .option {\n    font-weight: normal;\n    display: block;\n    white-space: pre;\n    min-height: 1.2em;\n    padding: 0px 2px 1px;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoanStyles = _styledComponents["default"].div(_templateObject());

var LoanSelect = /*#__PURE__*/function (_React$Component) {
  _inherits(LoanSelect, _React$Component);

  var _super = _createSuper(LoanSelect);

  function LoanSelect(props) {
    var _this;

    _classCallCheck(this, LoanSelect);

    _this = _super.call(this, props);
    _this.state = {
      loanType: '30-year fixed'
    };
    return _this;
  }

  _createClass(LoanSelect, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "selectContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }
      }, /*#__PURE__*/_react["default"].createElement("select", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, /*#__PURE__*/_react["default"].createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }
      }, "30-year fixed"), /*#__PURE__*/_react["default"].createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }, "20-year fixed"), /*#__PURE__*/_react["default"].createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }, "15-year fixed"), /*#__PURE__*/_react["default"].createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }
      }, "10-year fixed"), /*#__PURE__*/_react["default"].createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }
      }, "FHA 30-year fixed"), /*#__PURE__*/_react["default"].createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }
      }, "FHA 15-year fixed"), /*#__PURE__*/_react["default"].createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }
      }, "VA 30-year fixed"), /*#__PURE__*/_react["default"].createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }
      }, "VA 15-year fixed")), /*#__PURE__*/_react["default"].createElement("span", {
        className: "custom-array",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }
      }));
    }
  }]);

  return LoanSelect;
}(_react["default"].Component);

var _default = LoanSelect;
exports["default"] = _default;