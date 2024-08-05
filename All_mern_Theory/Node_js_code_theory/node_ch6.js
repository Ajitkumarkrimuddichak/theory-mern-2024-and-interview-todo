//const chalk = require("chalk");
//console.log(chalk.red('Hello world!'));

const chalk = require('chalk');
const add = (a,b)=>{
    return a+b;
}
const color = add(10,30);
console.log(chalk.bgWhite(color));

console.log(chalk.bold.rgb(50, 100, 200)('Hello!'));
console.log(chalk.bold.rgb(10, 100, 200)`Hello!`);
console.log(chalk`{bold.rgb(10,100,200) Hello!}`);

console.log(chalk.hex('#DEADED').underline('Hello, world!'))
console.log(chalk.keyword('orange')('Some orange text'))
console.log(chalk.rgb(15, 100, 204).inverse('Hello!'))

console.log(chalk.bgHex('#DEADED').underline('Hello, world!'))
console.log(chalk.bgKeyword('orange')('Some orange text'))
console.log(chalk.bgRgb(15, 100, 204).inverse('Hello!'))
