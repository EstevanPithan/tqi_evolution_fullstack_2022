import React from 'react'
import { useNavigate } from 'react-router'
import Button from '../../components/Button'
import Frame from '../../components/Frame'
import { useAuth } from '../../contexts/UserContext'

const LoginPage = () => {
  const { loggedUser, setLoggedUser } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    setLoggedUser({ name: 'John Doe' })
    navigate('/store')
  }
  const handleLogout = () => setLoggedUser(null)

  const isLoggedIn = loggedUser !== null

  return (
    <Frame>
      <Button onClick={isLoggedIn ? handleLogout : handleLogin} text="Login" />
    </Frame>
  )
}

export default LoginPage
