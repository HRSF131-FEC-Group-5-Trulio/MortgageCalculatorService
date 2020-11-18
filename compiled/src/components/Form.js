"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Slider = _interopRequireDefault(require("./Slider.jsx"));

var _HomePrice = _interopRequireDefault(require("./HomePrice.jsx"));

var _DownPayment = _interopRequireDefault(require("./DownPayment.jsx"));

var _InterestRate = _interopRequireDefault(require("./InterestRate.jsx"));

var _LoanType = _interopRequireDefault(require("./LoanType.jsx"));

var _LoanSelect = _interopRequireDefault(require("./LoanSelect.jsx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/Form.jsx";

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
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  box-sizing: border-box;\n  color: color: rgb(59, 65, 68);\n  font-size: 16px;\n  line-height: 1.5;\n  letter-spacing: -0.1px;\n  font-family: TruliaSans, system, -apple-system, Roboto, \"Segoe UI Bold\", Arial, sans-serif;\n\n  .container1 {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    border-radius: 8px;\n    overflow: hidden;\n    background-color: rgb(245, 246, 247);\n    padding: 16px;\n  }\n  .container2 {\n    display: flex;\n    margin-left: -8px;\n    margin-right: -8px;\n    margin-top: -16px;\n    flex-wrap: wrap;\n  }\n  .container3 {\n    width: 33%\n    -webkit-box-flex: 0;\n    flex: 0 0 auto;\n    display: block;\n    border-style: solid;\n    border-color: transparent;\n    border-width: 16px 8px 0px;\n  }\n  .container4 {\n    box-sizing: border-box;\n    flex: 1 1 0%;\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    flex-direction: column;\n    padding-bottom: 2px;\n  }\n  .container5 {\n    flex: 1 1 0%;\n    width: 100%;\n    display: flex;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    align-items: center;\n    margin-bottom: 16px;\n    min-height: 48px;\n  }\n\n  .container6 {\n\n  }\n\n  .inputSlider1 {\n  }\n\n  .inputSlider2 {\n  }\n\n  .inputSlider3 {\n  }\n\n  .inputSelect {\n  }\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerStyles = _styledComponents["default"].div(_templateObject());

var Form = /*#__PURE__*/function (_React$Component) {
  _inherits(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, props);
    _this.state = {
      price: 0,
      down: 0,
      downPercent: 0,
      interest: 0,
      loanType: '30-year fixed'
    };
    return _this;
  }

  _createClass(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {// console.log(this.props);
      // let interest = 0;
      // for (let i = 0; i < props.settings)
      // this.setState({
      //   price: props.price,
      //   down: props.price / props.settings.default[0].down_payment_percentage,
      //   downPercent: props.settings.default[0].down_payment_percentage,
      //   interest:
      // })
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(ContainerStyles, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 7
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 7
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 7
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 9
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }
      }, /*#__PURE__*/_react["default"].createElement(_HomePrice["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }
      }))), /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "container3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }
      }, /*#__PURE__*/_react["default"].createElement(_DownPayment["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 15
        }
      }))), /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "container3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 9
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }
      }, /*#__PURE__*/_react["default"].createElement(_InterestRate["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 15
        }
      }))), /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "container3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 9
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }
      }, /*#__PURE__*/_react["default"].createElement(_LoanType["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 15
        }
      }))), /*#__PURE__*/_react["default"].createElement(_LoanSelect["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }
      })))));
    }
  }]);

  return Form;
}(_react["default"].Component);

var _default = Form;
exports["default"] = _default;
{
  /* <ContainerStyles>
  <div className="surface">
   <div className="crust">
   <div className="beach">
   <div className="hill">
   <div className="hood">
     <div className="spot">
     Home Price
     <input type="number" className="input"/>
     </div>
     <div className="slider">
     <Slider/>
     </div>
   </div>
   <div className="hood">
   <div className="spot">
     Down Payment
     <input type="number" className="input"/>
     </div>
     <div className="slider">
     <Slider/>
     </div>
   </div>
   <div className="hood">
   <div className="spot">
     Interest Rate
     <input type="number" className="input"/>
     </div>
     <div className="slider">
     <Slider/>
     </div>
   </div>
   <div className="loan">
     <div>
     Loan Type
     </div>
     <select className="select">
       <option>30-year fixed</option>
       <option>20-year fixed</option>
       <option>15-year fixed</option>
       <option>10-year fixed</option>
       <option>FHA 30-year fixed</option>
       <option>FHA 15-year fixed</option>
       <option>VA 30-year fixed</option>
       <option>VA 15-year fixed</option>
     </select>
   </div>
   </div>
   </div>
   </div>
  </div>
  </ContainerStyles> */
} // .surface {
//   width: 100%;
//   border-radius: 8px;
//   overflow: hidden;
//   background-color: rgb(245, 246, 247);
//   padding: 16px;
// }
// .crust {
//   display: flex;
//   margin-left: -8px;
//   margin-right: -8px;
//   margin-top: -16px;
//   flex-wrap: wrap;
// }
// .beach {
//   background: #f5f6f7;
//   font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
//   outline: none;
//   color: #3b4144;
//   letter-spacing: -0.1px;
//   border-style: solid;
//   border-color: transparent;
//   border-width: 16px 8px 0px;
//   -webkit-box-flex: 0;
//   flex: 0 0 auto;
//   display: block;
// }
// .hill {
//   box-sizing: border-box;
//   flex: 1 1 0%;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   flex-direction: column;
//   padding-bottom: 2px;
// }
// .valley {
//   flex: 1 1 0%;
//   width: 100%;
//   display: flex;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   -webkit-box-align: center;
//   align-items: center;
//   margin-bottom: 16px;
//   min-height: 48px;
// }
// .hood {
//   box-sizing: border-box;
//   flex: 1 1 0%;
//   flex-grow: 1;
//   flex-shrink: 1;
//   flex-basis: 0%;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   flex-direction: column;
//   padding-bottom: 2px;
// }
// .spot {
//   flex: 1 1 0%;
//   flex-grow: 1;
//   flex-shrink: 1;
//   flex-basis: 0%;
//   width: 100%;
//   display: flex;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   -webkit-box-align: center;
//   align-items: center;
//   margin-bottom: 16px;
//   min-height: 48px;
// }
// .input {
//   border-radius: 8px;
//   border: 1px solid rgb(205, 209, 212);
//   padding: 8px;
//   font-size: 16px;
//   line-height: 1.5;
//   width: 100%;
//   display: inline-block;
//   outline: none;
//   transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
// }
// .slider {
//   width: 100%;
//   height: 40px;
//   -webkit-box-align: center;
//   align-items: center;
// }
// .loan {\
//   float: left;
//   display: block;
//   margin-top: 5px;
// }
// .select {
//   -webkit-writing-mode: horizontal-tb !important;
//   text-rendering: auto;
//   color: -internal-light-dark(black, white);
//   letter-spacing: normal;
//   word-spacing: normal;
//   text-transform: none;
//   text-indent: 0px;
//   text-shadow: none;
//   display: inline-block;
//   text-align: start;
//   appearance: menulist;
//   box-sizing: border-box;
//   align-items: center;
//   white-space: pre;
//   -webkit-rtl-ordering: logical;
//   background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
//   cursor: default;
//   margin: 0em;
//   font: 400 13.3333px Arial;
//   border-radius: 0px;
//   border-width: 1px;
//   border-style: solid;
//   border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
//   border-image: initial;
// }