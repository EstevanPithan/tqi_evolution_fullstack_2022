import * as S from './styled'

const ImageCard = ({ image, alt }) => {
  return (
    <S.Wrapper>
      <img src={image} alt={alt} />
    </S.Wrapper>
  )
}

export default ImageCard
