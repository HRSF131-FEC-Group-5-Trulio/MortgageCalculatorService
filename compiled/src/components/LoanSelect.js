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

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-weight: normal;\n    display: block;\n    white-space: pre;\n    min-height: 1.2em;\n    padding: 0px 2px 1px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    appearance: none;\n    position: absolute;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 1.5;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    font-size: 0px;\n    width: 16px !important;\n    height: 24px !important;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    flex: 1 1 0px;\n    width: 100%;\n    margin: 0px 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row;\n    -webkit-box-align: center;\n    align-items: center;\n    display: flex;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: inline-block;\n    -webkit-box-align: center;\n    align-items: center;\n    position: relative;\n    font-weight: bold;\n    border: ", ";\n    border-radius: 8px;\n    background-color: rgb(255, 255, 255);\n    padding: 8px;\n    outline: none;\n    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.selected === 'loan' ? '3px solid #007882' : '1px solid rgb(205, 209, 212)';
});

var InsideSelect = _styledComponents["default"].div(_templateObject2());

var Label = _styledComponents["default"].div(_templateObject3());

var Arrow = _styledComponents["default"].div(_templateObject4());

var Select = _styledComponents["default"].select(_templateObject5());

var Option = _styledComponents["default"].option(_templateObject6());

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
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoanSelect, [{
    key: "handleSelect",
    value: function handleSelect(event) {
      var newType = event.target.value;
      this.props.loanChange(newType);
      this.setState({
        loanType: newType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement(SelectContainer, {
        selected: this.props.selected,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7
        }
      }, /*#__PURE__*/_react["default"].createElement(InsideSelect, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }
      }, /*#__PURE__*/_react["default"].createElement(Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }
      }, this.state.loanType), /*#__PURE__*/_react["default"].createElement(Arrow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "svg",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z",
        fill: "#869099",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 89
        }
      })))), /*#__PURE__*/_react["default"].createElement(Select, {
        onClick: function onClick() {
          return _this2.props.updateSelected('loan');
        },
        value: this.state.loanType,
        onChange: this.handleSelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }
      }, /*#__PURE__*/_react["default"].createElement(Option, {
        value: "30-year-fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }
      }, "30-year fixed"), /*#__PURE__*/_react["default"].createElement(Option, {
        value: "20-year-fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }
      }, "20-year fixed"), /*#__PURE__*/_react["default"].createElement(Option, {
        value: "15-year-fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }
      }, "15-year fixed"), /*#__PURE__*/_react["default"].createElement(Option, {
        value: "10-year-fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }
      }, "10-year fixed"), /*#__PURE__*/_react["default"].createElement(Option, {
        value: "FHA-30-year-fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }
      }, "FHA 30-year fixed"), /*#__PURE__*/_react["default"].createElement(Option, {
        value: "FHA-15-year-fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }, "FHA 15-year fixed"), /*#__PURE__*/_react["default"].createElement(Option, {
        value: "VA-30-year-fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }
      }, "VA 30-year fixed"), /*#__PURE__*/_react["default"].createElement(Option, {
        value: "VA-15-year-fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }
      }, "VA 15-year fixed")));
    }
  }]);

  return LoanSelect;
}(_react["default"].Component);

var _default = LoanSelect;
exports["default"] = _default;