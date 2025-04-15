'use strict'

// Build a Mongoose 'Book' schema with valid keys for `title`, `description`, and `status`. 
const mongoose= require('mongoose');
const booksSchema= new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String,enum: ['recommended','ebook available', 'audiobook available']},
});

const bookModel= mongoose.model('book', booksSchema);

module.exports= bookModel;