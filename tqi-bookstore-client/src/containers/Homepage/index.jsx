import React, { useState, useEffect } from 'react'

import SearchBarBook from '../../components/SearchBarBook'
import Main from '../../components/Main'
import Spinner from '../../components/Spinner'
import BooksList from './BooksList'
import { api } from '../../services/api'

const Homepage = () => {
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
          book.author.toLowerCase().includes(text.toLowerCase()) ||
          book.name.toLowerCase().includes(text.toLowerCase())
      )
    )
  }

  return (
    <Main>
      <SearchBarBook title="LIVROS" onSearch={handleFilter} />
      {isLoading ? <Spinner /> : <BooksList books={filteredBooks ?? []} />}
    </Main>
  )
}

export default Homepage
