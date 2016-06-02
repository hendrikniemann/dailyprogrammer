import test from 'ava';

import { indent, startsWith, removeIndent, format } from '.';

test('indent', t => {
  t.true(indent(0, 'test') === 'test');
  t.true(indent(1, 'test') === '·test');
  t.true(indent(5, 'test') === '·····test');
});

test('startsWith', t => {
  t.true(startsWith('IF', 'IF 1 == 2'));
  t.false(startsWith('IF', 'ENDIF 1 == 2'));
});

test('removeIndent', t => {
  t.true(removeIndent('»»»»·NEXT') === 'NEXT');
});

test('format', t => {
  t.deepEqual(format([1, []], '»»»»·NEXT'), [0, ['NEXT']]);
  t.deepEqual(format([1, []], '·······IF'), [2, ['····IF']]);
  t.deepEqual(format([1, []], '·······PRINT'), [1, ['····PRINT']]);
});
