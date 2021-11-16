// fs and path dependencies 
const fs = require('fs');
const path = require('path');

function findNotebyId(id, notesArr) {
    let newNoteArr = notesArr;
    let deleteNote = id;
    // remove deleted note from array
    newNoteArr = newNoteArr.filter(notes => {
        return notes.id != deleteNote;
    })

    // rewrite new array
fs.writeFileSync(path.join(__dirname, '../../db/db.json')),
JSON.stringify(newNoteArr, null, 2);
return newNoteArr;
    
};



function createNote(body, notesArr) {
    let note = body;
    let allNotes = notesArr;
    allNotes.push(note);

    // write/update to db.json file
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notesArr, null, 2)
    );

    return notesArr;
};

function validateNotes(note) {
    if (!note.title) {
        return false;
      }
      if (!note.text) {
        return false;
      }
      if (!note.id) {
        return false;
      }
      return true;
    

}

module.exports = {
    findNotebyId,
    createNote,
    validateNotes
};