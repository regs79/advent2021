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
let aim = 0
let depth = 0

lines.forEach(item => {
  if (item.direction === 'forward') {
    horizontal = horizontal + item.value
    if (aim > 0) {
      const depthChange = item.value * aim
      depth = depth + depthChange
    }
  } else if (item.direction === 'up') {
    aim = aim - item.value
  } else {
    aim = aim + item.value
  }
})

console.log(horizontal * depth)