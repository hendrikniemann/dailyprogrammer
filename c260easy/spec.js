import 'should';
import challenge260 from './index';

const click = 'button_clicked';
const cycle = 'cycle_complete';

describe('Challenge #260 [EASY] Garage Door Opener', () => {
  const example = [click, cycle, click, click, click, click, click, cycle];
  const results = [
    'OPENING', 'OPEN', 'CLOSING', 'STOPPED_WHILE_CLOSING', 'OPENING',
    'STOPPED_WHILE_OPENING', 'CLOSING', 'CLOSED',
  ];

  it('should complete the example from reddit', () => {
    results.forEach((res, index) => {
      challenge260(example.slice(0, index + 1).join('\n')).should.equal(res);
    });
  });
});
