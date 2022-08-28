import React, { useState, useEffect } from 'react'
import Main from '../../components/Main'
import SearchBar from '../../components/SearchBar'
import Spinner from '../../components/Spinner'
import BooksList from '../../components/BooksList'
import Input from '../../components/Input'
import Cart from '../../components/CartBuy'
import Frame from '../../components/Frame'
import Button from '../../components/Button'
import { api } from '../../services/api'
import FrameNoScroll from '../../components/FrameNoScroll'
import Title from '../../components/Title'

const initialFormData = {
  invoiceNumber: '',
  observation: '',
  price: '',
  quantity: ''
}

const NewBuyOrder = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [cart, setCart] = useState([])
  const [validation, setValidation] = useState({
    invoiceNumber: true,
    observation: true,
    quantity: true,
    price: true
  })

  const handleInputChange = e =>
    setFormData(previous => ({ ...previous, [e.target.name]: e.target.value }))

  const validateInputs = form => {
    const tempValidation = {
      invoiceNumber: true,
      observation: true,
      price: true,
      quantity: true
    }

    if (form.invoiceNumber.trim().length === 0) {
      tempValidation.invoiceNumber = false
    }
    if (form.observation.trim().length === 0) {
      tempValidation.observation = false
    }
    if (form.price.trim().length === 0) {
      tempValidation.price = false
    }
    if (form.quantity.trim().length === 0) {
      tempValidation.quantity = false
    }

    setValidation(tempValidation)

    const formIsValid = Object.values(tempValidation).every(val => val === true)

    return formIsValid
  }

  const [books, setBooks] = useState(null)
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const booksFromServer = await api.get('/book/findAll')
      return setBooks(booksFromServer.data)
    }

    fetchBooks()
  }, [])

  useEffect(() => {
    setFilteredBooks(books)
  }, [books])

  const isLoading = books === null

  const handleFilter = text => {
    setFilteredBooks(
      books.filter(
        book =>
          book.author.toLowerCase().includes(text.toLowerCase()) ||
          book.name.toLowerCase().includes(text.toLowerCase())
      )
    )
  }

  const onAddToCart = bookId => {
    const bookObject = books.find(book => book.id === bookId)
    const bookOnCart = cart.find(item => item.id === bookId)

    if (!bookOnCart) {
      setCart([{ ...bookObject }])
      return
    }
    return
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  const handleSubmit = async () => {
    const formIsValid = validateInputs(formData)

    if (!formIsValid) {
      return
    }
    const bookId = cart.map(book => book.id)
    console.log(cart)

    const order = {
      invoiceNumber: formData.invoiceNumber,
      observation: formData.observation,
      quantity: formData.quantity,
      price: formData.price,
      bookId: bookId[0]
    }
    try {
      await api.post('/entry/create', order)
      alert('Entrada de compra feita!')
      setFormData(initialFormData)
    } catch (error) {
      alert('Erro ao realizar a entrada de compra.')
    }
  }

  return (
    <Main>
      <SearchBar
        title="Escolha um livro para dar entrada"
        onSearch={handleFilter}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <Frame>
          <BooksList
            add="add"
            books={filteredBooks ?? []}
            onClick={onAddToCart}
          />
        </Frame>
      )}

      <Title titleh2="Dados para a entrada de compra" />
      <FrameNoScroll>
        <Input
          title="Nº Nota Fiscal"
          name="invoiceNumber"
          isValid={validation.invoiceNumber}
          value={formData.invoiceNumber}
          onChange={handleInputChange}
        />
        <Input
          title="Preço unitario"
          name="price"
          isValid={validation.price}
          value={formData.price}
          onChange={handleInputChange}
        />
        <Input
          title="Quantidade"
          name="quantity"
          isValid={validation.quantity}
          value={formData.quantity}
          onChange={handleInputChange}
        />
        <Input
          title="Observações"
          name="observation"
          isValid={validation.observation}
          value={formData.observation}
          onChange={handleInputChange}
        />
      </FrameNoScroll>

      <Cart onAddToCart={onAddToCart} cart={cart} />

      <Button
        onClick1={handleSubmit}
        title="Enviar pedido"
        qntButton="1"
        text1="Dar entrada de compra"
      />
    </Main>
  )
}

export default NewBuyOrder
