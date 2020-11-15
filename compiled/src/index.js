"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./styles/style.scss");

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/index.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const template = React.createElement('ht', null, 'Hello world');
// const template = <h1>Hello World</h1>
var App = function App() {
  return /*#__PURE__*/_react["default"].createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }, "Hello from Daly City!");
};

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 17
  }
}), document.getElementById('app'));