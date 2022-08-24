import * as S from './styled'
import Title from '../Title'

const SearchBarClients = ({
  title,
  isValid,
  value,
  onChange,
  name,
  handleSearch
}) => {
  return (
    <S.Wrapper>
      <Title titleh2={title} />
      <S.WrapperInput>
        {isValid ? (
          <S.ValidInputBar
            type="text"
            value={value}
            name={name}
            onChange={onChange}
            placeholder="Digite aqui..."
          />
        ) : (
          <S.InvalidInputBar
            type="text"
            value={value}
            name={name}
            onChange={onChange}
            placeholder="Digite aqui..."
          />
        )}
        <button onClick={handleSearch}>Pesquisar</button>
      </S.WrapperInput>
      {!isValid && (
        <p className="p-feedback-invalid">Digite um {title} válido.</p>
      )}
    </S.Wrapper>
  )
}

export default SearchBarClients
