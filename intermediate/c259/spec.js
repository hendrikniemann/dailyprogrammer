import 'should';

import challenge259 from './index';

describe('Challenge #259 [Intermediate] Mahjong Hands', () => {
  it('should solve the first sample input', () => {
    const input = `14
Circle,4\nCircle,5\nCircle,6\nBamboo,1\nBamboo,2\nBamboo,3\n\nharacter,2
Character,2\nCharacter,2\nCircle,1\nCircle,1\nBamboo,7\nBamboo,8\nBamboo,9`;

    challenge259(input).should.eql('Winning hand');
  });
});
