'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const getBooks= require('./handlers.js');


const PORT = process.env.PORT || 3001;

const mongoose= require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', _ =>{
  console.log('You\'re connected');
});



app.get('/test', (request, response) => {

  response.send('test request received')

})
app.get('/books', getBooks);
app.get('*',(request, response)=> {
  response.status(404).send('Not found');
});



app.listen(PORT, () => console.log(`listening on ${PORT}`));
