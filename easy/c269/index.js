import R from 'ramda';

// indent :: Number -> String -> String
export const indent = R.curry((num, str) => R.reduce(R.flip(R.concat), str, R.repeat('·', num)));

// startsWith :: String -> String -> Boolean
export const startsWith = R.curry((test, str) => str.startsWith(test));

// removeIndent :: String -> String
export const removeIndent = R.compose(R.join(''), R.dropWhile(R.test(/·|»/)), R.split(''));

// incIndent :: String -> Boolean
const incIndent = R.either(startsWith('FOR'), startsWith('IF'));

// decIndent :: String -> Boolean
const decIndent = R.either(startsWith('NEXT'), startsWith('ENDIF'));

// format :: (Number, [String]) -> String -> (Number, String)
export const format = ([level, old], line) => {
  const rawLine = removeIndent(line);
  if (incIndent(rawLine)) {
    return [level + 1, [...old, indent(level * 4, rawLine)]];
  }
  if (decIndent(rawLine)) {
    return [level - 1, [...old, indent((level - 1) * 4, rawLine)]];
  }
  return [level, [...old, indent(level * 4, rawLine)]];
};

// solve :: String -> String
export default R.pipe(R.split('\n'), R.drop(2), R.reduce(format, [0, []]), R.last, R.join('\n'));
