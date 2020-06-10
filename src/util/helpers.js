/**
 * 检查数组
 * @param data
 * @returns {boolean}
 */
export function isArray(data) {
  return Object.prototype.toString.call(data) === "[object Array]";
}
/**
 * 判读数字
 * @param data
 * @returns {boolean}
 */
export function isNumber(data) {
  return Object.prototype.toString.call(data) === "[object Number]";
}
/**
 * 检查对象
 * @param data
 * @returns {boolean}
 */
export function isObject(data) {
  return Object.prototype.toString.call(data) === "[object Object]";
}
/**
 * 检查字符串
 * @param data
 * @returns {boolean}
 */
export function isString(data) {
  return Object.prototype.toString.call(data) === "[object String]";
}

export function getFileObjectFromUrl(url) {
  console.log("getFileObjectFromUrl", url);
  if (!url) {
    return null;
  }
  const name = url.replace(/(.*\/)*([^.]+)/i, "$2").replace(/([#?].*)/, "");
  return {
    uid: uuid(),
    name,
    status: "done",
    url,
  };
}
