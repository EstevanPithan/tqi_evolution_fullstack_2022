import BooksListItem from './BooksListItem'
import React from 'react'
import Frame from '../../../components/Frame'

const BooksList = ({ books, onAddToCart }) => {
  return (
    <Frame>
      {books.map(book => (
        <BooksListItem key={book.id} book={book} onAddToCart={onAddToCart} />
      ))}
    </Frame>
  )
}

export default BooksList
