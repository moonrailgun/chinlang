import { chinese2var, chineseNum2Arabic } from '../src/utils';

describe('utils', () => {
  test('chinese2var', () => {
    expect(chinese2var('中文')).toBe('vffxk1z');
    expect(chinese2var('编程')).toBe('vp3qo3v');
  });

  describe('chineseNum2Arabic', () => {
    test.each([
      ['八', 8],
      ['十一', 11],
      ['一百二十三', 123],
      ['一千二百零三', 1203],
      ['一万一千一百零一', 11101],
      ['十万零三千六百零九', 103609],
      ['一百二十三万四千五百六十七', 1234567],
      ['一千一百二十三万四千五百六十七', 11234567],
      ['一亿一千一百二十三万四千五百六十七', 111234567],
      ['一百零二亿五千零一万零一千零三十八', 10250011038],
    ])('%s => %s', (chinese, arabic) => {
      expect(chineseNum2Arabic(chinese)).toBe(arabic);
    });
  });
});
