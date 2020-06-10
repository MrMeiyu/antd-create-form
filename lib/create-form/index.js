"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../upload/index"));

var _index2 = _interopRequireDefault(require("../year-picker/index"));

var _helpers = require("../util/helpers");

var _timeRangePicker = _interopRequireDefault(require("./custom-components/time-range-picker"));

var _dec, _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FormInputKeys = {};
var CreateForm = (_dec = _antd.Form.create(), _dec(_class = (_temp = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(CreateForm, _PureComponent);

  var _super = _createSuper(CreateForm);

  function CreateForm(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CreateForm);
    _this = _super.call(this, props);

    _this.generateCustomInput = function (data, _ref, defaultFormItemLayout) {
      var rules = _ref.rules;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var Component = data.component;
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules
      })(Component));
    };

    _this.generateInputNumber = function (data, _ref2, defaultFormItemLayout) {
      var rules = _ref2.rules;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_antd.InputNumber, other)));
    };

    _this.generateRangePicker = function (data, _ref3, defaultFormItemLayout) {
      var rules = _ref3.rules;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_antd.DatePicker.RangePicker, other)));
    };

    _this.generateYearPicker = function (data, _ref4, defaultFormItemLayout) {
      var rules = _ref4.rules,
          placeholder = _ref4.placeholder;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_index2["default"], {
        otherParams: other,
        placeholder: placeholder
      })));
    };

    _this.generateWeekPicker = function (data, _ref5, defaultFormItemLayout) {
      var rules = _ref5.rules,
          placeholder = _ref5.placeholder;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_antd.DatePicker.WeekPicker, (0, _extends2["default"])({
        placeholder: placeholder
      }, other))));
    };

    _this.generateMonthPicker = function (data, _ref6, defaultFormItemLayout) {
      var rules = _ref6.rules,
          placeholder = _ref6.placeholder;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_antd.DatePicker.MonthPicker, (0, _extends2["default"])({
        placeholder: placeholder
      }, other))));
    };

    _this.generateDatePicker = function (data, _ref7, defaultFormItemLayout) {
      var rules = _ref7.rules,
          placeholder = _ref7.placeholder;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_antd.DatePicker, (0, _extends2["default"])({
        placeholder: placeholder
      }, other))));
    };

    _this.generateTimeRangePicker = function (data, _ref8, defaultFormItemLayout) {
      var rules = _ref8.rules,
          placeholder = _ref8.placeholder;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_timeRangePicker["default"], {
        placeholder: placeholder,
        other: other
      })));
    };

    _this.generateUploadFile = function (data, _ref9, defaultFormItemLayout) {
      var rules = _ref9.rules;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var other = data.otherParams || {};

      if (!other.listType) {
        other.listType = "text";
      }

      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_index["default"], {
        otherParams: other
      })));
    };

    _this.generateSwitch = function (data, _ref10, defaultFormItemLayout) {
      var rules = _ref10.rules;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        valuePropName: "checked",
        rules: rules,
        initialValue: !!data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_antd.Switch, other)));
    };

    _this.generateUploadImg = function (data, _ref11, defaultFormItemLayout) {
      var rules = _ref11.rules;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var other = data.otherParams || {};

      if (!other.accept) {
        other.accept = ".png,.jpeg,.jpg";
      }

      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_index["default"], {
        otherParams: other
      })));
    };

    _this.generateTreeNode = function (items) {
      return items.map(function (z) {
        return /*#__PURE__*/_react["default"].createElement(_antd.TreeSelect.TreeNode, {
          value: "".concat(z.value),
          title: z.label,
          key: z.value
        }, _this.generateTreeNode(z.children || []));
      });
    };

    _this.generateTreeSelect = function (data, _ref12, defaultFormItemLayout) {
      var rules = _ref12.rules,
          placeholder = _ref12.placeholder;
      var getFieldDecorator = _this.props.form.getFieldDecorator;

      if (!data.selectOptions) {
        throw new Error("\u8BF7\u63D0\u4F9B".concat(data.name, "\u5B57\u6BB5\u914D\u7F6E\u7684selectOptions\u5B57\u6BB5"));
      }

      var SelectOptions = _this.getSelectOptions(data);

      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_antd.TreeSelect, (0, _extends2["default"])({
        treeDefaultExpandAll: true
      }, other, {
        placeholder: placeholder
      }), _this.generateTreeNode(SelectOptions))));
    };

    _this.generateSelect = function (data, _ref13, defaultFormItemLayout) {
      var rules = _ref13.rules,
          placeholder = _ref13.placeholder;
      var getFieldDecorator = _this.props.form.getFieldDecorator;

      if (!data.selectOptions) {
        throw new Error("\u8BF7\u63D0\u4F9B".concat(data.name, "\u5B57\u6BB5\u914D\u7F6E\u7684selectOptions\u5B57\u6BB5"));
      }

      var SelectOptions = _this.getSelectOptions(data);

      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_antd.Select, (0, _extends2["default"])({}, other, {
        placeholder: placeholder
      }), SelectOptions.map(function (z) {
        if ((0, _helpers.isObject)(z)) {
          return /*#__PURE__*/_react["default"].createElement(_antd.Select.Option, {
            key: "".concat(z.value),
            value: "".concat(z.value)
          }, z.label);
        }

        return /*#__PURE__*/_react["default"].createElement(_antd.Select.Option, {
          key: z,
          value: z
        }, z);
      }))));
    };

    _this.generateCascadeSelect = function (data, _ref14, defaultFormItemLayout) {
      var rules = _ref14.rules,
          placeholder = _ref14.placeholder;
      var getFieldDecorator = _this.props.form.getFieldDecorator;

      if (!data.selectOptions) {
        throw new Error("\u8BF7\u63D0\u4F9B".concat(data.name, "\u5B57\u6BB5\u914D\u7F6E\u7684selectOptions\u5B57\u6BB5"));
      }

      var SelectOptions = _this.getSelectOptions(data);

      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_antd.Cascader, (0, _extends2["default"])({}, other, {
        options: SelectOptions,
        placeholder: placeholder
      }))));
    };

    _this.generateInput = function (data, _ref15, defaultFormItemLayout) {
      var rules = _ref15.rules,
          placeholder = _ref15.placeholder;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_antd.Input, (0, _extends2["default"])({}, other, {
        placeholder: placeholder
      }))));
    };

    _this.generateTextArea = function (data, _ref16, defaultFormItemLayout) {
      var rules = _ref16.rules,
          placeholder = _ref16.placeholder;
      var getFieldDecorator = _this.props.form.getFieldDecorator;
      var other = data.otherParams || {};
      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, (0, _extends2["default"])({
        key: data.name,
        label: data.title,
        extra: data.extra
      }, defaultFormItemLayout), getFieldDecorator(data.name, {
        rules: rules,
        initialValue: data.defaultValue
      })( /*#__PURE__*/_react["default"].createElement(_antd.Input.TextArea, (0, _extends2["default"])({}, other, {
        placeholder: placeholder
      }))));
    };

    _this.getDetailInfo = function () {
      var detailInfo = _this.state.detailInfo;
      return detailInfo;
    };

    _this.requestDetailInfo = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _this$props, detailData, detailDataFormat;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, detailData = _this$props.detailData, detailDataFormat = _this$props.detailDataFormat;

              if (detailData) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              if ((0, _helpers.isString)(detailData)) {
                window.Get(detailData).then(function (_ref18) {
                  var data = _ref18.data;

                  _this.setState({
                    detailInfo: detailDataFormat(data)
                  }, _this.initFormValue);
                });
              } else {
                _this.setState({
                  detailInfo: detailDataFormat(detailData)
                }, _this.initFormValue);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.initFormValue = function () {
      var detailInfo = _this.state.detailInfo;
      var form = _this.props.form;
      var keys = Object.keys(FormInputKeys);
      var formValue = {};
      keys.forEach(function (z) {
        formValue[z] = (0, _helpers.isNumber)(detailInfo[z]) ? "".concat(detailInfo[z]) : detailInfo[z];
      });
      form.setFieldsValue(formValue);
    };

    _this.getRequestItem = function (items) {
      var newRequestDataMap = {};

      if (!(0, _helpers.isArray)(items)) {
        return newRequestDataMap;
      }

      items.forEach(function (item) {
        if ((0, _helpers.isArray)(item)) {
          item.forEach(function (z) {
            if ((0, _helpers.isObject)(z) && z.selectOptions && z.selectOptions instanceof Promise) {
              newRequestDataMap[z.name] = z.selectOptions;
            }
          });
        }

        if ((0, _helpers.isObject)(item) && item.selectOptions && item.selectOptions instanceof Promise) {
          newRequestDataMap[item.name] = item.selectOptions;
        }
      });
      return newRequestDataMap;
    };

    _this.getRequestData = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var newRequestDataMap, filedItems, requestList, keys;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newRequestDataMap = {};
              filedItems = _this.props.filedItems;
              newRequestDataMap = _objectSpread(_objectSpread({}, newRequestDataMap), _this.getRequestItem(filedItems));
              requestList = [];
              keys = Object.keys(newRequestDataMap);
              keys.forEach(function (z) {
                requestList.push(newRequestDataMap[z]);
              });
              Promise.all(requestList).then(function (z) {
                z.forEach(function (j, index) {
                  newRequestDataMap[keys[index]] = j;
                });
                return newRequestDataMap;
              }).then(function (m) {
                _this.setState({
                  requestDataMap: m
                });
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    _this.getSelectOptions = function (data) {
      var requestDataMap = _this.state.requestDataMap;

      if (requestDataMap[data.name]) {
        return requestDataMap[data.name];
      }

      if (data.selectOptions instanceof Promise) {
        return [];
      }

      return data.selectOptions;
    };

    _this.setFieldData = function () {
      var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var setFieldsValue = _this.props.form.setFieldsValue;
      var requestDataMap = _this.state.requestDataMap;
      var keys = Object.keys(info);
      var values = {};
      var newRequestDataMap = {};
      var requestList = [];
      var appendRequestDataMap = {};
      keys.forEach(function (z) {
        var current = info[z];

        if ("value" in current) {
          values[z] = current.value;
        }

        if ("selectOptions" in current) {
          if (current.selectOptions instanceof Promise) {
            newRequestDataMap[z] = current.selectOptions;
            requestList.push(current.selectOptions);
          }

          if ((0, _helpers.isArray)(current.selectOptions)) {
            appendRequestDataMap[z] = current.selectOptions;
          }
        }
      });
      var requestMapKeys = Object.keys(newRequestDataMap);

      if (requestMapKeys.length) {
        Promise.all(requestList).then(function (z) {
          z.forEach(function (j, index) {
            newRequestDataMap[requestMapKeys[index]] = j;
          });

          _this.setState({
            requestDataMap: _objectSpread(_objectSpread({}, requestDataMap), newRequestDataMap)
          }, function () {
            setFieldsValue(values);
          });
        });
      } else {
        _this.setState({
          requestDataMap: _objectSpread(_objectSpread({}, requestDataMap), newRequestDataMap)
        }, function () {
          setFieldsValue(values);
        });
      }
    };

    _this.state = {
      requestDataMap: {},
      detailInfo: {} // 详情数据

    };
    return _this;
  }

  (0, _createClass2["default"])(CreateForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          filedItems = _this$props2.filedItems,
          formItemLayout = _this$props2.formItemLayout;
      var layout = formItemLayout ? "horizontal" : "vertical";
      var defaultFormItemLayout = formItemLayout;
      return /*#__PURE__*/_react["default"].createElement(_antd.Form, {
        layout: layout
      }, filedItems.map(function (j) {
        return _this2.generateItem(j, defaultFormItemLayout);
      }));
    }
    /**
     * 构建表单项
     * @param data
     * @param defaultFormItemLayout
     * @returns {*}
     */

  }, {
    key: "generateItem",
    value: function generateItem(data, defaultFormItemLayout) {
      FormInputKeys[data.name] = data;
      var rulesAndPlaceholder = this.createRulesAndPlaceholder(data);

      if (data.component) {
        return this.generateCustomInput(data, rulesAndPlaceholder, defaultFormItemLayout);
      }

      switch (data.type) {
        case "select":
          return this.generateSelect(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "treeSelect":
          return this.generateTreeSelect(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "uploadImg":
          return this.generateUploadImg(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "switch":
          return this.generateSwitch(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "uploadFile":
          return this.generateUploadFile(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "timeRangePicker":
          return this.generateTimeRangePicker(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "datePicker":
          return this.generateDatePicker(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "monthPicker":
          return this.generateMonthPicker(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "weekPicker":
          return this.generateWeekPicker(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "yearPicker":
          return this.generateYearPicker(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "rangePicker":
          return this.generateRangePicker(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "textArea":
          return this.generateTextArea(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "cascade":
          return this.generateCascadeSelect(data, rulesAndPlaceholder, defaultFormItemLayout);

        case "inputNumber":
          return this.generateInputNumber(data, rulesAndPlaceholder, defaultFormItemLayout);

        default:
          return this.generateInput(data, rulesAndPlaceholder, defaultFormItemLayout);
      }
    }
    /**
     * 生成自定义组件类型表单
     * @param data
     * @param rules
     * @param defaultFormItemLayout
     * @returns {*}
     */

  }, {
    key: "createRulesAndPlaceholder",

    /**
     * 构建表单规则和Placeholder
     * @param data
     * @returns {{rules: Array, placeholder: (*|string)}}
     */
    value: function createRulesAndPlaceholder(data) {
      var type = data.type,
          placeholder = data.placeholder,
          title = data.title,
          rule = data.rule;
      var prefix = /(select|switch|treeSelect|uploadImg|uploadFile|[a-z]*Picker)/i.test(type) ? "请选择" : "请输入";
      var placeholderString = "";

      if (data.placeholder) {
        placeholderString = placeholder;
      } else {
        placeholderString = prefix + title;
      }

      var rules = [];

      if (prefix === "请输入") {
        rules.push({
          pattern: /^(?!(\s+$))/,
          message: "不能全部为空格"
        });
      }

      if (rule) {
        if (rule.required) {
          rules.push({
            required: true,
            message: prefix + title
          });
        }

        if (rule.pattern) {
          if ((0, _helpers.isObject)(rule.pattern) && rule.pattern.message && rule.pattern.reg) {
            rules.push({
              pattern: rule.pattern.reg,
              message: rule.pattern.message
            });
          } else {
            rules.push({
              pattern: rule.pattern,
              message: "".concat(prefix, "\u6B63\u786E\u7684").concat(title)
            });
          }
        }

        if (data.rule.validator) {
          rules.push(rule.validator.bind(this));
        }
      }

      return {
        rules: rules,
        placeholder: placeholderString
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var type = this.props.type;
      this.getRequestData();

      if (type === "edit") {
        this.requestDetailInfo();
      }
    }
  }]);
  return CreateForm;
}(_react.PureComponent), _temp)) || _class);
CreateForm.propTypes = {
  type: _propTypes["default"].oneOf(["edit", "add"]),
  filedItems: _propTypes["default"].arrayOf( // 生成表单数据
  _propTypes["default"].shape({
    title: _propTypes["default"].string,
    name: _propTypes["default"].string
  })),
  formItemLayout: _propTypes["default"].object,
  // 布局方式
  detailData: _propTypes["default"].oneOfType([// 获取详情地址或者详情数据formItemLayout
  _propTypes["default"].string, _propTypes["default"].object]),
  detailDataFormat: _propTypes["default"].func // 获取详情后格式化数据

};
CreateForm.defaultProps = {
  filedItems: [],
  type: "add",
  detailDataFormat: function detailDataFormat(x) {
    return x;
  }
};
var _default = CreateForm;
exports["default"] = _default;