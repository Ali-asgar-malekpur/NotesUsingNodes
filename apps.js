import yargs from 'yargs';
import chalk from 'chalk';

const notes = require('./notes.js');

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  notes.addingNote(title, body);
  console.log(chalk.green("New node created!"))
} else if (command === "remove") {
  console.log("removing note");
  notes.removeNote(title);
} else if (command === "read") {
  console.log("reading note");
  notes.readNote(title);
} else if (command === "list") {
  console.log("Your Notes:");
  notes.list();
} else {
  console.log("Unknown command was used!");
}