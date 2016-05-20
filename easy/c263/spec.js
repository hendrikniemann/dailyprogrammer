import test from 'ava';
import challenge from '.';

const cut = double => double.toString().substr(0, 11);

// https://www.reddit.com/4fc896/
test('Challenge #263 [Easy] Calculating Shannon Entropy of a String', t => {
  t.true(cut(challenge('122333444455555666666777777788888888')) == 2.794208683);
  t.true(cut(challenge('563881467447538846567288767728553786')) == 2.794208683);
  t.true(cut(challenge('https://www.reddit.com/r/dailyprogrammer')) == 4.056198332);
  t.true(cut(challenge('int main(int argc, char *argv[])')) == 3.866729296);
});
