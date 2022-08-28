import React, { useState } from 'react'
import * as S from './styled'
import Title from '../Title'
import Button from '../Button'

const SearchBar = ({ onSearch, title }) => {
  const [search, setSearch] = useState('')

  const handleOnChangeSearch = e => setSearch(e.target.value)

  const handleSearch = () => onSearch(search)

  return (
    <S.Wrapper>
      <Title titleh3={title} />
      <S.WrapperInput className="search-wrapper">
        <S.InputBar
          value={search}
          onChange={handleOnChangeSearch}
          type="text"
          placeholder="Digite aqui para pesquisar..."
        />
        <Button text1="Pesquisar" onClick1={handleSearch} qntButton="1" />
      </S.WrapperInput>
    </S.Wrapper>
  )
}

export default SearchBar
