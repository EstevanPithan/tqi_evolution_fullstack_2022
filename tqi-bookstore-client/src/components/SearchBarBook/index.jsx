import React, { useState } from 'react'
import * as S from './styled'
import Title from '../Title'

const SearchBarBook = ({ onSearch, title }) => {
  const [search, setSearch] = useState('')

  const handleOnChangeSearch = e => setSearch(e.target.value)

  const handleSearch = () => onSearch(search)

  return (
    <S.Wrapper>
      <Title titleh2={title} />
      <S.WrapperInput className="search-wrapper">
        <S.InputBar
          value={search}
          onChange={handleOnChangeSearch}
          type="text"
          placeholder="Digite aqui para pesquisar..."
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </S.WrapperInput>
    </S.Wrapper>
  )
}

export default SearchBarBook
