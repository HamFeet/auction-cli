const { Command } = require('commander');
const program = new Command();

const {
    addItem,
    findItem
} = require('./index');

program
    .version('1.0.0')
    .description('Auction Management System')

program
    .command('add <item> <description> <startPrice> <reservePrice>')
    .alias('a')
    .description('Add a item')
    .action((item, description, startPrice, reservePrice) => {
        addItem({item, description, startPrice, reservePrice});
    });

program
    .command('find <item>')
    .alias('f')
    .description('Find a item')
    .action(item => findItem(item));


program.parse(process.argv);