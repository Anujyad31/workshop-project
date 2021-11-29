const bookscontroller = require('../controllers/books');
const bookstall = require('express').Router();



bookstall.get('/books',bookscontroller.getAllBooks);
bookstall.post('/books',bookscontroller.addBooks);

module.exports = bookstall;