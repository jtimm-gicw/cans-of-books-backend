'use strict';
 
const Book = require('./book.js');

 const Handlers = {}; // This will hold our data

Handlers.getBooks= async(request, response, next) => {
  try {
    const books = await Book.find({});
    response.status(200).send(books);
 
    // ERROR HANDLING TESTING PURPOSES ONLY: This shoud cause an error that'll end up in the catch() below and then sent to the middleware in the server.js
    // let dataThatDoesntExist = require('./this-data-does-not-exist.js');
    // response.send(dataThatDoesntExist);
 
  } catch (error) {
    console.error(error);
 
    // next can be used to pass an error to express for the error middleware to handle
    next(error);
 
    // THIS is an anti-pattern. DO NOT handle errors inline, this is not the Express way
    // response.status(400).send('Could not find any books');
  }
}
 
Handlers.createBook= async(request, response, next) =>  {
  try {
    const books = await Book.creaete(request.body);// requesting the body of the json data to add new ones

    response.status(201).send(books);
 
    // ERROR HANDLING TESTING PURPOSES ONLY: This shoud cause an error that'll end up in the catch() below and then sent to the middleware in the server.js
    // let dataThatDoesntExist = require('./this-data-does-not-exist.js');
    // response.send(dataThatDoesntExist);
 
  } catch (error) {
    console.error(error);
 
    // next can be used to pass an error to express for the error middleware to handle
    next(error);
 
    // THIS is an anti-pattern. DO NOT handle errors inline, this is not the Express way
    // response.status(400).send('Could not find any books');
  }
}
 
Handlers.deleteBook= async(request, response, next)=>  {
  try {
    console.log('book id to be deleted:', request.params.id);
    await Book.findByIdAndDelete(request.params.id); // deletes specific data
    response.status(204).send(books);//No content
 
    // ERROR HANDLING TESTING PURPOSES ONLY: This shoud cause an error that'll end up in the catch() below and then sent to the middleware in the server.js
    // let dataThatDoesntExist = require('./this-data-does-not-exist.js');
    // response.send(dataThatDoesntExist);
 
  } catch (error) {
    console.error(error);
 
    // next can be used to pass an error to express for the error middleware to handle
    next(error);
 
    // THIS is an anti-pattern. DO NOT handle errors inline, this is not the Express way
    // response.status(400).send('Could not find any books');
  }
}
 
module.exports = Handlers;
 