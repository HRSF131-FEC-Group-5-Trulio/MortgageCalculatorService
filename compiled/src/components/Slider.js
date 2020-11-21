"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/Slider.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .slider {\n  background: #f5f6f7;\n  height: 34px;\n  -webkit-appearance: none;\n  margin: 10px 0;\n  width: 100%;\n}\n.slider:focus {\n  outline: none;\n}\n.slider::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 4px;\n  cursor: pointer;\n  animate: 0.2s;\n  box-shadow: 1px 1px 1px #FFFFFF;\n  border-radius: 1px;\n  border: 1px solid #FFFFFF;\n  ", "\n}\n.slider::-webkit-slider-thumb {\n\n  border: 3px solid #FFFFFF;\n  height: 19px;\n  width: 19px;\n  border-radius: 15px;\n  background: #007882;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -7px;\n}\n.slider:focus::-webkit-slider-runnable-track {\n  ", "\n}\n.slider::-moz-range-track {\n  width: 100%;\n  height: 6px;\n  cursor: pointer;\n  animate: 0.2s;\n  box-shadow: 1px 1px 1px #f5f6f7;\n  background: #007882;\n  border-radius: 1px;\n  border: 1px solid #f5f6f7;\n}\n.slider::-moz-range-thumb {\n  box-shadow: 3px 3px 3px #fff;\n  border: 2px solid #FFFFFF;\n  height: 23px;\n  width: 23px;\n  border-radius: 23px;\n  background: #007882;\n  cursor: pointer;\n}\n.slider::-ms-track {\n  width: 100%;\n  height: 6px;\n  cursor: pointer;\n  animate: 0.2s;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.slider::-ms-fill-lower {\n  background: #007882;\n  border: 1px solid #f5f6f7;\n  border-radius: 2px;\n  box-shadow: 1px 1px 1px #f5f6f7;\n}\n.slider::-ms-fill-upper {\n  background: #007882;\n  border: 1px solid #f5f6f7;\n  border-radius: 2px;\n  box-shadow: 1px 1px 1px #f5f6f7;\n}\n.slider::-ms-thumb {\n  margin-top: 1px;\n  box-shadow: 3px 3px 3px #f5f6f7;\n  border: 2px solid #f5f6f7;\n  height: 23px;\n  width: 23px;\n  border-radius: 23px;\n  background: #007882;\n  cursor: pointer;\n}\n.slider:focus::-ms-fill-lower {\n  background: #007882;\n}\n.slider:focus::-ms-fill-upper {\n  background: #007882;\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sliderStyles = function sliderStyles(props) {
  return "\n    background: linear-gradient(to right, #007882 0%, #007882 ".concat(props.left, "%, #cdd1d4 ").concat(props.left, "%, #cdd1d4 100%);\n");
};

var Styles = _styledComponents["default"].div(_templateObject(), function (props) {
  return sliderStyles(props);
}, function (props) {
  return sliderStyles(props);
});

var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (event) {
      _this.setState({
        value: event.target.value
      });

      _this.props.change(event);
    });

    _this.state = {
      value: _this.props.value
    };
    _this.handleOnChange = _this.handleOnChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      var TruliaMax = 1300000;
      var sliderMax = this.props.max;

      if (this.state.value > 100) {
        sliderMax = TruliaMax;

        if (this.state.value > TruliaMax) {
          sliderMax += TruliaMax + 5000000;
        }
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 7
        }
      }, /*#__PURE__*/_react["default"].createElement(Styles, {
        left: this.state.value / this.props.max * 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 7
        }
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "range",
        min: 0,
        value: this.state.value,
        max: sliderMax,
        className: "slider",
        onChange: this.handleOnChange,
        step: this.props.step,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }
      })));
    }
  }]);

  return Slider;
}(_react["default"].Component);

var _default = Slider;
exports["default"] = _default;