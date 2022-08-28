import SearchBar from '../SearchBar'
import * as S from './styled'

const SearchClient = ({ children, onSearch, title }) => {
  return (
    <S.Wrapper>
      <SearchBar onSearch={onSearch} title={title} />
      <S.WrapperContent>{children}</S.WrapperContent>
    </S.Wrapper>
  )
}

export default SearchClient
