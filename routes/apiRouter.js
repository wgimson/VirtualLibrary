var express = require('express');
var router = express.Router();
var bookController = require('../controllers/bookController');

/* GET ALL BOOKS */
router.get('/books', function(req, res) {
	return bookController.getAllBooks(req, res);
});

/* ADD NEW BOOK */
router.post('/books', function(req, res) {
	return bookController.addBook(req, res);
});

/* GET BOOK BY AUTHOR */
router.get('/books/author/:author', function(req, res) {
	return bookController.getBooksByAuthor(req, res);
});

/* GET BOOK BY TITLE */
router.get('/books/title/:title', function(req, res) {
	return bookController.getBookByTitle(req, res);
});

/* GET BOOK BY ID */
router.get('/books/id/:id', function(req, res) {
	return bookController.getBookById(req, res);
});

module.exports = router;