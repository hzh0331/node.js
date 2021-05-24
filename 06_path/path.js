const path = require('path')

console.log(path.sep)

console.log(path.join('/content/','subfolder', 'text.txt'))

console.log(path.basename(path.join('/content/','subfolder', 'text.txt')))

console.log(path.resolve(__dirname, '/content/','subfolder', 'text.txt'))