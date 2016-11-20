const path = require('path')
const fs = require('fs')

const entry = {}

const walk = (dir) => {
  dir = dir || '.'
  const directory = path.join(__dirname, '../src', dir)
  fs.readdirSync(directory)
  .forEach((file) => {
    const fullpath = path.join(directory, file)
    const stat = fs.statSync(fullpath)
    const extname = path.extname(fullpath)
    if (stat.isFile() && extname === '.we') {
      const name = path.join('../dist', path.basename(file, extname))
      entry[name] = fullpath + '?entry=true'
    } else if (stat.isDirectory() && file !== 'build' && file !== 'include') {
      const subdir = path.join(dir, file)
      walk(subdir)
    }
  })
}

walk()

module.exports = {
  entry: entry
}
