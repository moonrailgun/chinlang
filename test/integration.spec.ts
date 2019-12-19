import fs from 'fs';
import path from 'path';
import { preprocess } from '../src/token';

const demoText = fs.readFileSync(
  path.resolve(__dirname, './example/bubble-sort.cl'),
  {
    encoding: 'utf-8',
  }
);

describe('integration', () => {
  test('preprocess', () => {
    const preprocessText = preprocess(demoText);
    console.log(preprocessText);
  });
});
