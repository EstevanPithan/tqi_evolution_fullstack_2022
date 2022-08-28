import React, { useState } from 'react'
import Input from '../../components/Input'
import { api } from '../../services/api'
import RegisterTemplate from '../../components/RegisterTemplate'

const initialFormData = {
  name: '',
  cpf: '',
  email: '',
  phone: ''
}

const ClientsRegister = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [validation, setValidation] = useState({
    name: true,
    cpf: true,
    email: true,
    phone: true
  })

  const handleInputChange = e =>
    setFormData(previous => ({ ...previous, [e.target.name]: e.target.value }))

  const validateInputs = form => {
    const tempValidation = {
      name: true,
      cpf: true,
      email: true,
      phone: true
    }

    if (form.name.trim().length === 0) {
      tempValidation.name = false
    }
    if (form.cpf.trim().length === 0) {
      tempValidation.image = false
    }
    if (form.email.trim().length === 0) {
      tempValidation.author = false
    }
    if (form.phone.trim().length === 0) {
      tempValidation.publishingCompany = false
    }

    setValidation(tempValidation)

    const formIsValid = Object.values(tempValidation).every(val => val === true)

    return formIsValid
  }

  const handleSubmit = async () => {
    const formIsValid = validateInputs(formData)

    if (!formIsValid) {
      return
    }

    try {
      await api.post('/client/create', formData)
      alert('Cliente cadastrado!')
      setFormData(initialFormData)
    } catch (error) {
      alert('Erro ao cadastrar cliente.')
    }
  }

  return (
    <RegisterTemplate
      title="Cadastro de cliente"
      onClick={handleSubmit}
      children={
        <>
          <Input
            title="Nome"
            name="name"
            isValid={validation.name}
            value={formData.name}
            onChange={handleInputChange}
          />

          <Input
            title="CPF (Só numeros)"
            name="cpf"
            isValid={validation.cpf}
            value={formData.cpf}
            onChange={handleInputChange}
          />

          <Input
            title="Email"
            name="email"
            isValid={validation.email}
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            title="Telefone"
            name="phone"
            isValid={validation.phone}
            value={formData.phone}
            onChange={handleInputChange}
          />
        </>
      }
    />
  )
}

export default ClientsRegister
