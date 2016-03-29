import 'should';
import { transition } from './index';

const click = 'button_clicked';
const cycle = 'cycle_complete';

describe('transition', () => {
  it('should reduce states correctly', () => {
    transition('CLOSED', click).should.eql('OPENING');
    transition('CLOSING', click).should.eql('STOPPED_WHILE_CLOSING');
    transition('CLOSING', cycle).should.eql('CLOSED');
    transition('STOPPED_WHILE_CLOSING', click).should.eql('OPENING');
    transition('OPENING', click).should.eql('STOPPED_WHILE_OPENING');
    transition('OPENING', cycle).should.eql('OPEN');
    transition('OPEN', click).should.eql('CLOSING');
    transition('STOPPED_WHILE_CLOSING', click).should.eql('OPENING');
    transition('OPENING', cycle).should.eql('OPEN');
  });
});
