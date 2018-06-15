const Path = require('path')
const proDir = process.cwd()

let path = {
    proDir: proDir,
    proName: proDir.split('/').pop(),
    libDir: Path.resolve(__dirname, '..')
}

module.exports = path