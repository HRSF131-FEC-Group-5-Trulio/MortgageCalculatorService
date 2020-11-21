"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/Header.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 16px;\n    line-height: 1.5;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 16px;\n    line-height: 1.5;\n    font-weight: bold;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: 20px;\n    line-height: 1.2;\n    font-weight: bold;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n    font-family: TruliaSans, system, -apple-system, Roboto, \"Segoe UI Bold\", Arial, sans-serif;\n    outline: none;\n    color: #3b4144;\n    letter-spacing: -0.1px;\n    display: block;\n    box-sizing: border-box;\n\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderStyles = _styledComponents["default"].div(_templateObject());

var H1 = _styledComponents["default"].p(_templateObject2());

var H2 = _styledComponents["default"].div(_templateObject3());

var H3 = _styledComponents["default"].div(_templateObject4());

var Header = function Header(props) {
  var monthly = Math.floor(props.monthly);
  return /*#__PURE__*/_react["default"].createElement(HeaderStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Affordability"), /*#__PURE__*/_react["default"].createElement(H2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Calculate your monthly mortgage payments"), /*#__PURE__*/_react["default"].createElement(H3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }, "Your est. payment: $", monthly, "/month"));
};

var _default = Header;
exports["default"] = _default;