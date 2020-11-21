"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/GetPreQualified.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    margin: 0px;\n    border-radius: 8px;\n    border-width: 1px;\n    border-style: solid;\n    cursor: pointer;\n    display: inline-block;\n    text-align: center;\n    font-weight: bold;\n    transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;\n    white-space: nowrap;\n    font-size: 16px;\n    line-height: 1.5;\n    padding: 8px 16px;\n    width: 100%;\n    color: rgb(255, 255, 255);\n    background-color: rgb(0, 120, 130);\n    border-color: transparent;\n    text-decoration: none;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    border-style: solid;\n    border-color: transparent;\n    border-width: 4px 2px 0px;\n    width: 100%;\n    -webkit-box-flex: 0;\n    flex: 0 0 auto;\n    display: block;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: -4px;\n  flex-wrap: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-right: -2px;\n  margin-left: -2px;\n  display: flex;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: -4px;\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  align-self: flex-start;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OuterBox0 = _styledComponents["default"].div(_templateObject());

var OuterBox1 = _styledComponents["default"].div(_templateObject2());

var OuterBox2 = _styledComponents["default"].div(_templateObject3());

var ButtonBox = _styledComponents["default"].div(_templateObject4());

var Button = _styledComponents["default"].a(_templateObject5());

var GetPreQualified = function GetPreQualified(props) {
  return /*#__PURE__*/_react["default"].createElement(OuterBox0, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(OuterBox1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(OuterBox2, {
    spacing: "tighter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(ButtonBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(Button, {
    href: "https://www.trulia.com/mortgages/pre-qualified/#/first-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Get Pre-Qualified")))));
};

var _default = GetPreQualified;
exports["default"] = _default;