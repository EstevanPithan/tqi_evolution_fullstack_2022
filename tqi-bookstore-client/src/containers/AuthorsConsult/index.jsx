import React, { useState, useEffect } from 'react'
import ConsultTemplate from '../../components/ConsultTemplate'
import AuthorsList from '../../components/AuthorsList'
import Spinner from '../../components/Spinner'

import { api } from '../../services/api'

const AuthorsConsult = () => {
  const [authors, setAuthors] = useState(null)
  const [filteredAuthors, setFilteredAuthors] = useState(null)

  useEffect(() => {
    const fetchAuthors = async () => {
      const authorsFromServer = await api.get('/author/findAll/')
      return setAuthors(authorsFromServer.data)
    }

    fetchAuthors()
  }, [])

  useEffect(() => {
    setFilteredAuthors(authors)
  }, [authors])

  const isLoading = authors === null

  const handleFilter = text => {
    setFilteredAuthors(
      authors.filter(author =>
        author.name.toLowerCase().includes(text.toLowerCase())
      )
    )
  }

  return (
    <ConsultTemplate
      title="Autores"
      onSearch={handleFilter}
      children={
        isLoading ? (
          <Spinner />
        ) : (
          <AuthorsList authors={filteredAuthors ?? []} />
        )
      }
    />
  )
}

export default AuthorsConsult
