import * as S from './styled'

const Title = ({ titleh2, titleh3 }) => {
  return (
    <S.Wrapper>
      <h2>{titleh2}</h2>
      <h3>{titleh3}</h3>
    </S.Wrapper>
  )
}

export default Title
