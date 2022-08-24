import React from 'react'
import * as S from './styled'

const Input = ({ title, isValid, value, onChange, name }) => {
  return (
    <S.Wrapper>
      <h3>{title}</h3>
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
      </S.WrapperInput>
      {!isValid && (
        <p className="p-feedback-invalid">Digite um {title} válido.</p>
      )}
    </S.Wrapper>
  )
}

export default Input
