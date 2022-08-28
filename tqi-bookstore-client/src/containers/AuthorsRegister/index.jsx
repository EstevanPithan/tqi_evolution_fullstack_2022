import React, { useState } from 'react'
import Input from '../../components/Input'
import { api } from '../../services/api'
import RegisterTemplate from '../../components/RegisterTemplate'

const initialFormData = {
  name: '',
  image: '',
  birthday: '',
  description: ''
}

const AuthorsRegister = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [validation, setValidation] = useState({
    name: true,
    image: true,
    birthday: true,
    description: true
  })

  const handleInputChange = e =>
    setFormData(previous => ({ ...previous, [e.target.name]: e.target.value }))

  const validateInputs = form => {
    const tempValidation = {
      name: true,
      image: true,
      birthday: true,
      description: true
    }

    if (form.name.trim().length === 0) {
      tempValidation.name = false
    }
    if (form.image.trim().length === 0) {
      tempValidation.image = false
    }
    if (form.birthday.trim().length === 0) {
      tempValidation.author = false
    }
    if (form.description.trim().length === 0) {
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
      await api.post('/author/create', formData)
      alert('Autor cadastrado!')
      setFormData(initialFormData)
    } catch (error) {
      alert('Erro ao cadastrar autor.')
    }
  }

  return (
    <RegisterTemplate
      title="Cadastro de autor"
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
            title="URL da imagem do livro"
            name="image"
            isValid={validation.image}
            value={formData.image}
            onChange={handleInputChange}
          />

          <Input
            title="Data de nascimento (__/__/____)"
            name="birthday"
            isValid={validation.birthday}
            value={formData.birthday}
            onChange={handleInputChange}
          />
          <Input
            title="Descrição"
            name="description"
            isValid={validation.description}
            value={formData.description}
            onChange={handleInputChange}
          />
        </>
      }
    />
  )
}

export default AuthorsRegister
