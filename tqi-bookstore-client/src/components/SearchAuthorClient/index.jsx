import SearchBar from '../SearchBar'
import * as S from './styled'

const SearchAuthorClient = ({ children, onSearch, title }) => {
  return (
    <S.Wrapper>
      <SearchBar onSearch={onSearch} title={title} />
      <S.WrapperContent>{children}</S.WrapperContent>
    </S.Wrapper>
  )
}

export default SearchAuthorClient
