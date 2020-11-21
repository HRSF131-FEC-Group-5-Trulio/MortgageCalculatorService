"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Slider = _interopRequireDefault(require("./Slider.jsx"));

var _HomePrice = _interopRequireDefault(require("./HomePrice.jsx"));

var _DownPayment = _interopRequireDefault(require("./DownPayment.jsx"));

var _InterestRate = _interopRequireDefault(require("./InterestRate.jsx"));

var _LoanType = _interopRequireDefault(require("./LoanType.jsx"));

var _LoanSelect = _interopRequireDefault(require("./LoanSelect.jsx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/Form.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    flex: 1 1 0%;\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    flex-direction: column;\n    padding-bottom: 2px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    -webkit-box-flex: 0;\n    flex: 340px 0 0;\n    display: block;\n    border-style: solid;\n    border-color: transparent;\n    border-width: 16px 8px 0px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    margin-left: -8px;\n    margin-right: -8px;\n    margin-top: -16px;\n    flex-wrap: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    border-radius: 8px;\n    overflow: hidden;\n    background-color: rgb(245, 246, 247);\n    padding: 16px;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  box-sizing: border-box;\n  color: color: rgb(59, 65, 68);\n  font-size: 16px;\n  line-height: 1.5;\n  letter-spacing: -0.1px;\n  font-family: TruliaSans, system, -apple-system, Roboto, \"Segoe UI Bold\", Arial, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerStyles = _styledComponents["default"].div(_templateObject());

var Container1 = _styledComponents["default"].div(_templateObject2());

var Container2 = _styledComponents["default"].div(_templateObject3());

var Container3 = _styledComponents["default"].div(_templateObject4());

var Container4 = _styledComponents["default"].div(_templateObject5());

var Form = function Form(props) {
  return /*#__PURE__*/_react["default"].createElement(ContainerStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(Container1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(Container2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(Container3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(Container4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(_HomePrice["default"], {
    price: props.price,
    priceChange: props.priceChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  })), /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
    max: 1300000,
    value: props.price,
    change: props.priceChange,
    step: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  })), /*#__PURE__*/_react["default"].createElement(Container3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(Container4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(_DownPayment["default"], {
    price: props.price,
    down: props.down,
    downPercent: props.downPercent,
    downChange: props.downChange,
    downPercentChange: props.downPercentChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  })), /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
    max: 30,
    value: props.downPercent,
    change: props.downPercentChange,
    step: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  })), /*#__PURE__*/_react["default"].createElement(Container3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(Container4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(_InterestRate["default"], {
    rate: props.rate,
    interestChange: props.interestChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  })), /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
    max: 6.5,
    value: props.rate,
    change: props.interestChange,
    step: .01,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  })), /*#__PURE__*/_react["default"].createElement(Container3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(Container4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(_LoanType["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  })), /*#__PURE__*/_react["default"].createElement(_LoanSelect["default"], {
    loanChange: props.loanChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  })))));
};

var _default = Form;
exports["default"] = _default;