/* eslint no-var: 0, prefer-template: 0 */
var fs = require('fs');
var path = require('path');

var difficulty = process.argv[2];
var number = process.argv[3];

var difficulties = ['e', 'i', 'h', 'easy', 'intermediate', 'hard'];
var diffIndex = difficulties.indexOf(difficulty);
var BASE_PATH;

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

if (diffIndex < 0) {
  console.error('First argument must be one of: ', difficulties.join(', '));
  process.exit(1);
} else if (diffIndex < 3) {
  difficulty = difficulties[diffIndex + 3];
}

if (isNaN(parseInt(number, 10))) {
  console.error('Second argument must be a valid number!');
  process.exit(1);
}

BASE_PATH = path.join(__dirname, difficulty, 'c' + number);

if (fs.existsSync(BASE_PATH)) {
  console.error('This challenge seems to exist already');
  process.exit(1);
}

fs.mkdirSync(BASE_PATH);
fs.writeFileSync(path.join(BASE_PATH, 'index.js'), 'import R from \'ramda\';\n');
fs.writeFileSync(path.join(BASE_PATH, 'test.js'), 'import test from \'ava\';\n');
fs.writeFileSync(
  path.join(BASE_PATH, 'spec.js'),
  'import test from \'ava\';\n\nimport challenge from \'.\';\n\n// https://www.reddit.com/' +
    'test(\'Challenge #' + number + ' [' +
    capitalise(difficulty) + ']\', t => {\n\n});\n'
);
