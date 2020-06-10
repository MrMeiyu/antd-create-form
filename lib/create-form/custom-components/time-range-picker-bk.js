"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _moment = _interopRequireDefault(require("moment"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var hourArr = [];

var TimeRangePicker = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(TimeRangePicker, _React$Component);

  var _super = _createSuper(TimeRangePicker);

  function TimeRangePicker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TimeRangePicker);
    _this = _super.call(this, props);

    _this.handleChange = function (val, index) {
      console.log(1111, val, index);
      var minuteStep = _this.props.other.minuteStep;
      var onChange = _this.props.onChange;
      var _this$state = _this.state,
          startTime = _this$state.startTime,
          endTime = _this$state.endTime;
      var disableMinObj = _this.state.disableMinObj;
      var value = val;

      if (value) {
        var objKey = parseInt(value.format("HH"), 10);
        var nowMinutes = parseInt(value.format("mm"), 10);

        if (disableMinObj[objKey]) {
          if (disableMinObj[objKey].includes(nowMinutes)) {
            value = _this.autoSelectTime(objKey, disableMinObj);
          }
        }
      }

      if (index === "first") {
        _this.setState({
          startTime: value,
          endTime: null
        });

        startTime = value;
        endTime = null;
      }

      if (index === "last") {
        if (!!startTime && !!val) {
          if (startTime.format("HH:mm") === val.format("HH:mm")) {
            val.add(minuteStep, "minutes");
          }
        }

        _this.setState({
          endTime: value
        });

        endTime = value;
      }

      if (startTime && endTime) {
        console.log("1213", [startTime, endTime]);
        onChange([startTime, endTime]);
      } else {
        onChange(null);
      }
    };

    _this.autoSelectTime = function (objKey, disableMinObj) {
      var _this$props$other = _this.props.other,
          minuteStep = _this$props$other.minuteStep,
          hourStep = _this$props$other.hourStep;

      if (!minuteStep) {
        minuteStep = 1;
      }

      if (!hourStep) {
        hourStep = 1;
      }

      var hour = objKey;
      var min = 0;
      var iscontinute = true;

      do {
        iscontinute = disableMinObj[hour].includes(min);

        if (iscontinute) {
          min += minuteStep;
        }

        if (min > 59) {
          min = 0;
          hour = hourStep + hour;
        }

        if (hour > 23) {
          hour = 0;
        }
      } while (iscontinute);

      return (0, _moment["default"])("".concat(hour, ":").concat(min), "HH:mm");
    };

    _this.disabledFirstHours = function () {
      var disableHourArr = _this.state.disableHourArr;
      return disableHourArr;
    };

    _this.disabledFirstMinutes = function (selectedHour) {
      var disableMinObj = _this.state.disableMinObj;
      var mergeArr = disableMinObj[selectedHour];
      return mergeArr;
    };

    _this.disabledLastHours = function () {
      var _this$state2 = _this.state,
          startTime = _this$state2.startTime,
          disableHourArr = _this$state2.disableHourArr,
          disableMinObj = _this$state2.disableMinObj;
      var minuteStep = _this.props.other.minuteStep;
      var hourStep = _this.props.other.hourStep;

      if (!hourStep) {
        hourStep = 1;
      }

      if (startTime) {
        var hours = parseInt(startTime.format("HH"), 10);
        var min = parseInt(startTime.format("m"), 10);
        hourArr = _this.makeArrFunc(hourStep, 24);

        if (min === 60 - minuteStep) {
          hours += hourStep;
        }

        hourArr = hourArr.splice(0, hours / hourStep);
        hourArr = _this.addHourArrFunc(hourArr, disableHourArr, startTime, hours); // console.log(hourArr);

        if (disableMinObj[hours]) {
          var nowObjArr = disableMinObj[hours].concat();

          if (!nowObjArr.includes(min)) {
            nowObjArr.push(min);
          }

          if (nowObjArr.length === 60 / minuteStep) {
            hourArr.push(hours);
          }
        }

        return hourArr;
      }

      return disableHourArr;
    };

    _this.disabledLastMinutes = function (selectedHour) {
      var minuteStep = _this.props.other.minuteStep;
      var _this$state3 = _this.state,
          startTime = _this$state3.startTime,
          disableMinObj = _this$state3.disableMinObj;
      var mergeArr = disableMinObj[selectedHour];

      if (!minuteStep) {
        minuteStep = 1;
      }

      var minArr = _this.makeArrFunc(minuteStep, 60);

      if (startTime) {
        var hours = parseInt(startTime.format("HH"), 10);
        var min = parseInt(startTime.format("m"), 10); // console.log(hourArr.includes(selectedHour));

        if (hourArr.includes(selectedHour) || hours > selectedHour) {
          return minArr;
        }

        if (hours === selectedHour) {
          minArr = minArr.splice(0, min / minuteStep + 1);

          if (mergeArr) {
            minArr = _this.mergeArrFunc(minArr, mergeArr);
          }

          return minArr;
        }
      }

      return mergeArr;
    };

    _this.addHourArrFunc = function (nowHourArr, disableHourArr, startTime, hours) {
      var _this$props$other2 = _this.props.other,
          minuteStep = _this$props$other2.minuteStep,
          hourStep = _this$props$other2.hourStep;
      var keys = Object.keys;

      var newHourArr = _this.mergeArrFunc(nowHourArr, disableHourArr);

      var disableMinObj = _this.state.disableMinObj;

      if (!minuteStep) {
        minuteStep = 1;
      }

      if (!hourStep) {
        hourStep = 1;
      }

      var halfArr = [];

      var _iterator = _createForOfIteratorHelper(keys(disableMinObj)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;

          if (disableMinObj[key].length !== 60 / minuteStep) {
            halfArr.push(parseInt(key, 10));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (startTime) {
        var myhours = hours;
        var maxTime;

        for (var i = 0; i < halfArr.length; i += 1) {
          if (halfArr[i] >= myhours) {
            newHourArr.push(halfArr[i] + 1);
            newHourArr.sort(function (a, b) {
              return a - b;
            });
            break;
          }
        }

        if (disableMinObj[myhours]) {
          if (disableMinObj[myhours].length === 60 / minuteStep) {
            newHourArr.push(myhours);
            newHourArr.sort(function (a, b) {
              return a - b;
            });
          }
        }

        for (var _i = 0; _i < 24; _i += 1) {
          if (newHourArr[_i] === myhours - 1) {
            maxTime = newHourArr[_i + 1];
            break;
          }
        }

        for (var _i2 = maxTime + 1; _i2 < 24; _i2 += 1) {
          if (!newHourArr.includes(_i2)) {
            newHourArr.push(_i2);
          }
        }
      }

      return newHourArr.sort(function (a, b) {
        return a - b;
      });
    };

    _this.makeArrFunc = function () {
      var Step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
      var arr = [];
      var i = 0;

      while (i < length) {
        arr.push(i);
        i += Step;
      }

      return arr;
    };

    _this.setDisableData = function () {
      var disableTime = _this.props.other.disableTime;
      var disableHourArr = [];
      var disableMinObj = {};

      if (disableTime) {
        var _this$props$other3 = _this.props.other,
            hourStep = _this$props$other3.hourStep,
            minuteStep = _this$props$other3.minuteStep;

        if (!hourStep) {
          hourStep = 1;
        }

        if (!minuteStep) {
          minuteStep = 1;
        }

        var _iterator2 = _createForOfIteratorHelper(disableTime),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var val = _step2.value;

            var _val$disableStart$spl = val.disableStart.split(":"),
                _val$disableStart$spl2 = (0, _slicedToArray2["default"])(_val$disableStart$spl, 2),
                startHour = _val$disableStart$spl2[0],
                startMin = _val$disableStart$spl2[1];

            var _val$disableEnd$split = val.disableEnd.split(":"),
                _val$disableEnd$split2 = (0, _slicedToArray2["default"])(_val$disableEnd$split, 2),
                endHour = _val$disableEnd$split2[0],
                endMin = _val$disableEnd$split2[1];

            startHour = parseInt(startHour, 10);
            startMin = parseInt(startMin, 10);
            endHour = parseInt(endHour, 10);
            endMin = parseInt(endMin, 10);

            for (var i = startHour; i <= endHour; i += hourStep) {
              Object.assign(disableMinObj, (0, _defineProperty2["default"])({}, i, []));

              if (i === startHour && startMin > 0) {
                for (var thisMin = 0; thisMin < 60; thisMin += minuteStep) {
                  if (thisMin >= startMin) {
                    disableMinObj[i].push(thisMin);
                  }
                }
              } else if (i === endHour && endMin < 60 - minuteStep) {
                for (var _thisMin = 0; _thisMin <= endMin; _thisMin += minuteStep) {
                  if (_thisMin <= endMin) {
                    disableMinObj[i].push(_thisMin);
                  }
                }
              } else {
                for (var _thisMin2 = 0; _thisMin2 < 60; _thisMin2 += minuteStep) {
                  disableMinObj[i].push(_thisMin2);
                }

                disableHourArr.push(i);
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return {
        disableHourArr: disableHourArr,
        disableMinObj: disableMinObj
      };
    };

    _this.mergeArrFunc = function (targetArr, mergeArr) {
      if (mergeArr.length) {
        var _iterator3 = _createForOfIteratorHelper(mergeArr),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var val = _step3.value;

            if (!targetArr.includes(val)) {
              targetArr.push(val);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      return targetArr.sort(function (a, b) {
        return a - b;
      });
    };

    var _startTime = null;
    var _endTime = null;

    if (props.value) {
      if (props.value.length === 2) {
        _startTime = (0, _moment["default"])(props.value[0], "HH:mm");
        _endTime = (0, _moment["default"])(props.value[1], "HH:mm");
      }
    }

    var _this$setDisableData = _this.setDisableData(),
        _disableHourArr = _this$setDisableData.disableHourArr,
        _disableMinObj = _this$setDisableData.disableMinObj;

    _this.state = {
      startTime: _startTime,
      endTime: _endTime,
      disableHourArr: _disableHourArr,
      disableMinObj: _disableMinObj
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
      var _this$state4 = this.state,
          startTime = _this$state4.startTime,
          endTime = _this$state4.endTime;
      console.log("render", startTime, endTime);
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
        placeholder: startPlaceholder,
        disabledHours: this.disabledFirstHours,
        disabledMinutes: this.disabledFirstMinutes
      }, other)), /*#__PURE__*/_react["default"].createElement("span", {
        className: "picker-text"
      }, "\u81F3"), /*#__PURE__*/_react["default"].createElement(_antd.TimePicker, (0, _extends2["default"])({
        format: "HH:mm",
        value: endTime,
        onChange: function onChange(i) {
          return _this2.handleChange(i, "last");
        },
        placeholder: endPlaceholder,
        disabledHours: this.disabledLastHours,
        disabledMinutes: this.disabledLastMinutes
      }, other)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState, firstopen) {
      var value = nextProps.value;

      if ("value" in nextProps) {
        if (value) {
          if (value.length === 2) {
            if (prevState.startTime && !prevState.endTime) {
              return {
                endTime: null
              };
            }

            if (!!value[0] && !!value[1]) {
              var _value = (0, _slicedToArray2["default"])(value, 2),
                  startTime = _value[0],
                  endTime = _value[1];

              startTime = (0, _moment["default"])(startTime, "HH:mm");
              endTime = (0, _moment["default"])(endTime, "HH:mm");
              console.log("getDerivedStateFromProps", startTime, endTime);
              return {
                startTime: startTime,
                endTime: endTime
              };
            }
          }
        }

        if (value === undefined) {
          return {
            startTime: null,
            endTime: null
          };
        }
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