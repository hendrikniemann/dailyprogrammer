import R from 'ramda';

export const endsWith = R.curry((end, num) => num % 10 === num);

export default () => false;
