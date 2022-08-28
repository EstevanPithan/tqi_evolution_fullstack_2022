import ClientsListItem from './ClientsListItem'
import React from 'react'

const ClientsList = ({ clients, onAddTo, add }) => {
  return (
    <>
      {clients.map(client => (
        <ClientsListItem
          key={client.id}
          client={client}
          onAddTo={onAddTo}
          add={add}
        />
      ))}
    </>
  )
}

export default ClientsList
