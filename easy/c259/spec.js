import 'should';
import challenge from './index';

describe('Challenge #259 [EASY] Clarence the Slow Typist', () => {
  it('should solve the example from the post', () => {
    challenge('219.45.143.143').should.eql('27.38cm');
  });
});
