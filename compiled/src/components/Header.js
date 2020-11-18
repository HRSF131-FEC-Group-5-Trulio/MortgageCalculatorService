"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/Header.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  .all {\n    font-family: TruliaSans, system, -apple-system, Roboto, \"Segoe UI Bold\", Arial, sans-serif;\n    outline: none;\n    color: #3b4144;\n    display: block;\n    box-sizing: border-box;\n    letter-spacing: -0.1px;\n  }\n\n  .a1 {\n    font-size: 20px;\n    line-height: 1.2;\n    font-weight: bold;\n  }\n  .a2 {\n    font-size: 16px;\n    line-height: 1.5;\n    font-weight: bold;\n  }\n  .a3 {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Styles = _styledComponents["default"].div(_templateObject());

var Header = function Header(props) {
  return /*#__PURE__*/_react["default"].createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "all a1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Affordability"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "all a2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "Calculate your monthly mortgage payments"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "all a3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, "Your est. payment: $", props.price, "/month"));
};

var _default = Header;
exports["default"] = _default;