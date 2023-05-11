const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require('./models/bookModel');

async function seed() {
	await Book.create({
		name: 'Watership Down',
		description: 'Written by Richard Adams, a lovely story about cute bunnies.',
		status: 'Read',
	});

	console.log('Book Created');

	mongoose.disconnect();
}

seed();
