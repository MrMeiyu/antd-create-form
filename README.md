# 基于antd的form二次封装

| 参数 | 值 | 栗子 |
|  ----  | ----  | ----  |
| fieldItems  | 表单的参数 | [{type: "input", name: "phone", title: "手机号",rule: { required: true, }, }, ] |
| formItemLayout | 表单的样式 | { labelCol: { span: 7, }, wrapperCol: { span: 16, }, } |
| detailDataFormat | 格式化表单里面的值 | (x) => x |
| detailData | 数据详情 | [] |

## 参考链接

- [Ant Design](https://3x.ant.design/docs/react/introduce-cn) `请注意这里用的antd的 3x 版本`

- [antd-create-form](https://www.npmjs.com/package/antd-create-form)

- [package.json](http://caibaojian.com/npm/files/package.json.html) `package.json 的说明文档`
