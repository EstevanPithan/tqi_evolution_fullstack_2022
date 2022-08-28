import React, { useState, useEffect } from 'react'
import ConsultTemplate from '../../components/ConsultTemplate'
import ClientsList from '../../components/ClientsList'
import Spinner from '../../components/Spinner'

import { api } from '../../services/api'

const ClientsConsult = () => {
  const [clients, setClients] = useState(null)
  const [filteredClients, setFilteredClients] = useState(null)

  useEffect(() => {
    const fetchClients = async () => {
      const clientsFromServer = await api.get('/client/findAll/')
      return setClients(clientsFromServer.data)
    }

    fetchClients()
  }, [])

  useEffect(() => {
    setFilteredClients(clients)
  }, [clients])

  const isLoading = clients === null

  const handleFilter = text => {
    setFilteredClients(
      clients.filter(
        client =>
          client.cpf.toLowerCase().includes(text.toLowerCase()) ||
          client.name.toLowerCase().includes(text.toLowerCase())
      )
    )
  }

  return (
    <ConsultTemplate
      title="Clientes"
      onSearch={handleFilter}
      children={
        isLoading ? (
          <Spinner />
        ) : (
          <ClientsList clients={filteredClients ?? []} />
        )
      }
    />
  )
}

export default ClientsConsult
