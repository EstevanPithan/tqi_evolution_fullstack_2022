import React, { useState, useEffect } from 'react'
import ConsultTemplate from '../../components/ConsultTemplate'
import BooksList from '../../components/BooksList'
import Spinner from '../../components/Spinner'

import { api } from '../../services/api'

const BooksConsult = () => {
  const [books, setBooks] = useState(null)
  const [filteredBooks, setFilteredBooks] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      const booksFromServer = await api.get('/book/findAll/')
      return setBooks(booksFromServer.data)
    }

    fetchBooks()
  }, [])

  useEffect(() => {
    setFilteredBooks(books)
  }, [books])

  const isLoading = books === null

  const handleFilter = text => {
    setFilteredBooks(
      books.filter(
        book =>
          book.author.name.toLowerCase().includes(text.toLowerCase()) ||
          book.name.toLowerCase().includes(text.toLowerCase())
      )
    )
  }

  return (
    <ConsultTemplate
      title="LIVROS"
      onSearch={handleFilter}
      children={
        isLoading ? <Spinner /> : <BooksList books={filteredBooks ?? []} />
      }
    />
  )
}

export default BooksConsult
