var fs = require('fs');

var lines =  fs.readFileSync('input.txt', 'utf8')
  .split('\n')
  .filter(x => x)
  .map(x => parseInt(x))

let total = 0
let prevItem
let sum = 0

lines.forEach((item, i) => {
  const pos1 = i + 1;
  const pos2 = i + 2;
  sum = item + lines[pos1] + lines[pos2];
  if (prevItem && prevItem < sum) {
    total++
  }
  prevItem = sum
})

console.log(total)