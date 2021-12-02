var fs = require('fs');

var lines =  fs.readFileSync('input.txt', 'utf8')
  .split('\n')
  .filter(x => x)
  .map((commands) => {
    const [direction, value] = commands.split(' ')
    return {
      direction,
      value: parseInt(value)
    }
  })

let horizontal = 0
let depth = 0

lines.forEach(item => {
  if (item.direction === 'forward') {
    horizontal = horizontal + item.value
  } else if (item.direction === 'up') {
    depth = depth - item.value
  } else {
    depth = depth + item.value
  }
})

console.log(horizontal * depth)