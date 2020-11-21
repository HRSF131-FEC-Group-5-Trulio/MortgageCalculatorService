"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/BreakdownPie.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    font-size: 16px;\n    line-height: 1.5;\n    text-align: center;\n\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    font-size: 38px;\n    font-weight: bold;\n    line-height: 1.05;\n    align-self: center;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n    width: auto;\n    display: inline-block;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    margin: 0px;\n    width: 100%;\n    display: flex;\n    -webkit-box-pack: center;\n    justify-content: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    cx: 18;\n    cy: 18;\n    r: 15.9155;\n    fill: transparent;\n    stroke: rgb(206, 182, 255);\n    stroke-width: 3.8;\n    stroke-dasharray: 7.05244, 92.9476;\n    stroke-dashoffset: 32.0524;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    cx: 18;\n    cy: 18;\n    r: 15.9155;\n    fill: transparent;\n    stroke: rgb(194, 213, 0);\n    stroke-width: 3.8;\n    stroke-dasharray: 1.6953, 98.3047;\n    stroke-dashoffset: 33.7477;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    cx: 18;\n    cy: 18;\n    r: 15.9155;\n    fill: transparent;\n    stroke: rgb(0, 173, 187);\n    stroke-width: 3.8;\n    stroke-dasharray: 12.613, 87.387;\n    stroke-dashoffset: 46.3608;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    cx: 18;\n    cy: 18;\n    r: 15.9155;\n    fill: transparent;\n    stroke: rgb(5, 34, 134);\n    stroke-width: 3.8;\n    stroke-dasharray: 78.6392, 21.3608;\n    stroke-dashoffset: 25;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  cx: 18;\n  cy: 18;\n  r: 12;\n  fill: rgb(255, 255, 255);\n  transform-origin: 0px 0px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 280px;\n  height: 280px;\n  background: white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 280px;\n  position: relative;\n  box-sizing: border-box;\n  margin: auto;\n  flex-shrink: 0;\n  background: orange;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 32px 32px 32px 16px;\n  background: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OuterPieBox = _styledComponents["default"].div(_templateObject());

var InnerPieBox = _styledComponents["default"].div(_templateObject2());

var InnerPieBox2 = _styledComponents["default"].div(_templateObject3());

var ViewBox = _styledComponents["default"].svg(_templateObject4());

var MonthlyTotalCircle = _styledComponents["default"].circle(_templateObject5());

var PrincipalAndInterest = _styledComponents["default"].circle(_templateObject6());

var PropertyTax = _styledComponents["default"].circle(_templateObject7());

var HomeInsurance = _styledComponents["default"].circle(_templateObject8());

var MortgageInsOther = _styledComponents["default"].circle(_templateObject9());

var MonthlyTotalBox = _styledComponents["default"].div(_templateObject10());

var MonthlyTotalInner = _styledComponents["default"].div(_templateObject11());

var MonthlyTotalValue = _styledComponents["default"].div(_templateObject12());

var MonthLabel = _styledComponents["default"].div(_templateObject13());

var BreakdownPie = function BreakdownPie(props) {
  var monthly = Math.floor(props.total);
  return /*#__PURE__*/_react["default"].createElement(OuterPieBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(InnerPieBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(InnerPieBox2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(ViewBox, {
    viewBox: "0 0 36 36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react["default"].createElement(MonthlyTotalCircle, {
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }), /*#__PURE__*/_react["default"].createElement(PrincipalAndInterest, {
    total: props.total,
    princInt: props.princInt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }), /*#__PURE__*/_react["default"].createElement(PropertyTax, {
    total: props.total,
    propertyTax: props.propertyTax,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }), /*#__PURE__*/_react["default"].createElement(HomeInsurance, {
    total: props.total,
    homeIns: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }), /*#__PURE__*/_react["default"].createElement(MortgageInsOther, {
    total: props.total,
    mortIns: props.mortIns,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }))), /*#__PURE__*/_react["default"].createElement(MonthlyTotalBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(MonthlyTotalInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react["default"].createElement(MonthlyTotalValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, "$", monthly), /*#__PURE__*/_react["default"].createElement(MonthLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, "/month")))));
};

var _default = BreakdownPie;
exports["default"] = _default;