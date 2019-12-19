import { symbol } from './keyword';

export function preprocess(originText: string): string {
  let text = originText;
  Object.entries(symbol).map(
    ([alias, stand]) => (text = text.replace(RegExp(alias, 'g'), stand))
  );

  return text;
}

// TODO 汉字数字转数字
