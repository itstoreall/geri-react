import React from 'react';
import PropTypes from 'prop-types';

const BookListItem = ({ book: { name } }) => (
  
  <li>
    <h3>{name}</h3>  
    <p>Lorem ipsum dolor sit amet consectetur adipisicing?</p>
  </li>
);

BookListItem.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
  })
}

export default BookListItem;