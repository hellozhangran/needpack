const program = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const version = require("../package.json").version;
const init = require('./init')

program.version(version, "-v, --version");

program
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
                        name: 'Simple',
                        value: 'simple'
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
                console.log(chalk.yellow('开始初始化，项目类型： '+ answers.template));
                init(answers.template)
            });
    });

program.parse(process.argv);

// 如果没输入任何参数则输出help
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
