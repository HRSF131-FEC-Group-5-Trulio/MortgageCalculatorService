"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Slider = _interopRequireDefault(require("./Slider.jsx"));

var _reactCurrencyInputField = _interopRequireDefault(require("react-currency-input-field"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/HomePrice.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: #f5f6f7;\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 1.5;\n    flex: 1 1 0%;\n    width: 100%;\n    display: flex;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    align-items: center;\n    margin-bottom: 16px;\n    min-height: 48px;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      width: 112px;\n      border-radius: 8px;\n      border: 1px solid rgb(205, 209, 212);\n      padding: 8px;\n      font-size: 16px;\n      line-height: 1.5;\n      display: inline-block;\n      outline: none;\n      transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;\n      font-family: TruliaSans, system, -apple-system, Roboto, \"Segoe UI Bold\", Arial, sans-serif;\n      margin-left: auto;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputStyle = (0, _styledComponents["default"])(_reactCurrencyInputField["default"])(_templateObject());

var HomeStyles = _styledComponents["default"].div(_templateObject2());

var HomePrice = function HomePrice(props) {
  return /*#__PURE__*/_react["default"].createElement(HomeStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Home Price", /*#__PURE__*/_react["default"].createElement(InputStyle, {
    type: "text",
    prefix: "$",
    value: props.price,
    onChange: props.priceChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }));
};

var _default = HomePrice; // var myObj = {
//   style: "currency",
//   currency: "USD"
// }
// let n = this.state.value;
// let view = n.toLocaleString("en-US", myObj);

exports["default"] = _default;