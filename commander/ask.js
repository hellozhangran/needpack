const program = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const version = require("../package.json").version;

// commander的默认操作:
// -h 指令会自动以帮助文档的形式显示已经定义好的command和option
// -V 会显示版本号

function sexFunc(v) {
    return "性别是" + v;
}

program.version(version, "-v, --version");

program
    // 使用： exec run 或 exec run -n 'myname'
    // 参数带了<>, 可以不加参数-n，加了就必须给一个值
    .command("init")
    .alias("i") // 别名
    .description("初始化项目")
    .action(option => {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "template",
                    message: "项目类型",
                    choices: [{
                        name: 'Sample',
                        value: 'sample'
                    },{
                        name: "Vue",
                        value: "vue"
                    },{
                        name: "Typescript",
                        value: 'ts'
                    },{
                        name: "Rollup",
                        value: "rollup"
                    }]
                }
            ])
            .then(function(answers) {
                // chalk给console添加样式
                console.log(chalk.yellow('开始初始化，项目类型： '+ answers.template));
                require('./init').run(answers.run)
            });
    });

program.parse(process.argv);

// 指定定义的option可以在program上直接取到
if (program.age) {
    console.log("输入了名字：", program.age);
}

// 如果没输入任何参数则输出help
if (!process.argv.slice(2).length) {
    program.outputHelp();
}

// commander的详细解释见这里：
// https://www.kancloud.cn/outsider/clitool/313192
