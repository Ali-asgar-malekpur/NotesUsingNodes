import chalk from "chalk";
import fs from 'fs';

var fetchNotes = () => { // const argv = yargs.argv;
  try {
    return JSON.parse(fs.readFileSync('notes.JSON')); 
  } catch (err) {
    return [];
  }
}

var addingNote = (title, body) => { 
  var notes = fetchNotes();

  var note = { title, body };

  var double = notes.filter((note) => note.title === title); 

  if(double.length === 0){
    notes.push(note); 
    fs.writeFileSync("notes.txt", JSON.stringify(notes));

    logNote(note);
  } else {
    console.log(chalk.red("Title already taken!"));
  }
}

var removeNote = (title) => {
  var notes = fetchNotes();
  if(double.length === 0){
    console.log(chalk.red("Note not found!"));
  }
  else{
  var filteredNotes = notes.filter((note) => note.title !== title);
  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
  }  
}

var readNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);

  logNote(filteredNotes[0]);
}

var list = () => {
  var notes = fetchNotes();

  notes.forEach((note) => logNote(note));
}

var logNote = (note) => {
  console.log(`${note.title}`);

}

module.exports = {addingNote, removeNote, readNote, list};