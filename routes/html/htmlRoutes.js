// require router to view and send files with path help
const router = require('express').Router();
const path = require('path');

// get html route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// get notes routes
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//create html routes
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
module.exports = router;