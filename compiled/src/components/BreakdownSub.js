"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/BreakdownSub.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 1.5;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    font-size: 16px;\n    line-height: 1.5;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 0px;\n  flex: 1 1 0px;\n  width: 100%;\n  margin: 0px 8px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    width: 16px;\n    height: 16px;\n    border-radius: 8px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    flex-direction: row;\n    -webkit-box-align: center;\n    align-items: center;\n    display: flex;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    flex: 1 1 0px;\n    width: 100%;\n    margin: 0px 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row;\n    -webkit-box-align: center;\n    align-items: center;\n    display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border-style: solid;\n    border-color: transparent;\n    border-width: 4px 2px 0px;\n    width: 100%;\n    -webkit-box-flex: 0;\n    flex: 0 0 auto;\n    display: block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PropIntTableOuter = _styledComponents["default"].div(_templateObject());

var PropIntTableOuter2 = _styledComponents["default"].div(_templateObject2());

var PropIntTableInner = _styledComponents["default"].div(_templateObject3());

var PropIntTableInner2 = _styledComponents["default"].div(_templateObject4());

var PropIntTableInner3 = _styledComponents["default"].div(_templateObject5());

var PropIntColorCode = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.color;
});

var PropIntTextOuter = _styledComponents["default"].div(_templateObject7());

var PropIntTextInner = _styledComponents["default"].div(_templateObject8());

var PropIntDollar = _styledComponents["default"].div(_templateObject9());

var BreakdownSub = function BreakdownSub(props) {
  return /*#__PURE__*/_react["default"].createElement(PropIntTableOuter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(PropIntTableOuter2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(PropIntTableInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(PropIntTableInner2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(PropIntTableInner3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(PropIntColorCode, {
    color: props.color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react["default"].createElement(PropIntTextOuter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react["default"].createElement(PropIntTextInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, props.category))))), /*#__PURE__*/_react["default"].createElement(PropIntDollar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, "$", JSON.stringify(props.cost))));
};

var _default = BreakdownSub;
exports["default"] = _default;