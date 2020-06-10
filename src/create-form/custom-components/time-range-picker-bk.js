import React from "react";
import { TimePicker } from "antd";
import moment from "moment";

let hourArr = [];

export default class TimeRangePicker extends React.Component {
  constructor(props) {
    super(props);
    let startTime = null;
    let endTime = null;
    if (props.value) {
      if (props.value.length === 2) {
        startTime = moment(props.value[0], "HH:mm");
        endTime = moment(props.value[1], "HH:mm");
      }
    }
    const { disableHourArr, disableMinObj } = this.setDisableData();
    this.state = {
      startTime,
      endTime,
      disableHourArr,
      disableMinObj,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState, firstopen) {
    const { value } = nextProps;
    if ("value" in nextProps) {
      if (value) {
        if (value.length === 2) {
          if (prevState.startTime && !prevState.endTime) {
            return {
              endTime: null,
            };
          }
          if (!!value[0] && !!value[1]) {
            let [startTime, endTime] = value;
            startTime = moment(startTime, "HH:mm");
            endTime = moment(endTime, "HH:mm");
            console.log("getDerivedStateFromProps", startTime, endTime);
            return {
              startTime,
              endTime,
            };
          }
        }
      }
      if (value === undefined) {
        return {
          startTime: null,
          endTime: null,
        };
      }
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
    console.log(1111, val, index);
    const {
      other: { minuteStep },
    } = this.props;
    const { onChange } = this.props;
    let { startTime, endTime } = this.state;
    const { disableMinObj } = this.state;
    let value = val;
    if (value) {
      const objKey = parseInt(value.format("HH"), 10);
      const nowMinutes = parseInt(value.format("mm"), 10);
      if (disableMinObj[objKey]) {
        if (disableMinObj[objKey].includes(nowMinutes)) {
          value = this.autoSelectTime(objKey, disableMinObj);
        }
      }
    }

    if (index === "first") {
      this.setState({ startTime: value, endTime: null });
      startTime = value;
      endTime = null;
    }

    if (index === "last") {
      if (!!startTime && !!val) {
        if (startTime.format("HH:mm") === val.format("HH:mm")) {
          val.add(minuteStep, "minutes");
        }
      }
      this.setState({ endTime: value });
      endTime = value;
    }
    if (startTime && endTime) {
      console.log("1213", [startTime, endTime]);
      onChange([startTime, endTime]);
    } else {
      onChange(null);
    }
  };

  /**
   * 自动选择可以选择的时间
   * @param objKey  当前选中的小时
   * @param disableMinObj  禁止选中的分钟对象
   * @returns {*}
   */
  autoSelectTime = (objKey, disableMinObj) => {
    let {
      other: { minuteStep, hourStep },
    } = this.props;
    if (!minuteStep) {
      minuteStep = 1;
    }
    if (!hourStep) {
      hourStep = 1;
    }
    let hour = objKey;
    let min = 0;
    let iscontinute = true;
    do {
      iscontinute = disableMinObj[hour].includes(min);
      if (iscontinute) {
        min += minuteStep;
      }
      if (min > 59) {
        min = 0;
        hour = hourStep + hour;
      }
      if (hour > 23) {
        hour = 0;
      }
    } while (iscontinute);
    return moment(`${hour}:${min}`, "HH:mm");
  };

  // 起始时间 (小时) 选择限制
  disabledFirstHours = () => {
    const { disableHourArr } = this.state;
    return disableHourArr;
  };

  // 起始时间 (分钟) 选择限制
  disabledFirstMinutes = (selectedHour) => {
    const { disableMinObj } = this.state;
    const mergeArr = disableMinObj[selectedHour];
    return mergeArr;
  };

  // 结束时间 (小时) 选择限制
  disabledLastHours = () => {
    const { startTime, disableHourArr, disableMinObj } = this.state;
    const {
      other: { minuteStep },
    } = this.props;
    let {
      other: { hourStep },
    } = this.props;

    if (!hourStep) {
      hourStep = 1;
    }
    if (startTime) {
      let hours = parseInt(startTime.format("HH"), 10);
      const min = parseInt(startTime.format("m"), 10);
      hourArr = this.makeArrFunc(hourStep, 24);

      if (min === 60 - minuteStep) {
        hours += hourStep;
      }
      hourArr = hourArr.splice(0, hours / hourStep);
      hourArr = this.addHourArrFunc(hourArr, disableHourArr, startTime, hours);
      // console.log(hourArr);
      if (disableMinObj[hours]) {
        const nowObjArr = disableMinObj[hours].concat();
        if (!nowObjArr.includes(min)) {
          nowObjArr.push(min);
        }
        if (nowObjArr.length === 60 / minuteStep) {
          hourArr.push(hours);
        }
      }
      return hourArr;
    }
    return disableHourArr;
  };

  // 结束时间 (分钟) 选择限制
  disabledLastMinutes = (selectedHour) => {
    let {
      other: { minuteStep },
    } = this.props;
    const { startTime, disableMinObj } = this.state;
    const mergeArr = disableMinObj[selectedHour];

    if (!minuteStep) {
      minuteStep = 1;
    }
    let minArr = this.makeArrFunc(minuteStep, 60);
    if (startTime) {
      const hours = parseInt(startTime.format("HH"), 10);
      const min = parseInt(startTime.format("m"), 10);
      // console.log(hourArr.includes(selectedHour));
      if (hourArr.includes(selectedHour) || hours > selectedHour) {
        return minArr;
      }
      if (hours === selectedHour) {
        minArr = minArr.splice(0, min / minuteStep + 1);
        if (mergeArr) {
          minArr = this.mergeArrFunc(minArr, mergeArr);
        }
        return minArr;
      }
    }
    return mergeArr;
  };

  /**
   * 禁止 跨越已禁止的时间 去选择后边的时间
   * @param nowHourArr  前端选择时禁用的小时数组
   * @param disableHourArr  后端传入禁止的小时数组
   * @param startTime  开始时间
   * @param hours  当前小时
   * @returns {*}
   */
  addHourArrFunc = (nowHourArr, disableHourArr, startTime, hours) => {
    let {
      other: { minuteStep, hourStep },
    } = this.props;
    const { keys } = Object;
    const newHourArr = this.mergeArrFunc(nowHourArr, disableHourArr);
    const { disableMinObj } = this.state;
    if (!minuteStep) {
      minuteStep = 1;
    }
    if (!hourStep) {
      hourStep = 1;
    }
    const halfArr = [];
    for (const key of keys(disableMinObj)) {
      if (disableMinObj[key].length !== 60 / minuteStep) {
        halfArr.push(parseInt(key, 10));
      }
    }

    if (startTime) {
      const myhours = hours;
      let maxTime;
      for (let i = 0; i < halfArr.length; i += 1) {
        if (halfArr[i] >= myhours) {
          newHourArr.push(halfArr[i] + 1);
          newHourArr.sort((a, b) => a - b);
          break;
        }
      }

      if (disableMinObj[myhours]) {
        if (disableMinObj[myhours].length === 60 / minuteStep) {
          newHourArr.push(myhours);
          newHourArr.sort((a, b) => a - b);
        }
      }
      for (let i = 0; i < 24; i += 1) {
        if (newHourArr[i] === myhours - 1) {
          maxTime = newHourArr[i + 1];
          break;
        }
      }

      for (let i = maxTime + 1; i < 24; i += 1) {
        if (!newHourArr.includes(i)) {
          newHourArr.push(i);
        }
      }
    }
    return newHourArr.sort((a, b) => a - b);
  };

  /**
   * 生成数组函数
   * @param Step  步长：minuteStep或者hourStep
   * @param length  小时输入24，分钟或描述输入60
   * @returns {*}
   */
  makeArrFunc = (Step = 1, length = 24) => {
    const arr = [];
    let i = 0;
    while (i < length) {
      arr.push(i);
      i += Step;
    }
    return arr;
  };

  /**
   * 获取后端数据 生成 禁止小时的数组 和 禁止分钟的对象
   */
  setDisableData = () => {
    const {
      other: { disableTime },
    } = this.props;
    const disableHourArr = [];
    const disableMinObj = {};
    if (disableTime) {
      let {
        other: { hourStep, minuteStep },
      } = this.props;
      if (!hourStep) {
        hourStep = 1;
      }
      if (!minuteStep) {
        minuteStep = 1;
      }

      for (const val of disableTime) {
        let [startHour, startMin] = val.disableStart.split(":");
        let [endHour, endMin] = val.disableEnd.split(":");
        startHour = parseInt(startHour, 10);
        startMin = parseInt(startMin, 10);
        endHour = parseInt(endHour, 10);
        endMin = parseInt(endMin, 10);
        for (let i = startHour; i <= endHour; i += hourStep) {
          Object.assign(disableMinObj, { [i]: [] });
          if (i === startHour && startMin > 0) {
            for (let thisMin = 0; thisMin < 60; thisMin += minuteStep) {
              if (thisMin >= startMin) {
                disableMinObj[i].push(thisMin);
              }
            }
          } else if (i === endHour && endMin < 60 - minuteStep) {
            for (let thisMin = 0; thisMin <= endMin; thisMin += minuteStep) {
              if (thisMin <= endMin) {
                disableMinObj[i].push(thisMin);
              }
            }
          } else {
            for (let thisMin = 0; thisMin < 60; thisMin += minuteStep) {
              disableMinObj[i].push(thisMin);
            }
            disableHourArr.push(i);
          }
        }
      }
    }
    return { disableHourArr, disableMinObj };
  };

  // 合并数组排序函数
  mergeArrFunc = (targetArr, mergeArr) => {
    if (mergeArr.length) {
      for (const val of mergeArr) {
        if (!targetArr.includes(val)) {
          targetArr.push(val);
        }
      }
    }
    return targetArr.sort((a, b) => a - b);
  };

  render() {
    const { placeholder, other } = this.props;
    const { startTime, endTime } = this.state;
    console.log("render", startTime, endTime);
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
          disabledHours={this.disabledFirstHours}
          disabledMinutes={this.disabledFirstMinutes}
          {...other}
        />
        <span className="picker-text">至</span>
        <TimePicker
          format="HH:mm"
          value={endTime}
          onChange={(i) => this.handleChange(i, "last")}
          placeholder={endPlaceholder}
          disabledHours={this.disabledLastHours}
          disabledMinutes={this.disabledLastMinutes}
          {...other}
        />
      </div>
    );
  }
}
