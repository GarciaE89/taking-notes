const express = require('express');

// lets heroku know which port to use
const PORT = process.env.PORT || 3001;

const app = express();

// route modules trying to organize by concerns
const apiRoutes = require('./routes/api/apiRoutes');
const htmlRoutes = require('./routes/html/htmlRoutes');

// middleware serves static content from public dir.
app.use(express.static('./public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//listener for api's
app.listen(PORT, () => {
  console.log(`API server listening on ${PORT}!`);
});
