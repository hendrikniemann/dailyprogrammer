import 'should';

import { Tile } from './index';

describe('Tile', () => {
  it('should make Tiles', () => {
    const tile = Tile('TYPE', 12);

    tile.should.have.property('type', 'TYPE');
    tile.should.have.property('number', 12);
  });
});
