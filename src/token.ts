import { symbol } from './keyword';

export function preprocess(originText: string): string {
  let text = originText;
  Object.entries(symbol).map(
    ([alias, stand]) => (text = text.replace(RegExp(alias, 'g'), stand))
  );

  // TODO 汉字数字转阿拉伯数字

  return text;
}
