var fs = require('fs');

var lines =  fs.readFileSync('input.txt', 'utf8')
  .split('\n')
  .filter(x => x)
  .map(x => parseInt(x))

let total = 0
let prevItem = 0

lines.forEach(item => {
  if (prevItem != 0 && item > prevItem) {
    total = total + 1
  }
  prevItem = item
})

console.log(total)