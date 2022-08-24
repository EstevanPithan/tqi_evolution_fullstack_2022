import * as S from './styled'

const ImageBook = ({ image, alt }) => {
  return (
    <S.Wrapper>
      <img src={image} alt={alt} />
    </S.Wrapper>
  )
}

export default ImageBook
