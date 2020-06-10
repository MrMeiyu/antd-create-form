import Cookies from "js-cookie";
import React, { PureComponent } from "react";
import isEqual from "loadsh/isEqual";
import { Button, Upload } from "antd";
import { getFileObjectFromUrl } from "../util/helpers";

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fileList: props.value || [],
      oldValue: props.value || [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ("value" in nextProps && !isEqual(nextProps.value, prevState.oldValue)) {
      return {
        fileList: nextProps.value || [],
        oldValue: nextProps.value || [],
      };
    }
    return null;
  }

  render() {
    const { fileList } = this.state;
    const { otherParams } = this.props;
    let { maxNumber } = otherParams || {};
    if (maxNumber == null) {
      maxNumber = 100;
    }
    const uploadButton = (
      <Button type="primary" style={{ height: ".4rem" }}>
        点击上传
      </Button>
    );
    return (
      <div className="upload-file">
        <Upload
          action="./file/obs/upload"
          fileList={fileList}
          onChange={this.handleChange}
          headers={{
            ACCESS_DEFAULT_TOKEN_HEADER_NAME: Cookies.get("SystemToken"),
          }}
          {...otherParams}
        >
          {fileList.length >= maxNumber
            ? null
            : otherParams?.uploadButton || uploadButton}
        </Upload>
      </div>
    );
  }

  triggerChange = (newList) => {
    const { onChange } = this.props;
    onChange && onChange(newList);
  };

  handleChange = (info) => {
    console.log("info", info);
    this.setState(
      {
        fileList: info.fileList,
      },
      () => {
        const newList = [];
        info.fileList.forEach((z) => {
          if (z.response) {
            if (z.response.httpStatus === 200) {
              const item = getFileObjectFromUrl(z.response.data.fileUrl);
              newList.push({ ...item, name: z.name, uid: z.uid || item.id });
            }
          } else {
            newList.push(z);
          }
        });
        this.triggerChange(newList);
      }
    );
  };
}

export default Index;
