import ClientsItem from './ClientsItem'
import FrameNoScroll from '../FrameNoScroll'
import React from 'react'
import Title from '../Title'

const ClientInfo = ({ clients, onAddTo, add }) => {
  return (
    <>
      <Title titleh3="Cliente escolhido" />
      <FrameNoScroll>
        {clients.map(client => (
          <ClientsItem
            key={client.id}
            client={client}
            onAddTo={onAddTo}
            add={add}
          />
        ))}
      </FrameNoScroll>
    </>
  )
}

export default ClientInfo
