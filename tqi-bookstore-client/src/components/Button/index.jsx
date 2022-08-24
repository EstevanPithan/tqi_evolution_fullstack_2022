import * as S from './styled.jsx'

const Button = ({ text1, text2, onClick1, onClick2, qntButton }) => {
  return (
    <>
      {qntButton === '1' ? (
        <S.Wrapper>
          <S.ButtonStyles onClick={onClick1}>{text1}</S.ButtonStyles>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.ButtonStyles onClick={onClick1}>{text1}</S.ButtonStyles>
          <S.ButtonStyles onClick={onClick2}>{text2}</S.ButtonStyles>
        </S.Wrapper>
      )}
    </>
  )
}
export default Button
