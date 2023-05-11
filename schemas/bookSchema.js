const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
	title: String,
	description: String,
	status: String,
});

module.exports = bookSchema;
