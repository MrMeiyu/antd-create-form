"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _moment = _interopRequireDefault(require("moment"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TimeRangePicker = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(TimeRangePicker, _React$Component);

  var _super = _createSuper(TimeRangePicker);

  function TimeRangePicker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TimeRangePicker);
    _this = _super.call(this, props);

    _this.handleChange = function (val, index) {
      var onChange = _this.props.onChange;
      var _this$state = _this.state,
          startTime = _this$state.startTime,
          endTime = _this$state.endTime;
      var newStartTime = index === "first" ? val : startTime;
      var newEndTime = index !== "first" ? val : endTime;

      _this.setState({
        startTime: newStartTime && newStartTime.set("second", 0),
        endTime: newEndTime && newEndTime.set("second", 0)
      }, function () {
        onChange && onChange([newStartTime, newEndTime]);
      });
    };

    var _startTime = null;
    var _endTime = null;

    if (props.value) {
      var now = props.value[0] ? (0, _moment["default"])("".concat(props.value[0].format("YYYY-MM-DD HH:mm"), ":00")) : null;

      if (props.value.length === 2) {
        _startTime = now;
        _endTime = props.value[1] ? (0, _moment["default"])("".concat(now.format("".concat(now.format("YYYY-MM-DD"), " ").concat(props.value[1].format("HH:mm"), ":00")))) : null;
      }
    }

    _this.state = {
      startTime: _startTime,
      endTime: _endTime
    };
    return _this;
  }

  (0, _createClass2["default"])(TimeRangePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          other = _this$props.other;
      var _this$state2 = this.state,
          startTime = _this$state2.startTime,
          endTime = _this$state2.endTime;
      var startPlaceholder;
      var endPlaceholder;

      if (typeof placeholder === "string") {
        startPlaceholder = placeholder;
        endPlaceholder = placeholder;
      }

      if ((0, _typeof2["default"])(placeholder) === "object") {
        var _placeholder = (0, _slicedToArray2["default"])(placeholder, 2);

        startPlaceholder = _placeholder[0];
        endPlaceholder = _placeholder[1];
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "time-rangepicker-box"
      }, /*#__PURE__*/_react["default"].createElement(_antd.TimePicker, (0, _extends2["default"])({
        format: "HH:mm",
        value: startTime,
        onChange: function onChange(i) {
          return _this2.handleChange(i, "first");
        },
        placeholder: startPlaceholder // disabledHours={this.disabledFirstHours}

      }, other)), /*#__PURE__*/_react["default"].createElement("span", {
        className: "picker-text"
      }, "\u81F3"), /*#__PURE__*/_react["default"].createElement(_antd.TimePicker, (0, _extends2["default"])({
        format: "HH:mm",
        value: endTime,
        onChange: function onChange(i) {
          return _this2.handleChange(i, "last");
        },
        placeholder: endPlaceholder
      }, other)));
    }
  }], [{
    key: "formatStartAndEndTime",
    value: function formatStartAndEndTime() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var startTime = null;
      var endTime = null;

      if (arr.length === 2) {
        var now = arr[0] ? (0, _moment["default"])("".concat(arr[0].format("YYYY-MM-DD HH:mm"), ":00")) : null;
        startTime = now;
        endTime = arr[1] && arr[0] ? (0, _moment["default"])("".concat(now.format("".concat(now.format("YYYY-MM-DD"), " ").concat(arr[1].format("HH:mm"), ":00")))) : null;
      }

      return {
        startTime: startTime,
        endTime: endTime
      };
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("value" in nextProps) {
        return TimeRangePicker.formatStartAndEndTime(nextProps.value);
      }

      return null;
    }
    /**
     * 改变组件值 oncahge
     * @param val    改变的值
     * @param index  改变值的组件的标识
     * @returns {*}
     */

  }]);
  return TimeRangePicker;
}(_react["default"].Component);

exports["default"] = TimeRangePicker;