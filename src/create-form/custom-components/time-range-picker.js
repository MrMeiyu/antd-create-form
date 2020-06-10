import React from "react";
import { TimePicker } from "antd";
import moment from "moment";

export default class TimeRangePicker extends React.Component {
  constructor(props) {
    super(props);
    let startTime = null;
    let endTime = null;
    if (props.value) {
      const now = props.value[0]
        ? moment(`${props.value[0].format("YYYY-MM-DD HH:mm")}:00`)
        : null;
      if (props.value.length === 2) {
        startTime = now;
        endTime = props.value[1]
          ? moment(
              `${now.format(
                `${now.format("YYYY-MM-DD")} ${props.value[1].format(
                  "HH:mm"
                )}:00`
              )}`
            )
          : null;
      }
    }
    this.state = {
      startTime,
      endTime,
    };
  }

  static formatStartAndEndTime(arr = []) {
    let startTime = null;
    let endTime = null;
    if (arr.length === 2) {
      const now = arr[0]
        ? moment(`${arr[0].format("YYYY-MM-DD HH:mm")}:00`)
        : null;
      startTime = now;
      endTime =
        arr[1] && arr[0]
          ? moment(
              `${now.format(
                `${now.format("YYYY-MM-DD")} ${arr[1].format("HH:mm")}:00`
              )}`
            )
          : null;
    }
    return {
      startTime,
      endTime,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ("value" in nextProps) {
      return TimeRangePicker.formatStartAndEndTime(nextProps.value);
    }
    return null;
  }

  /**
   * 改变组件值 oncahge
   * @param val    改变的值
   * @param index  改变值的组件的标识
   * @returns {*}
   */
  handleChange = (val, index) => {
    const { onChange } = this.props;
    const { startTime, endTime } = this.state;
    const newStartTime = index === "first" ? val : startTime;
    const newEndTime = index !== "first" ? val : endTime;
    this.setState(
      {
        startTime: newStartTime && newStartTime.set("second", 0),
        endTime: newEndTime && newEndTime.set("second", 0),
      },
      () => {
        onChange && onChange([newStartTime, newEndTime]);
      }
    );
  };

  render() {
    const { placeholder, other } = this.props;
    const { startTime, endTime } = this.state;
    let startPlaceholder;
    let endPlaceholder;
    if (typeof placeholder === "string") {
      startPlaceholder = placeholder;
      endPlaceholder = placeholder;
    }
    if (typeof placeholder === "object") {
      [startPlaceholder, endPlaceholder] = placeholder;
    }
    return (
      <div className="time-rangepicker-box">
        <TimePicker
          format="HH:mm"
          value={startTime}
          onChange={(i) => this.handleChange(i, "first")}
          placeholder={startPlaceholder}
          // disabledHours={this.disabledFirstHours}
          {...other}
        />
        <span className="picker-text">至</span>
        <TimePicker
          format="HH:mm"
          value={endTime}
          onChange={(i) => this.handleChange(i, "last")}
          placeholder={endPlaceholder}
          {...other}
        />
      </div>
    );
  }
}
