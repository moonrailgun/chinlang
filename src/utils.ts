import { nummap, numunit } from './keyword';

/**
 * 中文转字母
 * @param str 中文
 */
export function chinese2var(str: string): string {
  return (
    'v' +
    str
      .split('')
      .map((char) => char.charCodeAt(0))
      .map((c) => c.toString(36))
      .join('')
  );
}

/**
 * 中文数字转阿拉伯数字
 * @param str 中文
 */
export function chineseNum2Arabic(str: string): number {
  const nums = [];
  let unit = 1;

  for (const s of str.split('').reverse()) {
    if (Object.keys(nummap).includes(s)) {
      // 数字
      nums.push(nummap[s] * unit);
    } else {
      // 单位
      const val = numunit[s];
      if (val >= 10000 && val <= 100000000) {
        nums.push(val);
        unit = 1;
      } else {
        unit = val;
      }
    }
  }

  if (unit === 10) {
    nums.push(10);
  }

  let res = 0;
  let tmp = 0;

  for (const num of nums.reverse()) {
    if (num >= 10000 && num <= 100000000) {
      tmp *= num;
      res += tmp;
      tmp = 0;
    } else {
      tmp += num;
    }
  }

  res += tmp;
  return res;
}
