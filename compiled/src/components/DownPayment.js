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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: #f5f6f7;\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 1.5;\n    flex: 1 1 0%;\n    width: 100%;\n    display: flex;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    align-items: center;\n    margin-bottom: 16px;\n    min-height: 48px;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid rgb(205, 209, 212);\n    padding: 8px;\n    font-size: 16px;\n    line-height: 1.5;\n    width: 56px;\n    display: inline-block;\n    outline: none;\n    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;\n    border-radius: 0px 8px 8px 0px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100px;\n    border-width: 1px 0px 1px 1px;\n    border-top-style: solid;\n    border-bottom-style: solid;\n    border-left-style: solid;\n    border-top-color: rgb(205, 209, 212);\n    border-bottom-color: rgb(205, 209, 212);\n    border-left-color: rgb(205, 209, 212);\n    border-image: initial;\n    padding: 8px;\n    font-size: 16px;\n    line-height: 1.5;\n    display: inline-block;\n    outline: none;\n    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;\n    border-radius: 8px 0px 0px 8px;\n    border-right-style: initial;\n    border-right-color: initial;\n    margin-left: auto;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputStyle = _styledComponents["default"].input(_templateObject());

var InputStyle2 = _styledComponents["default"].input(_templateObject2());

var HomeStyles = _styledComponents["default"].div(_templateObject3());

var DownPayment = function DownPayment(props) {
  return /*#__PURE__*/_react["default"].createElement(HomeStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "Down Payment", /*#__PURE__*/_react["default"].createElement(InputStyle, {
    type: "text",
    value: Math.floor(props.down),
    onChange: props.downChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react["default"].createElement(InputStyle2, {
    type: "text",
    value: props.downPercent,
    onChange: props.downPercentChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }));
};

var _default = DownPayment;
exports["default"] = _default;