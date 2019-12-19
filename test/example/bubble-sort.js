// 冒泡排序算法
function maopaopaixu(shuzu, changdu) {
  let linshibianliang;
  let jishuqi1;
  let jishuqi2;

  for (jishuqi1 = 0; jishuqi1 < changdu - 1; jishuqi1++) {
    for (jishuqi2 = 0; jishuqi2 < changdu - 1 - jishuqi1; jishuqi2++) {
      if (shuzu[jishuqi2] > shuzu[jishuqi2 + 1]) {
        linshibianliang = shuzu[jishuqi2];
        shuzu[jishuqi2] = shuzu[jishuqi2 + 1];
        shuzu[jishuqi2 + 1] = linshibianliang;
      }
    }
  }
}

let wuxushuzu = [1, 2, 4, 6, 3, 8, 3];
console.log(maopaopaixu(wuxushuzu, 7));
