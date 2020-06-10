import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import CreateForm from "./../../src/create-form/index";
import Config from "./config";

class App extends PureComponent {
  render() {
    return (
      <CreateForm
        formItemLayout={Config.formItemLayout}
        filedItems={Config.fieldItems}
        type={Config.isAdd ? "add" : "edit"}
        detailData={Config.detail}
        // detailDataFormat={detailDataFormat}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("example"));
