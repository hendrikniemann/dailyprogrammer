import test from 'ava';
import challenge, { President } from '.';
import fs from 'fs';
import parse from 'csv-parse';

const parseConfig = { trim: true, columns: true };

// https://www.reddit.com/49aatn
test('Challenge #257 [Easy] In what year were most presidents alive?', t => {
  const data = fs.readFileSync('./presidents.csv').toString();
  const presidents = new Promise((res, rej) => parse(data, parseConfig, (err, rows) => {
    if (err) rej(err); else res(rows);
  })).catch(err => { throw err; });

  return presidents.then(rows => {
    console.log(rows[0]);
  });
});
