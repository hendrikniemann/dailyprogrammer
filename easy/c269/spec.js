import test from 'ava';

import challenge from '.';

const input = `12
····
VAR I
·FOR I=1 TO 31
»»»»IF !(I MOD 3) THEN
··PRINT "FIZZ"
··»»ENDIF
»»»»····IF !(I MOD 5) THEN
»»»»··PRINT "BUZZ"
··»»»»»»ENDIF
»»»»IF (I MOD 3) && (I MOD 5) THEN
······PRINT "FIZZBUZZ"
··»»ENDIF
»»»»·NEXT`;

const output = `VAR I
FOR I=1 TO 31
····IF !(I MOD 3) THEN
········PRINT "FIZZ"
····ENDIF
····IF !(I MOD 5) THEN
········PRINT "BUZZ"
····ENDIF
····IF (I MOD 3) && (I MOD 5) THEN
········PRINT "FIZZBUZZ"
····ENDIF
NEXT`;

// https://www.reddit.com/4lpygb/
test('Challenge #269 [Easy] BASIC Formatting', t => {
  t.true(challenge(input) === output);
});
