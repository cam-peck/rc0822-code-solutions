var books = [
  {
    isbn: '2309430298508-3483',
    title: 'The Fellowship of the Ring',
    author: 'J. R. R. Tolkien'
  },
  {
    isbn: '094304953029-8743',
    title: 'The Two Towers',
    author: 'J. R. R. Tolkien'
  },
  {
    isbn: '398205484348-5824',
    title: 'The Return of the King',
    author: 'J. R. R. Tolkien'
  }
];

console.log('Value of books Array: ', books);
console.log('  Type of Books Array: ', typeof books);

var booksAsJSON = JSON.stringify(books);
console.log('Value of booksAsJSON: ', booksAsJSON);
console.log('  Type of BooksAsJSON: ', typeof booksAsJSON);

var studentJSON = '{"number id":"009","String name":"Tyler"}';
console.log('Value of studentJSON: ', studentJSON);
console.log('  Type of studentJSON: ', typeof studentJSON);

var studentObj = JSON.parse(studentJSON);
console.log('Value of studentObj: ', studentObj);
console.log('  Type of studentObj: ', typeof studentObj);
