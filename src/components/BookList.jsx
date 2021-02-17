import React from 'react';
import BookListItem from './BookListItem';

const BookList = ({ books }) => {
  return (
  <ul>
    {books.map(book => (
      <BookListItem key={book.id} book={book} />
    ))}
  </ul>
)
};

export default BookList;