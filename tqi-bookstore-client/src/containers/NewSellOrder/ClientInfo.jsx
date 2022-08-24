import React from 'react'
import Card from '../../components/Card'

const ClientInfo = ({ client }) => {
  return (
    <Card>
      Nome: {client.name}
      <br />
      Email: {client.email} <br />
    </Card>
  )
}

export default ClientInfo
