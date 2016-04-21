import test from 'ava';
import { transition } from './index';

const click = 'button_clicked';
const cycle = 'cycle_complete';

test('transition', t => {
  t.true(transition('CLOSED', click) === 'OPENING');
  t.true(transition('CLOSING', click) === 'STOPPED_WHILE_CLOSING');
  t.true(transition('CLOSING', cycle) === 'CLOSED');
  t.true(transition('STOPPED_WHILE_CLOSING', click) === 'OPENING');
  t.true(transition('OPENING', click) === 'STOPPED_WHILE_OPENING');
  t.true(transition('OPENING', cycle) === 'OPEN');
  t.true(transition('OPEN', click) === 'CLOSING');
  t.true(transition('STOPPED_WHILE_CLOSING', click) === 'OPENING');
  t.true(transition('OPENING', cycle) === 'OPEN');
});
