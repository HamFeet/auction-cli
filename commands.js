import { Command } from 'commander';
import inquirer from 'inquirer';
const program = new Command();

import {
    addItem,
    findItem,
    updateItem,
    removeItem,
    listItems
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

//Add item
program
    .command('add')
    .alias('a')
    .description('Add a item')
    .action(() => {
        inquirer.prompt(questions).then(answers => addItem(answers))
    });

//Find item
program
    .command('find <item>')
    .alias('f')
    .description('Find a item')
    .action(item => findItem(item));

//Remove item
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a item')
    .action((_id) => removeItem(_id));

//Update Item
program
    .command('update <_id>')
    .alias('u')
    .description('Update a item')
    .action((_id) => {
        inquirer.prompt(questions).then(answers => updateItem({_id}, answers))
    });
    
//List items
program
    .command('list')
    .alias('l')
    .description('List all items')
    .action(() => listItems());

program.parse(process.argv);