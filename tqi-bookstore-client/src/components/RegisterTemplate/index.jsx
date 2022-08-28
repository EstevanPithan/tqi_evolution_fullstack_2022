import React from 'react'
import Main from '../Main'
import Title from '../Title'
import FrameNoScroll from '../FrameNoScroll'
import Button from '../Button'

const RegisterTemplate = ({ children, title, onClick }) => {
  return (
    <Main>
      <Title titleh2={title} />
      <FrameNoScroll>
        {children}
        <Button text1="Salvar" onClick1={onClick} qntButton="1" />
      </FrameNoScroll>
    </Main>
  )
}

export default RegisterTemplate
