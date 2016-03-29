import 'should';
import { getPos, getDist, transitions, addPair } from './index';

describe('getPos', () => {
  it('should get the position correctly', () => {
    getPos('1').should.eql([0, 0]);
    getPos('2').should.eql([0, 1]);
    getPos('3').should.eql([0, 2]);
    getPos('4').should.eql([1, 0]);
    getPos('5').should.eql([1, 1]);
    getPos('6').should.eql([1, 2]);
    getPos('7').should.eql([2, 0]);
    getPos('8').should.eql([2, 1]);
    getPos('9').should.eql([2, 2]);
    getPos('.').should.eql([3, 0]);
    getPos('0').should.eql([3, 1]);
  });
});

describe('getDist', () => {
  it('should calculate the distance correctly', () => {
    getDist([0, 1], [0, 0]).should.equal(1);
    getDist([0, 1], [0, 1]).should.equal(0);
    getDist([0, 1], [1, 1]).should.equal(1);
    getDist([2, 1], [1, 1]).should.equal(1);
    getDist([2, 2], [1, 1]).should.equal(Math.sqrt(2));
  });
});

describe('addPair', () => {
  it('should add a value as a pair', () => {
    addPair([[1, 2]], 3).should.eql([[1, 2], [2, 3]]);
    addPair([[1, 2], [2, 7]], 3).should.eql([[1, 2], [2, 7], [7, 3]]);
  });
});

describe('transitions', () => {
  it('should create transitions of an array', () => {
    transitions([1, 2, 3, 4]).should.eql([[1, 2], [2, 3], [3, 4]]);
    transitions(['a', 'c', 'd']).should.eql([['a', 'c'], ['c', 'd']]);
  });
});
