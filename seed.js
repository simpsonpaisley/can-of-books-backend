const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require('./models/bookModel');

async function seed() {
	await Book.create({
		title: 'Watership Down',
		description: 'Written by Richard Adams, a lovely story about cute bunnies.',
		status: 'Read',
	});

	await Book.create({
		title: 'House of Cards',
		description:
			'The bestselling political thriller that introduced the scheming Francis Urguhart - the most memorable politician of the last decade.',
		status: 'Reading',
	});

	await Book.create({
		title: 'Mrs Pepperpot Stories',
		description:
			'Book about an old lady who shrinks to the size of a pepperpot.',
		status: 'Read',
	});

	console.log('Book Created');

	mongoose.disconnect();
}

seed();
