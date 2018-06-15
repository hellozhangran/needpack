const fse = require('fs-extra')
const dir = require('./dir')
const Path = require('path')
module.exports = function(template) {
    // 初始化simple
    // 把 template/simple中的文件copy到当前目录下
    // 以当前目录名作为项目名称

    console.log("即将初始化项目：" + dir.proName + "，路径：" + dir.proDir);
    fse.copySync(Path.resolve(dir.libDir,'template', template), dir.proDir)
    console.log("项目初始化结束：Success ~")
};
