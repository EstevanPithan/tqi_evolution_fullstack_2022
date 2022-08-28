import React, { useState, useEffect } from 'react'
import Input from '../../components/Input'
import Spinner from '../../components/Spinner'
import { api } from '../../services/api'
import RegisterTemplate from '../../components/RegisterTemplate'
import SearchAuthorClient from '../../components/SearchAuthorClient'
import AuthorsList from '../../components/AuthorsList'

const initialFormData = {
  name: '',
  image: '',
  author: '',
  publishingCompany: '',
  year: ''
}

const BooksRegister = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [validation, setValidation] = useState({
    name: true,
    image: true,
    author: true,
    publishingCompany: true,
    year: true
  })

  const handleInputChange = e =>
    setFormData(previous => ({ ...previous, [e.target.name]: e.target.value }))

  const validateInputs = form => {
    const tempValidation = {
      name: true,
      image: true,
      author: true,
      publishingCompany: true,
      year: true
    }

    if (form.name.trim().length === 0) {
      tempValidation.name = false
    }
    if (form.image.trim().length === 0) {
      tempValidation.image = false
    }
    if (form.author.trim().length === 0) {
      tempValidation.author = false
    }
    if (form.publishingCompany.trim().length === 0) {
      tempValidation.publishingCompany = false
    }
    if (form.year.trim().length === 0 || isNaN(Number(form.year))) {
      tempValidation.year = false
    }

    setValidation(tempValidation)

    const formIsValid = Object.values(tempValidation).every(val => val === true)

    return formIsValid
  }

  const [authors, setAuthors] = useState(null)
  const [authorChosen, setAuthorChosen] = useState([])
  const [filteredAuthors, setFilteredAuthors] = useState(null)

  useEffect(() => {
    const fetchAuthors = async () => {
      const authorsFromServer = await api.get('/author/findAll/')
      return setAuthors(authorsFromServer.data)
    }

    fetchAuthors()
  }, [])

  useEffect(() => {
    setFilteredAuthors(authors)
  }, [authors])

  const isLoading = authors === null

  const handleFilter = text => {
    setFilteredAuthors(
      authors.filter(author =>
        author.name.toLowerCase().includes(text.toLowerCase())
      )
    )
  }

  const onAddTo = authorId => {
    const authorObject = authors.find(author => author.id === authorId)
    const authorOnChosen = authorChosen.find(item => item.id === authorId)

    if (!authorOnChosen) {
      setAuthorChosen([{ ...authorObject }])
      return
    }
    return
  }

  useEffect(() => {
    console.log(authorChosen)
  }, [authorChosen])

  const handleSubmit = async () => {
    formData.author = authorChosen[0].id

    const formIsValid = validateInputs(formData)

    if (!formIsValid) {
      return
    }

    try {
      await api.post('/book/create', formData)
      alert('Livro cadastrado!')
      setFormData(initialFormData)
    } catch (error) {
      alert('Erro ao cadastrar livro.')
    }
  }

  return (
    <RegisterTemplate
      title="Cadastro de livro"
      onClick={handleSubmit}
      children={
        <>
          <SearchAuthorClient
            title="Escolha um autor"
            onSearch={handleFilter}
            children={
              isLoading ? (
                <Spinner />
              ) : (
                <AuthorsList
                  add="add"
                  authors={filteredAuthors ?? []}
                  onAddTo={onAddTo}
                />
              )
            }
          />

          <Input
            title="Autor"
            name="name"
            isValid={validation.author}
            value={authorChosen.map(author => author.name)}
            onChange={handleInputChange}
            Readonly="Readonly"
          />

          <Input
            title="Título"
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
            title="Editora"
            name="publishingCompany"
            isValid={validation.publishingCompany}
            value={formData.publishingCompany}
            onChange={handleInputChange}
          />
          <Input
            title="Ano de publicação"
            name="year"
            isValid={validation.year}
            value={formData.year}
            onChange={handleInputChange}
          />
        </>
      }
    />
  )
}

export default BooksRegister
