import test from 'ava';

import challenge from '.';

// https://www.reddit.com/4ijtrt/
test('Challenge #266 [Easy] Basic Graph Statistics: Node Degrees', t => {
  const resEx = 'Node 1 has a degree of 2\nNode 2 has a degree of 1\nNode 3 has a degree of 1';
  t.true(challenge('3\n1 2\n1 3') === resEx);

  const inCh = `16\n1 2\n1 3\n2 3\n1 4\n3 4\n1 5\n2 5\n1 6\n2 6\n3 6\n3 7\n5 7\n6 7\n3 8\n4 8
6 8\n7 8\n2 9\n5 9\n6 9\n2 10\n9 10\n6 11\n7 11\n8 11\n9 11\n10 11\n1 12\n6 12\n7 12\n8 12\n11 12
6 13\n7 13\n9 13\n10 13\n11 13\n5 14\n8 14\n12 14\n13 14\n1 15\n2 15\n5 15\n9 15\n10 15\n11 15
12 15\n13 15\n1 16\n2 16\n5 16\n6 16\n11 16\n12 16\n13 16\n14 16\n15 16`;

  const resCh = `Node 1 has a degree of 8
Node 2 has a degree of 8
Node 3 has a degree of 6
Node 4 has a degree of 3
Node 5 has a degree of 7
Node 6 has a degree of 10
Node 7 has a degree of 7
Node 8 has a degree of 7
Node 9 has a degree of 7
Node 10 has a degree of 5
Node 11 has a degree of 9
Node 12 has a degree of 8
Node 13 has a degree of 8
Node 14 has a degree of 5
Node 15 has a degree of 9
Node 16 has a degree of 9`;

  t.true(challenge(inCh) === resCh);
});
