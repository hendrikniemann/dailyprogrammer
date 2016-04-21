import R from 'ramda';
import L from 'lodash/fp';

const currYear = (new Date).getFullYear();

// matchYear :: String -> String
export const matchYear = str => (str.match(/[12][0-9]{3}$/) || [null])[0];

// orElse :: a -> (a | Null -> a)
export const orElse = val => R.when(R.isNil, R.always(val));

// getYearFromDate :: String -> Number
export const getYearFromDate = R.pipe(matchYear, orElse(currYear), L.toInteger);

// toLifespan :: President -> (Number, Number)
export const toLifespan = president => [
  getYearFromDate(president['BIRTH DATE']),
  getYearFromDate(president['DEATH DATE']),
];

// isInSpan :: (Number, Number) -> Number -> Boolean
export const isInSpan = R.curry((span, year) => L.inRange(span[0], span[1] + 1, year));

// solve :: [President] -> Number
const solve = presidents => {
  const spans = R.map(toLifespan, presidents);
  const minYear = L.min(R.map(R.head, spans));
  const years = R.range(minYear, currYear + 1);

  // living :: Number -> Number
  const living = year => R.reduce(R.ifElse(
    (_, span) => isInSpan(span, year),
    R.inc,
    R.identity
  ), 0, spans);

  return L.maxBy(R.prop('living'), R.map(R.applySpec({ year: R.identity, living }), years)).year;
};

export default solve;
