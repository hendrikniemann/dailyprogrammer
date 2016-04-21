import test from 'ava';
import challenge from '.';
import fs from 'fs';
import parse from 'csv-parse';
import R from 'ramda';

const parseConfig = { trim: true, columns: true };

// https://www.reddit.com/49aatn
test('Challenge #257 [Easy] In what year were most presidents alive?', t => {
  const solutions = [
    1822, 1823, 1824, 1825, 1826, 1831, 1833, 1834, 1835,
    1836, 1837, 1838, 1839, 1840, 1841, 1843, 1844, 1845,
  ];
  const data = fs.readFileSync('./presidents.csv').toString();
  const presidents = new Promise((res, rej) => parse(data, parseConfig, (err, rows) => {
    if (err) rej(err); else res(rows);
  })).catch(err => { throw err; });

  return presidents.then(rows => {
    const result = challenge(rows);

    t.true(R.contains(result, solutions));
  });
});
