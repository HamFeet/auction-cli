import { Command } from 'commander';
import inquirer from 'inquirer';
const program = new Command();

import {
    addItem,
    findItem
} from './index.js';

// Item questions
const questions = [
    {
        type: 'input',
        name: 'item',
        message: 'Name of the item'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of the item'
    },
    {
        type: 'input',
        name: 'startPrice',
        message: 'Starting price of the item'
    },
    {
        type: 'input',
        name: 'reservePrice',
        message: 'Reserve price of the item'
    }
]

program
    .version('1.0.0')
    .description('Auction Management System')

// program
//     .command('add <item> <description> <startPrice> <reservePrice>')
//     .alias('a')
//     .description('Add a item')
//     .action((item, description, startPrice, reservePrice) => {
//         addItem({item, description, startPrice, reservePrice});
//     });
program
    .command('add')
    .alias('a')
    .description('Add a item')
    .action(() => {
        inquirer.prompt(questions).then(answers => addItem(answers))
    })

program
    .command('find <item>')
    .alias('f')
    .description('Find a item')
    .action(item => findItem(item));


program.parse(process.argv);