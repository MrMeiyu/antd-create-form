# 基于antd的form二次封装

| 参数 | 值 | 栗子 |
|  ----  | ----  | ----  |
| fieldItems  | 表单的参数 | [{type: "input", name: "phone", title: "手机号",rule: { required: true, }, }, ] |
| formItemLayout | 表单的样式 | { labelCol: { span: 7, }, wrapperCol: { span: 16, }, } |
| detailDataFormat | 格式化表单里面的值 | (x) => x |
| detailData | 数据详情 | [] |
