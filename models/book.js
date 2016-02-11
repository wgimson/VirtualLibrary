var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
	title: {
		type: String,
		required: true,
		default: ''
	},
	author: {
		type: String,
		required: true,
		default: ''
	},
	genre: {
		type: String,
		required: false,
		default: 'fiction'
	},
	publisher: {
		type: String,
		required: false,
		default: ''
	},
	length: {
		type: Number,
		required: false,
		default: 0
	}
}, { collection: 'books' });

module.exports = mongoose.model('Book', bookSchema);