// Iterative approach made during pair programming with good friend
// Transpose usually is a standard operation in functional languages
// and libraries (Haskell, Scala, Ramda.js, you name it...)
export default function solve(input) {
  const output = [];
  for (let i = 0; i < input[0].length; ++i) {
    output.push([]);
  }
  for (let i = 0; i < input.length; ++i) {
    for (let k = 0; k < input[i].length; ++k) {
      output[k][i] = input[i][k];
    }
  }
  return output;
}
