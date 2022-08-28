import React from 'react'
import Main from '../Main'
import SearchBar from '../SearchBar'
import Frame from '../Frame'

const ConsultTemplate = ({ children, title, onSearch }) => {
  return (
    <Main>
      <SearchBar title={title} onSearch={onSearch} />
      <Frame>{children}</Frame>
    </Main>
  )
}

export default ConsultTemplate
