"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var YearPicker = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(YearPicker, _PureComponent);

  var _super = _createSuper(YearPicker);

  function YearPicker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, YearPicker);
    _this = _super.call(this, props);

    _this.changeValue = function (e) {
      var onChange = _this.props.onChange;

      _this.setState({
        year: e
      });

      onChange(e);
    };

    _this.changeYear = function (e) {
      var onChange = _this.props.onChange;

      _this.setState({
        year: e,
        showYear: false
      });

      onChange(e);
    };

    _this.state = {
      showYear: false,
      year: props.value || null
    };
    return _this;
  }

  (0, _createClass2["default"])(YearPicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          year = _this$state.year,
          showYear = _this$state.showYear;
      var _this$props = this.props,
          width = _this$props.width,
          otherParams = _this$props.otherParams,
          placeholder = _this$props.placeholder;
      return /*#__PURE__*/_react["default"].createElement(_antd.DatePicker, (0, _extends2["default"])({}, otherParams, {
        placeholder: placeholder,
        format: "YYYY",
        mode: "year",
        value: year,
        open: showYear,
        onPanelChange: this.changeYear,
        onFocus: function onFocus() {
          if (!showYear) {
            _this2.setState({
              showYear: true
            });
          }
        },
        style: {
          width: width
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ("value" in nextProps) {
        return {
          year: nextProps.value
        };
      }

      return null;
    }
  }]);
  return YearPicker;
}(_react.PureComponent);

exports["default"] = YearPicker;