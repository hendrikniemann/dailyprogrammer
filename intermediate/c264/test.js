import test from 'ava';
import { route } from '.';

test('route', t => {
  const testRoute = route([1, 2, 3]);

  t.true(testRoute(4) === 2);
  t.true(testRoute(0) === 1);
});
