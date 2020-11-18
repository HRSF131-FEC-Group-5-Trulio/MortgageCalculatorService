"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Slider = _interopRequireDefault(require("./Slider.jsx"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/DownPayment.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  .container {\n\n\n  }\n\n  .homeSpace {\n    background-color: #f5f6f7;\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n\n  .fonts {\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n\n  .input {\n    /* float: right; */\n    /* clear: both; */\n    width: 112;px\n    border-radius: 8px;\n    border: 1px solid rgb(205, 209, 212);\n    padding: 8px;\n    font-size: 16px;\n    line-height: 1.5;\n    display: inline-block;\n    outline: none;\n    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;\n    font-family: TruliaSans, system, -apple-system, Roboto, \"Segoe UI Bold\", Arial, sans-serif;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeStyles = _styledComponents["default"].div(_templateObject());

var DownPayment = function DownPayment(props) {
  return /*#__PURE__*/_react["default"].createElement(HomeStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "homeSpace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Down Payment"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }))));
};

var _default = DownPayment;
exports["default"] = _default;