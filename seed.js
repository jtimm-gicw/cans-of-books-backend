const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const Book= require('./book.js');

async function seedBooks() {
    console.log('Heyyyy!');
    await Book.create({
        title: 'Game of Thrones',
        description: 'A fantassy novel with dragons',
        status: 'audiobook available'
    });
    await Book.create({
        title: 'Great Expectations',
        description: 'A great character-driven story',
        status: 'ebook available'
    });
    await Book.create({
        title: 'The Growth Mindset',
        description: 'A book about growing',
        status: 'recommended'
    });
    console.log('Done seeding');
    mongoose.disconnect();
}

seedBooks();