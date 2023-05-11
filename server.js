'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
const Book = require('./models/bookModel');
const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.DATABASE_URL);
app.get('/test', (request, response) => {
	response.send('test request received');
});

app.get('/', (request, response) => {
	response.json('This is the root of the Can of Books Server');
});

app.get('/books', async function (request, response) {
	const books = await Book.find({});
	response.json(books);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
