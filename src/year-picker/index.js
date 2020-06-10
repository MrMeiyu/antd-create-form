import React, { PureComponent } from "react";
import { DatePicker } from "antd";

export default class YearPicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showYear: false,
      year: props.value || null,
    };
  }

  render() {
    const { year, showYear } = this.state;
    const { width, otherParams, placeholder } = this.props;
    return (
      <DatePicker
        {...otherParams}
        placeholder={placeholder}
        format="YYYY"
        mode="year"
        value={year}
        open={showYear}
        onPanelChange={this.changeYear}
        onFocus={() => {
          if (!showYear) {
            this.setState({
              showYear: true,
            });
          }
        }}
        style={{ width }}
      />
    );
  }

  changeValue = (e) => {
    const { onChange } = this.props;
    this.setState({
      year: e,
    });
    onChange(e);
  };

  // 选择年份
  changeYear = (e) => {
    const { onChange } = this.props;
    this.setState({
      year: e,
      showYear: false,
    });
    onChange(e);
  };

  static getDerivedStateFromProps(nextProps) {
    if ("value" in nextProps) {
      return {
        year: nextProps.value,
      };
    }
    return null;
  }
}
