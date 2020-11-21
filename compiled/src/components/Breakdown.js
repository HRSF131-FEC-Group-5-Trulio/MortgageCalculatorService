"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _BreakdownSub = _interopRequireDefault(require("./BreakdownSub.jsx"));

var _BreakdownPie = _interopRequireDefault(require("./BreakdownPie.jsx"));

var _GetPreQualified = _interopRequireDefault(require("./GetPreQualified.jsx"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/Breakdown.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px 0px 32px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-right: -2px;\n  margin-left: -2px;\n  display: flex;\n  margin-top: -4px;\n  flex-wrap: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    flex: 1 1 0%;\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 16px 0px 16px 16px;\n    min-width: 50%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerMajor = _styledComponents["default"].div(_templateObject());

var OuterBreakdownBox = _styledComponents["default"].div(_templateObject2());

var InnerBreakdownBox = _styledComponents["default"].div(_templateObject3());

var Padding = _styledComponents["default"].div(_templateObject4());

var BreakDown = function BreakDown(props) {
  var total = Math.floor(props.monthly[0].monthly_payment);
  var princInt = Math.floor(props.monthly[0].principle_interest);
  var propertyTax = Math.floor(props.monthly[0].property_tax);
  var homeIns = props.monthly[0].home_ins;
  var mortIns = Math.floor(props.monthly[0].mortgage_insurance);
  return /*#__PURE__*/_react["default"].createElement(ContainerMajor, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(_BreakdownPie["default"], {
    total: total,
    princInt: princInt,
    propertyTax: propertyTax,
    homeIns: homeIns,
    mortIns: mortIns,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement(OuterBreakdownBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(InnerBreakdownBox, {
    spacing: "tighter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(_BreakdownSub["default"], {
    category: "Principle & Interest",
    cost: princInt,
    color: "rgb(5, 34, 134)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react["default"].createElement(_BreakdownSub["default"], {
    category: "Property Taxes",
    cost: propertyTax,
    color: "rgb(0, 173, 187)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react["default"].createElement(_BreakdownSub["default"], {
    category: "Home Insurance",
    cost: homeIns,
    color: "rgb(194, 213, 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react["default"].createElement(_BreakdownSub["default"], {
    category: "Mortgage ins & other",
    cost: mortIns,
    color: "rgb(206, 182, 255)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  })), /*#__PURE__*/_react["default"].createElement(Padding, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), /*#__PURE__*/_react["default"].createElement(_GetPreQualified["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  })));
};

var _default = BreakDown;
exports["default"] = _default;