export default {
  formItemLayout: {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 16,
    },
  },
  fieldItems: [
    {
      type: "input",
      name: "phone",
      title: "手机号",
      rule: {
        required: true,
      },
    },
  ],
};
