import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  )
}

export default Main
