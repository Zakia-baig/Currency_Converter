#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("\n\t Welcome To Currency Converter \n"));
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "KWD": 0.0011,
    "CAD": 1.3,
    "OMR": 0.0014,
    "GBP": 0.0028,
    "AUD": 1.65,
    "JYP": 113,
    "PKR": 280, // Pakistani currency(Rupee)
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.magenta.bold("Select the currency to from"),
        choices: ["USD", "EUR", "KWD", "CAD", "OMR", "GBP", "AUD", "JYP", "PKR"]
    }, {
        name: "to_currency",
        type: "list",
        message: chalk.magenta.bold("Select the currency to convert into"),
        choices: ["USD", "EUR", "KWD", "CAD", "OMR", "GBP", "AUD", "JYP", "PKR"]
    }, {
        name: "amount",
        type: "input",
        message: chalk.magenta.bold("Enter the amount to convert!"),
    }
]);
// perform currency conversion by using farmula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// farmula of conversion 
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// display the converted amount
console.log(chalk.yellowBright.bold(`Converted Amount= ${converted_amount}`));
