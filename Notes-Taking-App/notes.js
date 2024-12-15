const fs = require("fs");
const chalk = require("chalk");

const getNote = () => {
  return "Your notes";
};

const addNote = (title, body) => {
  const newNote = loadNotes();

  const duplicateNotes = newNote.find((note) => note.title === title);

  if (!duplicateNotes) {
    //cretaing object to store values
    newNote.push({
      title: title,
      body: body,
    });

    savedNotes(newNote);
  } else {
    console.log("note title taken");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed"));
  } else {
    console.log(chalk.red.inverse("No note found"));
  }

  savedNotes(notesToKeep);
};

const listNotes = () => {
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log("No note was found");
  }
};

const editNotes = (title, body) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    note.body = body;
  }

  savedNotes(notes);
};

const savedNotes = (notes) => {
  //changing the json file to whatever the input was
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  //try to run a block of code or catches a error
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
//you can mak ea export object to export multiple things
module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
  editNotes: editNotes,
};
