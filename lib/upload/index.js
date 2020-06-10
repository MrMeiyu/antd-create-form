"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _react = _interopRequireWildcard(require("react"));

var _isEqual = _interopRequireDefault(require("loadsh/isEqual"));

var _antd = require("antd");

var _helpers = require("../util/helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Index = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Index, _PureComponent);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Index);
    _this = _super.call(this, props);

    _this.triggerChange = function (newList) {
      var onChange = _this.props.onChange;
      onChange && onChange(newList);
    };

    _this.handleChange = function (info) {
      console.log("info", info);

      _this.setState({
        fileList: info.fileList
      }, function () {
        var newList = [];
        info.fileList.forEach(function (z) {
          if (z.response) {
            if (z.response.httpStatus === 200) {
              var item = (0, _helpers.getFileObjectFromUrl)(z.response.data.fileUrl);
              newList.push(_objectSpread(_objectSpread({}, item), {}, {
                name: z.name,
                uid: z.uid || item.id
              }));
            }
          } else {
            newList.push(z);
          }
        });

        _this.triggerChange(newList);
      });
    };

    _this.state = {
      fileList: props.value || [],
      oldValue: props.value || []
    };
    return _this;
  }

  (0, _createClass2["default"])(Index, [{
    key: "render",
    value: function render() {
      var fileList = this.state.fileList;
      var otherParams = this.props.otherParams;

      var _ref = otherParams || {},
          maxNumber = _ref.maxNumber;

      if (maxNumber == null) {
        maxNumber = 100;
      }

      var uploadButton = /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        type: "primary",
        style: {
          height: ".4rem"
        }
      }, "\u70B9\u51FB\u4E0A\u4F20");

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "upload-file"
      }, /*#__PURE__*/_react["default"].createElement(_antd.Upload, (0, _extends2["default"])({
        action: "./file/obs/upload",
        fileList: fileList,
        onChange: this.handleChange,
        headers: {
          ACCESS_DEFAULT_TOKEN_HEADER_NAME: _jsCookie["default"].get("SystemToken")
        }
      }, otherParams), fileList.length >= maxNumber ? null : (otherParams === null || otherParams === void 0 ? void 0 : otherParams.uploadButton) || uploadButton));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("value" in nextProps && !(0, _isEqual["default"])(nextProps.value, prevState.oldValue)) {
        return {
          fileList: nextProps.value || [],
          oldValue: nextProps.value || []
        };
      }

      return null;
    }
  }]);
  return Index;
}(_react.PureComponent);

var _default = Index;
exports["default"] = _default;