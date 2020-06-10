"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = isArray;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.getFileObjectFromUrl = getFileObjectFromUrl;

/**
 * 检查数组
 * @param data
 * @returns {boolean}
 */
function isArray(data) {
  return Object.prototype.toString.call(data) === "[object Array]";
}
/**
 * 判读数字
 * @param data
 * @returns {boolean}
 */


function isNumber(data) {
  return Object.prototype.toString.call(data) === "[object Number]";
}
/**
 * 检查对象
 * @param data
 * @returns {boolean}
 */


function isObject(data) {
  return Object.prototype.toString.call(data) === "[object Object]";
}
/**
 * 检查字符串
 * @param data
 * @returns {boolean}
 */


function isString(data) {
  return Object.prototype.toString.call(data) === "[object String]";
}

function getFileObjectFromUrl(url) {
  console.log("getFileObjectFromUrl", url);

  if (!url) {
    return null;
  }

  var name = url.replace(/(.*\/)*([^.]+)/i, "$2").replace(/([#?].*)/, "");
  return {
    uid: uuid(),
    name: name,
    status: "done",
    url: url
  };
}