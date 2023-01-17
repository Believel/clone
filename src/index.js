import { type } from "./type.js";


Array.from('abc') // ['a', 'b', 'c']

export function clone(source) {
    const t = type(source);
    // 如果是基本数据类型，直接返回原数据
    if (t !== "object" && t !== "array") {
        return source;
    }

    let target;
    // 如果是对象
    if (t === "object") {
        target = {};
        for (let i in source) {
            if (source.hasOwnProperty(i)) {
                target[i] = clone(source[i]); // 注意这里
            }
        }
    } else {
    // 如果是数组
        target = [];
        for (let i = 0; i < source.length; i++) {
            target[i] = clone(source[i]); // 注意这里
        }
    }

    return target;
}
