// required dependencies
const fs = require('fs');
const path = require('path');
const { findNotebyId, createNote, validateNotes } = require('./noteFunctions');
const router = require('express').Router();

var getUid = require('get-uid');

// data
const  notesArr  = require('../../db/db.json');

//get route for all notes
router.get('/data', (req, res) => {
  let allNotes = fs.readFileSync(path.join(__dirname, "../../db/db.json"));
  allNotes = JSON.parse(allNotes)
  res.json(allNotes)
});

//get note by id
router.delete('/data/:id', (req, res) => {
  let id = req.params.id;
  let newArray = fs.readFileSync(path.join(__dirname, "../../db/db.json"));
  newArray = JSON.parse(newArray);
  console.log(newArray);
  let result = findNotebyId(id, newArray);
  res.json(result);
});

// new note
router.post('/data', (req, res) => {
  
  req.body.id = getUid();
  
  // if any data in req.body is incorrect, send 400 error back
  if (!validateNotes(req.body)) {
    res.status(400).send('400 bad request');
  } else {
    
    // add note to json file and notesArray in this function
    const note = createNote(req.body, notesArr);

    // res.json(req.body);
    res.json(note);
  }
});

module.exports = router;