import React, { PureComponent } from "react";
import {
  Form,
  Input,
  Select,
  Switch,
  DatePicker,
  TreeSelect,
  Cascader,
  InputNumber,
} from "antd";
import PropTypes from "prop-types";
import UploadFile from "../upload/index";
import YearPicker from "../year-picker/index";
import { isArray, isString, isObject, isNumber } from "../util/helpers";
import TimeRangePicker from "./custom-components/time-range-picker";

const FormInputKeys = {};

@Form.create()
class CreateForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      requestDataMap: {},
      detailInfo: {}, // 详情数据
    };
  }

  render() {
    const { filedItems, formItemLayout } = this.props;
    const layout = formItemLayout ? "horizontal" : "vertical";
    const defaultFormItemLayout = formItemLayout;
    return (
      <Form layout={layout}>
        {filedItems.map((j) => this.generateItem(j, defaultFormItemLayout))}
      </Form>
    );
  }

  /**
   * 构建表单项
   * @param data
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateItem(data, defaultFormItemLayout) {
    FormInputKeys[data.name] = data;
    const rulesAndPlaceholder = this.createRulesAndPlaceholder(data);
    if (data.component) {
      return this.generateCustomInput(
        data,
        rulesAndPlaceholder,
        defaultFormItemLayout
      );
    }
    switch (data.type) {
      case "select":
        return this.generateSelect(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "treeSelect":
        return this.generateTreeSelect(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "uploadImg":
        return this.generateUploadImg(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "switch":
        return this.generateSwitch(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "uploadFile":
        return this.generateUploadFile(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "timeRangePicker":
        return this.generateTimeRangePicker(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "datePicker":
        return this.generateDatePicker(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "monthPicker":
        return this.generateMonthPicker(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "weekPicker":
        return this.generateWeekPicker(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "yearPicker":
        return this.generateYearPicker(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "rangePicker":
        return this.generateRangePicker(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "textArea":
        return this.generateTextArea(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "cascade":
        return this.generateCascadeSelect(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      case "inputNumber":
        return this.generateInputNumber(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
      default:
        return this.generateInput(
          data,
          rulesAndPlaceholder,
          defaultFormItemLayout
        );
    }
  }

  /**
   * 生成自定义组件类型表单
   * @param data
   * @param rules
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateCustomInput = (data, { rules }, defaultFormItemLayout) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const Component = data.component;
    return (
      <Form.Item key={data.name} label={data.title} {...defaultFormItemLayout}>
        {getFieldDecorator(data.name, {
          rules,
        })(Component)}
      </Form.Item>
    );
  };

  /**
   * 数字输入框
   * @param data
   * @param rules
   * @param placeholder
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateInputNumber = (data, { rules }, defaultFormItemLayout) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(<InputNumber {...other} />)}
      </Form.Item>
    );
  };

  /**
   * 时间范围选择器
   * @param data
   * @param rules
   * @param placeholder
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateRangePicker = (data, { rules }, defaultFormItemLayout) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(<DatePicker.RangePicker {...other} />)}
      </Form.Item>
    );
  };

  /**
   * 生成年选择器
   * @param data
   * @param rules
   * @param placeholder
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateYearPicker = (
    data,
    { rules, placeholder },
    defaultFormItemLayout
  ) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(<YearPicker otherParams={other} placeholder={placeholder} />)}
      </Form.Item>
    );
  };

  /**
   * 生成周选择器
   * @param data
   * @param rules
   * @param placeholder
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateWeekPicker = (
    data,
    { rules, placeholder },
    defaultFormItemLayout
  ) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(<DatePicker.WeekPicker placeholder={placeholder} {...other} />)}
      </Form.Item>
    );
  };

  /**
   * 生成月份选择器
   * @param data
   * @param rules
   * @param placeholder
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateMonthPicker = (
    data,
    { rules, placeholder },
    defaultFormItemLayout
  ) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(<DatePicker.MonthPicker placeholder={placeholder} {...other} />)}
      </Form.Item>
    );
  };

  /**
   * 生成日期选择器
   * @param data
   * @param rules
   * @param placeholder
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateDatePicker = (
    data,
    { rules, placeholder },
    defaultFormItemLayout
  ) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(<DatePicker placeholder={placeholder} {...other} />)}
      </Form.Item>
    );
  };

  /**
   * 生成时间范围选择器
   * @param data
   * @param rules
   * @param placeholder
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateTimeRangePicker = (
    data,
    { rules, placeholder },
    defaultFormItemLayout
  ) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(<TimeRangePicker placeholder={placeholder} other={other} />)}
      </Form.Item>
    );
  };

  /**
   * 生成上传文件
   * @param data
   * @param rules
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateUploadFile = (data, { rules }, defaultFormItemLayout) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const other = data.otherParams || {};
    if (!other.listType) {
      other.listType = "text";
    }
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(<UploadFile otherParams={other} />)}
      </Form.Item>
    );
  };

  /**
   * 生成开关
   * @param data
   * @param rules
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateSwitch = (data, { rules }, defaultFormItemLayout) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          valuePropName: "checked",
          rules,
          initialValue: !!data.defaultValue,
        })(<Switch {...other} />)}
      </Form.Item>
    );
  };

  /**
   * 生成图片上传
   * @param data
   * @param rules
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateUploadImg = (data, { rules }, defaultFormItemLayout) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const other = data.otherParams || {};
    if (!other.accept) {
      other.accept = ".png,.jpeg,.jpg";
    }
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(<UploadFile otherParams={other} />)}
      </Form.Item>
    );
  };

  /**
   * 生成treeSelect子节点
   * @param items
   * @returns {*}
   */
  generateTreeNode = (items) =>
    items.map((z) => (
      <TreeSelect.TreeNode value={`${z.value}`} title={z.label} key={z.value}>
        {this.generateTreeNode(z.children || [])}
      </TreeSelect.TreeNode>
    ));

  /**
   * 生成树形选择器
   * @param data
   * @param rules
   * @param placeholder
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateTreeSelect = (
    data,
    { rules, placeholder },
    defaultFormItemLayout
  ) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    if (!data.selectOptions) {
      throw new Error(`请提供${data.name}字段配置的selectOptions字段`);
    }
    const SelectOptions = this.getSelectOptions(data);
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(
          <TreeSelect treeDefaultExpandAll {...other} placeholder={placeholder}>
            {this.generateTreeNode(SelectOptions)}
          </TreeSelect>
        )}
      </Form.Item>
    );
  };

  /**
   * 构建select类型输入框
   * @param data
   * @param rules
   * @param placeholder
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateSelect = (data, { rules, placeholder }, defaultFormItemLayout) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    if (!data.selectOptions) {
      throw new Error(`请提供${data.name}字段配置的selectOptions字段`);
    }
    const SelectOptions = this.getSelectOptions(data);
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(
          <Select {...other} placeholder={placeholder}>
            {SelectOptions.map((z) => {
              if (isObject(z)) {
                return (
                  <Select.Option key={`${z.value}`} value={`${z.value}`}>
                    {z.label}
                  </Select.Option>
                );
              }
              return (
                <Select.Option key={z} value={z}>
                  {z}
                </Select.Option>
              );
            })}
          </Select>
        )}
      </Form.Item>
    );
  };

  /**
   * 构建cascade类型输入框
   * @param data
   * @param rules
   * @param placeholder
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateCascadeSelect = (
    data,
    { rules, placeholder },
    defaultFormItemLayout
  ) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    if (!data.selectOptions) {
      throw new Error(`请提供${data.name}字段配置的selectOptions字段`);
    }
    const SelectOptions = this.getSelectOptions(data);
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(
          <Cascader
            {...other}
            options={SelectOptions}
            placeholder={placeholder}
          />
        )}
      </Form.Item>
    );
  };

  /**
   * 构建input类型输入框
   * @param data
   * @param rules
   * @param placeholder
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateInput = (data, { rules, placeholder }, defaultFormItemLayout) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(<Input {...other} placeholder={placeholder} />)}
      </Form.Item>
    );
  };

  /**
   * 构建TextArea类型输入框
   * @param data
   * @param rules
   * @param placeholder
   * @param defaultFormItemLayout
   * @returns {*}
   */
  generateTextArea = (data, { rules, placeholder }, defaultFormItemLayout) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const other = data.otherParams || {};
    return (
      <Form.Item
        key={data.name}
        label={data.title}
        extra={data.extra}
        {...defaultFormItemLayout}
      >
        {getFieldDecorator(data.name, {
          rules,
          initialValue: data.defaultValue,
        })(<Input.TextArea {...other} placeholder={placeholder} />)}
      </Form.Item>
    );
  };

  /**
   * 构建表单规则和Placeholder
   * @param data
   * @returns {{rules: Array, placeholder: (*|string)}}
   */
  createRulesAndPlaceholder(data) {
    const { type, placeholder, title, rule } = data;
    const prefix = /(select|switch|treeSelect|uploadImg|uploadFile|[a-z]*Picker)/i.test(
      type
    )
      ? "请选择"
      : "请输入";
    let placeholderString = "";
    if (data.placeholder) {
      placeholderString = placeholder;
    } else {
      placeholderString = prefix + title;
    }
    const rules = [];
    if (prefix === "请输入") {
      rules.push({
        pattern: /^(?!(\s+$))/,
        message: "不能全部为空格",
      });
    }
    if (rule) {
      if (rule.required) {
        rules.push({
          required: true,
          message: prefix + title,
        });
      }
      if (rule.pattern) {
        if (
          isObject(rule.pattern) &&
          rule.pattern.message &&
          rule.pattern.reg
        ) {
          rules.push({
            pattern: rule.pattern.reg,
            message: rule.pattern.message,
          });
        } else {
          rules.push({
            pattern: rule.pattern,
            message: `${prefix}正确的${title}`,
          });
        }
      }
      if (data.rule.validator) {
        rules.push(rule.validator.bind(this));
      }
    }
    return {
      rules,
      placeholder: placeholderString,
    };
  }

  componentDidMount() {
    const { type } = this.props;
    this.getRequestData();
    if (type === "edit") {
      this.requestDetailInfo();
    }
  }

  getDetailInfo = () => {
    const { detailInfo } = this.state;
    return detailInfo;
  };

  requestDetailInfo = async () => {
    const { detailData, detailDataFormat } = this.props;
    if (!detailData) {
      return;
    }
    if (isString(detailData)) {
      window.Get(detailData).then(({ data }) => {
        this.setState(
          {
            detailInfo: detailDataFormat(data),
          },
          this.initFormValue
        );
      });
    } else {
      this.setState(
        {
          detailInfo: detailDataFormat(detailData),
        },
        this.initFormValue
      );
    }
  };

  initFormValue = () => {
    const { detailInfo } = this.state;
    const { form } = this.props;
    const keys = Object.keys(FormInputKeys);
    const formValue = {};
    keys.forEach((z) => {
      formValue[z] = isNumber(detailInfo[z])
        ? `${detailInfo[z]}`
        : detailInfo[z];
    });
    form.setFieldsValue(formValue);
  };

  /**
   * 找到需要发请求的对象
   * @param items
   */
  getRequestItem = (items) => {
    const newRequestDataMap = {};
    if (!isArray(items)) {
      return newRequestDataMap;
    }
    items.forEach((item) => {
      if (isArray(item)) {
        item.forEach((z) => {
          if (
            isObject(z) &&
            z.selectOptions &&
            z.selectOptions instanceof Promise
          ) {
            newRequestDataMap[z.name] = z.selectOptions;
          }
        });
      }
      if (
        isObject(item) &&
        item.selectOptions &&
        item.selectOptions instanceof Promise
      ) {
        newRequestDataMap[item.name] = item.selectOptions;
      }
    });
    return newRequestDataMap;
  };

  /**
   * 获取需要请求对象的数据
   * @returns {Promise<void>}
   */
  getRequestData = async () => {
    let newRequestDataMap = {};
    const { filedItems } = this.props;
    newRequestDataMap = {
      ...newRequestDataMap,
      ...this.getRequestItem(filedItems),
    };
    const requestList = [];
    const keys = Object.keys(newRequestDataMap);
    keys.forEach((z) => {
      requestList.push(newRequestDataMap[z]);
    });
    Promise.all(requestList)
      .then((z) => {
        z.forEach((j, index) => {
          newRequestDataMap[keys[index]] = j;
        });
        return newRequestDataMap;
      })
      .then((m) => {
        this.setState({
          requestDataMap: m,
        });
      });
  };

  getSelectOptions = (data) => {
    const { requestDataMap } = this.state;
    if (requestDataMap[data.name]) {
      return requestDataMap[data.name];
    }
    if (data.selectOptions instanceof Promise) {
      return [];
    }
    return data.selectOptions;
  };

  /**
   * 设置字段的value 或者selectOptions, 用于表单联动, 修改下拉选项或者值
   * @param info
   */
  setFieldData = (info = {}) => {
    const {
      form: { setFieldsValue },
    } = this.props;
    const { requestDataMap } = this.state;
    const keys = Object.keys(info);
    const values = {};
    const newRequestDataMap = {};
    const requestList = [];
    const appendRequestDataMap = {};
    keys.forEach((z) => {
      const current = info[z];
      if ("value" in current) {
        values[z] = current.value;
      }
      if ("selectOptions" in current) {
        if (current.selectOptions instanceof Promise) {
          newRequestDataMap[z] = current.selectOptions;
          requestList.push(current.selectOptions);
        }
        if (isArray(current.selectOptions)) {
          appendRequestDataMap[z] = current.selectOptions;
        }
      }
    });
    const requestMapKeys = Object.keys(newRequestDataMap);
    if (requestMapKeys.length) {
      Promise.all(requestList).then((z) => {
        z.forEach((j, index) => {
          newRequestDataMap[requestMapKeys[index]] = j;
        });
        this.setState(
          {
            requestDataMap: { ...requestDataMap, ...newRequestDataMap },
          },
          () => {
            setFieldsValue(values);
          }
        );
      });
    } else {
      this.setState(
        {
          requestDataMap: { ...requestDataMap, ...newRequestDataMap },
        },
        () => {
          setFieldsValue(values);
        }
      );
    }
  };
}
CreateForm.propTypes = {
  type: PropTypes.oneOf(["edit", "add"]),
  filedItems: PropTypes.arrayOf(
    // 生成表单数据
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  formItemLayout: PropTypes.object, // 布局方式
  detailData: PropTypes.oneOfType([
    // 获取详情地址或者详情数据formItemLayout
    PropTypes.string,
    PropTypes.object,
  ]),
  detailDataFormat: PropTypes.func, // 获取详情后格式化数据
};
CreateForm.defaultProps = {
  filedItems: [],
  type: "add",
  detailDataFormat: (x) => x,
};

export default CreateForm;
