const path = require('1_node/06_path/path')

console.log(path.sep)

console.log(path.join('/content/','subfolder', 'text.txt'))

console.log(path.basename(path.join('/content/','subfolder', 'text.txt')))

console.log(path.resolve(__dirname, '/content/','subfolder', 'text.txt'))