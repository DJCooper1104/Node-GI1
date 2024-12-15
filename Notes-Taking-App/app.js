const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");
// const message = getNotes()
// console.log(message);
// const greenmsg = chalk.red.blue.inverse('error!')
// console.log(greenmsg);

//customize yargs version
yargs.version("1.1.0");

//remove note, list, read, add
//create add command
yargs.command({
  command: "add", //setting up command name
  describe: "add a new note", //describes what command does
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string", //making sure a string value for title is always there + required
    },
    body: {
      describe:
        "this is the body for the add command. nexted inside add commands builder object",
      demandOption: true, //makes it required
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "removes notes",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    //argv parameter and arguments gives access to arguments in our handler
    notes.removeNote(argv.title);
  },
});
//creating a command for listing notes
yargs.command({
  command: "list",
  describe: "listing the notes",
  handler: function () {
    notes.listNotes();
  },
});

//creating a command to read notes
yargs.command({
  command: "read",
  describe: "reading the notes",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});
//looks for notes with certain title and updates the blody of that note based on users input
// cyan background on the chalk fetaure

yargs.command({
  command: "edit",
  builder: {
    title: {
      describe: "Edit",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Edit note",
      demandOption: true,
      type: "string",
    },
  },
  describe: "Edit Notes",
  handler: function () {
    notes.editNotes(argv.title, argv.body);
  },
});

yargs.parse(); //parses arguments with all configuration details provided
// console.log(yargs.argv) //version of process.argv that yargs has parsed //easier access.

// console.log(process.argv[2]) //argv is a array that contaons all arguments provide

//challenge add new option tp yargs for add command
// set up body option for add command (customize builder option)
// make body required and force it to be a string
// log body handler
// test
