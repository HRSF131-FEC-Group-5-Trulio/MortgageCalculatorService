"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Slider = _interopRequireDefault(require("./Slider.jsx"));

var _Practice = _interopRequireDefault(require("./Practice.jsx"));

var _Header = _interopRequireDefault(require("./Header.jsx"));

var _Form = _interopRequireDefault(require("./Form.jsx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _axios = _interopRequireDefault(require("axios"));

var _HomePrice = _interopRequireDefault(require("./HomePrice.jsx"));

var _PracticeGrid = _interopRequireDefault(require("./PracticeGrid.jsx"));

var _Breakdown = _interopRequireDefault(require("./Breakdown.jsx"));

var _jsxFileName = "/Users/harryclemente/dev/hackreactor/hrsf131/group5/MortgageCalculatorService/client/src/components/App.jsx";

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: white;\n    width: 1055px;\n    margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props); // this.id = props.id; // _Thomas

    _this.state = {
      settings: [],
      isLoading: true,
      price: 900000,
      rate: 2.83,
      down: 300000,
      downPercent: 20,
      loanType: '30-year fixed',
      monthly: [{
        monthly_payment: 1
      }]
    };
    _this.priceChange = _this.priceChange.bind(_assertThisInitialized(_this));
    _this.interestChange = _this.interestChange.bind(_assertThisInitialized(_this));
    _this.downChange = _this.downChange.bind(_assertThisInitialized(_this));
    _this.downPercentChange = _this.downPercentChange.bind(_assertThisInitialized(_this));
    _this.loanChange = _this.loanChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      (0, _axios["default"])({
        method: 'get',
        url: 'http://18.191.145.212:3004/api/MortgageCalculator/settings',
        responseType: 'json'
      }).then(function (response) {
        var dataObj = response.data;
        console.log(dataObj);
        var newState = Object.assign({}, newState);
        newState.settings = dataObj;
        newState.isLoading = false;

        _this2.setState(newState);
      }).then(function () {
        // let listing_id = Math.floor(Math.random() * 100) + 1;
        // console.log(this.props.id);
        (0, _axios["default"])({
          method: 'get',
          url: "http://18.191.145.212:3004/api/MortgageCalculator/".concat(_this2.props.id),
          // refactor to /api/MortgageCalculator/:id/<whatever>
          responseType: 'json'
        }).then(function (response) {
          var price = {
            target: {}
          };
          price.target.value = response.data[0].price;

          _this2.priceChange(price);
        });
      }).then(function () {
        var newState = Object.assign({}, _this2.state);

        var month = _this2.calculateMonthly(newState);

        newState.monthly = month;

        _this2.setState(newState);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "priceChange",
    value: function priceChange(event) {
      var newPrice = event.target.value;
      var newDown = this.state.downPercent / 100 * newPrice;
      var newState = Object.assign({}, this.state);
      newState.down = newDown;
      newState.price = newPrice;
      var month = this.calculateMonthly(newState);
      newState.monthly = month;
      this.setState(newState);
    }
  }, {
    key: "interestChange",
    value: function interestChange(event) {
      var newRate = event.target.value;
      newRate = newRate.split('%')[0];
      newRate = Number(newRate);
      var newState = Object.assign({}, this.state);
      newState.rate = newRate;
      var month = this.calculateMonthly(newState);
      newState.monthly = month;
      this.setState(newState);
    }
  }, {
    key: "downChange",
    value: function downChange(event) {
      var newDown = event.target.value;
      var newDownPercent = newDown / this.state.price * 100;
      var newState = Object.assign({}, this.state);
      newState.down = newDown;
      newState.downPercent = newDownPercent;
      var month = this.calculateMonthly(newState);
      newState.monthly = month;
      this.setState(newState);
    }
  }, {
    key: "downPercentChange",
    value: function downPercentChange(event) {
      var newDownPercent = event.target.value;
      newDownPercent = newDownPercent.split('%')[0];
      newDownPercent = Number(newDownPercent);
      var newDown = newDownPercent / 100 * this.state.price;
      var newState = Object.assign({}, this.state);
      newState.down = newDown;
      newState.downPercent = newDownPercent;
      var month = this.calculateMonthly(newState);
      newState.monthly = month;
      console;
      this.setState(newState);
    }
  }, {
    key: "loanChange",
    value: function loanChange(event) {
      var newLoan = event;
      var newInterest = 2.83;

      for (var i = 0; i < this.state.settings.rates.length; i++) {
        if (newLoan === this.state.settings.rates[i].loan_type) {
          newInterest = this.state.settings.rates[i].interest_rate;
        }
      }

      var newState = Object.assign({}, this.state);
      newState.rate = newInterest;
      newState.loanType = newLoan;
      var month = this.calculateMonthly(newState);
      newState.monthly = month;
      this.setState(newState);
    }
  }, {
    key: "calculateMonthly",
    value: function calculateMonthly(stateInput) {
      var principle = stateInput.price;
      var mortgageIns = stateInput.settings.mortgageInsurance;
      var propertyTax = stateInput.settings.propertyTax[0].property_tax * principle;
      var rates = stateInput.settings.rates;
      var interestMonthly = stateInput.rate / 100 / 12;
      var months = 360;

      for (var i = 0; i < rates.length; i++) {
        if (stateInput.loanType === rates[i].loan_type) {
          months = rates[i].months;
        }
      }

      var principleAndInterest = (principle - stateInput.down) * (interestMonthly / (1 - Math.pow(1 + interestMonthly, -months)));
      var mortgageInsMonthly = 0;
      var homeIns = stateInput.settings["default"][0].home_insurance;

      if (stateInput.loanType !== "VA-30-year fixed" && stateInput.loanType !== "VA-15-year fixed") {
        for (var _i = 0; _i < mortgageIns.length; _i++) {
          if (stateInput.downPercent == mortgageIns[_i].down_payment_percentage) {
            mortgageInsMonthly = mortgageIns[_i].mortgage_insurance * principle;
          }
        }
      }

      var monthlyPayment = principleAndInterest + propertyTax + homeIns + mortgageInsMonthly;
      return [{
        monthly_payment: monthlyPayment,
        principle_interest: principleAndInterest,
        property_tax: propertyTax,
        home_ins: homeIns,
        mortgage_insurance: mortgageInsMonthly
      }];
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoading) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "App",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 14
          }
        }, "Loading...");
      }

      return /*#__PURE__*/_react["default"].createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 7
        }
      }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
        monthly: this.state.monthly[0].monthly_payment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 9
        }
      }), /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        state: this.state,
        loanChange: this.loanChange,
        price: this.state.price,
        down: this.state.down,
        rate: this.state.rate,
        downPercent: this.state.downPercent,
        settings: this.state.settings,
        loanType: this.state.loanType,
        priceChange: this.priceChange,
        interestChange: this.interestChange,
        downChange: this.downChange,
        downPercentChange: this.downPercentChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 9
        }
      }), /*#__PURE__*/_react["default"].createElement(_Breakdown["default"], {
        monthly: this.state.monthly,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 9
        }
      }));
    }
  }]);

  return App;
}(_react["default"].Component);

var _default = App;
exports["default"] = _default;