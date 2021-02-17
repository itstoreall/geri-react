import React from 'react';
import PropTypes from 'prop-types';
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

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      // name: PropTypes.string,
    })
  )
}

BookList.defaultProps = {
  books: [],
};

export default BookList;