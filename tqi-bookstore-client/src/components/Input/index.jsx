import React from 'react'
import * as S from './styled'
import Title from '../Title'

const Input = ({ title, isValid, value, onChange, name, Readonly }) => {
  return (
    <S.Wrapper>
      <Title titleh3={title} />
      <S.WrapperInput>
        {isValid ? (
          <S.ValidInputBar
            type="text"
            value={value}
            name={name}
            onChange={onChange}
            placeholder="Digite aqui..."
            Readonly={Readonly}
          />
        ) : (
          <S.InvalidInputBar
            type="text"
            value={value}
            name={name}
            onChange={onChange}
            placeholder="Digite aqui..."
            Readonly={Readonly}
          />
        )}
      </S.WrapperInput>
      {!isValid && (
        <S.P className="p-feedback-invalid">Digite um {title} válido.</S.P>
      )}
    </S.Wrapper>
  )
}

export default Input
