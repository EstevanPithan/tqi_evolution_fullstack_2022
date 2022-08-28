import AuthorsListItem from './AuthorsListItem'
import React from 'react'

const AuthorsList = ({ authors, onAddTo, add }) => {
  return (
    <>
      {authors.map(author => (
        <AuthorsListItem
          key={author.id}
          author={author}
          onAddTo={onAddTo}
          add={add}
        />
      ))}
    </>
  )
}

export default AuthorsList
