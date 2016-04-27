import R from 'ramda';

// operate :: String -> Number -> Number -> Number
export const operate = (op, a, b) => {
  switch (op) {
    case '0': return a + b;
    case '1': return a - b;
    case '2': return a * b;
    default: throw new Error(`Unknown operator ${op}`);
  }
};

// calculate :: String -> Number -> Number -> Number
export const calculate = R.curry((nos, curr, next) => {
  if (nos === '') {
    return curr;
  }
  return calculate(R.tail(nos), operate(R.head(nos), curr, next), next + 1);
});

// readNos :: String -> Number
export const readNos = calculate(R.__, 0, 1);

// insert :: String -> Number -> [String] -> Undefined
const insert = (nos, result, into) => {
  if (result <= 50 && result > 0 && (!into[result] || nos.length < into[result].length)) {
    into[result] = nos; // eslint-disable-line no-param-reassign
  }
};

// variations :: Number -> [String] -> [String]
export const variations = R.curry((maxdepth, lookup, nos, value) => {
  insert(nos, value, lookup);
  if (nos.length >= maxdepth) {
    return;
  }

  R.forEach(
    next => variations(maxdepth, lookup, nos + next, operate(next, value, nos.length + 1)),
    ['0', '1', '2']
  );
});

// solve :: Number -> [String]
export default maxdepth => {
  const into = [];
  variations(maxdepth, into, '0', 1);
  variations(maxdepth, into, '1', -1);
  return into;
};
