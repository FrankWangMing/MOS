/*
 * @Descripttion:
 * @version:
 * @Author: WangMing
 * @Date: 2021-08-04 16:20:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-05 17:30:17
 */
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
/**
 * 遍历指定目录下的所有文件
 * @param {*} dir
 */
export const getAllFile = function (d) {
  // const dir = path.resolve(d);
  const dir = d;
  const result = [];
  function traverse(dir) {
    fs.readdirSync(dir).forEach((file) => {
      const pathname = path.join(dir, file);
      if (fs.statSync(pathname).isDirectory()) {
        traverse(pathname);
      } else {
        const item = pathname.split('\\');
        item.map((value, index) => {
          const obj = { title: value, children: [] };
          findPath(obj, index, result, item);
        });
      }
    });
  }
  traverse(dir);
  return result;
};

function findPath(obj, index, result, item) {
  if (result.length == 0) {
    result.push(obj);
    return;
  }
  let arrr = result;
  for (let i = 0; i < index; i++) {
    arrr = arrr.filter((_item) => _item.title == item[i])[0].children;
  }
  arrr.filter((_item) => _item.title == obj.title).length == 0 &&
    arrr.push(obj);
}
