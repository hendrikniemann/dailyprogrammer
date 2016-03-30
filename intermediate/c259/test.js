import 'should';

import { Tile, isPair, isSet, isSequence, isValid, groupSuits } from '.';

describe('Tile', () => {
  it('should make Tiles', () => {
    const tile = Tile('TYPE', 12);

    tile.should.have.property('suit', 'TYPE');
    tile.should.have.property('number', 12);
  });
});

describe('isPair', () => {
  it('should accept pairs', () => {
    isPair([1, 1]).should.be.ok();
    isPair([3, 3]).should.be.ok();
    isPair([5, 5]).should.be.ok();
    isPair([9, 9]).should.be.ok();
  });

  it('should reject nonpairs', () => {
    isPair([1, 9]).should.not.be.ok();
    isPair([4, 7]).should.not.be.ok();
    isPair([8, 9]).should.not.be.ok();
  });
});

describe('isSequence', () => {
  it('should accept sequences', () => {
    isSequence([1, 2, 3]).should.be.ok();
    isSequence([3, 4, 5]).should.be.ok();
    isSequence([5, 6, 7]).should.be.ok();
    isSequence([7, 8, 9]).should.be.ok();
  });

  it('should reject nonsequences', () => {
    isSequence([1, 3, 9]).should.not.be.ok();
    isSequence([4, 5, 7]).should.not.be.ok();
    isSequence([8, 9, 1]).should.not.be.ok();
  });
});

describe('isSet', () => {
  it('should accept sets', () => {
    isSet([1, 1, 1]).should.be.ok();
    isSet([3, 3, 3]).should.be.ok();
    isSet([5, 5, 5]).should.be.ok();
    isSet([9, 9, 9]).should.be.ok();
  });

  it('should reject nonsets', () => {
    isSet([1, 2, 3]).should.not.be.ok();
    isSet([4, 4, 7]).should.not.be.ok();
    isSet([1, 1, 4]).should.not.be.ok();
  });
});

describe('isValid', () => {
  it('should accept valid lists', () => {
    isValid([1, 1, 1, 3, 4, 5, 8, 8]).should.be.ok();
    isValid([1, 1, 1, 2, 3, 8, 8, 8]).should.be.ok();
    isValid([4, 5, 6, 1, 1]).should.be.ok();
    isValid([1, 2, 3, 7, 8, 9]).should.be.ok();
    isValid([2, 2, 2]).should.be.ok();
  });

  it('should reject invalid lists', () => {
    isValid([1, 3, 4, 5, 8, 8]).should.not.be.ok();
  });
});

describe('groupSuits', () => {
  it('should group tiles of the same suite in sorted lists', () => {
    const tl = [Tile('a', 1), Tile('c', 1), Tile('b', 2), Tile('b', 3), Tile('a', 1), Tile('a', 1)];

    const res = groupSuits(tl);
    res.should.containEql([1, 1, 1]);
    res.should.containEql([1]);
    res.should.containEql([2, 3]);
  });
});
