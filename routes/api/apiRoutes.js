// required dependencies
const fs = require('fs');
const path = require('path');
const { findNotebyId, createNote, validateNotes } = require('./noteFunctions');
const router = require('express').Router();

