"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Slider = _interopRequireDefault(require("./components/Slider.jsx"));

var _App = _interopRequireDefault(require("./components/App.jsx"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/index.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// to get the :id from the url _Thomas
var id = Number(window.location.pathname.slice(1, -1));

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_App["default"], {
  id: id,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 17
  }
}), document.getElementById('service4')); // make id a prop to <App />