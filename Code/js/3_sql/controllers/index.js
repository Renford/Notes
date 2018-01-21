const lodash = require('lodash')
const fs = require('fs')
const path = require('path')

// 映射 d 文件夹下的文件为模块
const mapDir = d => {
    const tree = {}

    // 分组规则
    const mapper = p => fs.statSync(path.join(d, p)).isDirectory()

    // 分为文件夹和文件俩数组
    const [dirs, files] = lodash.partition(fs.readdirSync(d), mapper)

    // 将.js的文件映射到tree
    files.forEach(file => {
        if (path.extname(file) === '.js') {
            tree[path.basename(file, '.js')] = require(path.join(d, file))
        }
    })

    // 递归映射文件夹
    dirs.forEach(dir => {
        tree[dir] = mapDir(path.join(d, dir))
    })

    console.log('controller tree=========', tree);

    return tree
}

// 导出当前目录结构tree
module.exports = mapDir(path.join(__dirname))
