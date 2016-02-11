var Book = require('../models/book');

exports.getAllBooks = function(req, res) {
	var query = Book.find();
	query.sort({ title: 1 })
		 .limit(12)
		 .exec(function(err, books) {
		 	if (err) {
				console.log(err.message);
				return;
			}
		 	console.log('Returning all books');
		 	res.json(books);
		 });
};

exports.getBookByTitle = function(req, res) {
	var bookTitle = req.params.title;
	Book.findOne({ title: bookTitle }, function(err, book) {
		if (err) {
			console.log(err.message);
			return;
		}
		console.log('Finding book entitled: ' + bookTitle);
		res.json(book);
	});
};

exports.getBooksByAuthor = function(req, res) {
	var authorName = req.params.author;
	Book.find({ author: authorName }, function(err, books) {
		if (err) {
			console.log(err.message);
			return;
		}
		console.log('Finding book by author: ' + authorName);
		res.json(books);
	});
};

exports.addBook = function(req, res) {
	var title = req.body.title,
		author = req.body.author,
		genre = req.body.genre,
		publisher = req.body.publisher,
		length = req.body.length;

	var newBook = new Book({ 
		title: title,
		author: author,
		genre: genre,
		publisher: publisher,
		length: length
	});

	newBook.save(function(err) {
		if (err)
		{
			console.log(err.message);
			return;
		}
		exports.getAllBooks(req, res);
	});
};

exports.getBookById = function(req, res) {
	var bookId = req.params.id;
	Book.findOne({ _id: bookId }, function(err, book) {
		if (err) {
			console.log(err.message);
			return;
		}
		console.log('Finding book by id: ' + bookId);
		res.json(book);
	});
};