import BooksListItem from './BooksListItem'
import React from 'react'

const BooksList = ({ books, onClick, add }) => {
  return (
    <>
      {books.map(book => (
        <BooksListItem add={add} key={book.id} book={book} onClick={onClick} />
      ))}
    </>
  )
}

export default BooksList
