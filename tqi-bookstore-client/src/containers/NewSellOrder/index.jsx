import React, { useState, useEffect } from 'react'
import Main from '../../components/Main'
import Spinner from '../../components/Spinner'
import ClientsList from '../../components/ClientsList'
import { api } from '../../services/api'
import SearchAuthorClient from '../../components/SearchAuthorClient'
import ClientInfo from '../../components/ClientInfo'
import FrameNoScroll from '../../components/FrameNoScroll'
import Frame from '../../components/Frame'

import Title from '../../components/Title'
import Cart from '../../components/CartSell'
import SearchBar from '../../components/SearchBar'
import BooksList from '../../components/BooksList'

const NewSellOrder = () => {
  const [cart, setCart] = useState([])

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

  const handleFilterBooks = text => {
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
      setCart(previous => [...previous, { ...bookObject, quantity: 1 }])
      return
    }

    setCart(previous => {
      const itemsToKeep = previous.filter(item => item.id !== bookId)
      const updatedCartItems = [
        ...itemsToKeep,
        { ...bookOnCart, quantity: bookOnCart.quantity + 1 }
      ]

      return updatedCartItems
    })
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  const onRemoveFromCart = bookId => {
    const bookOnCart = cart.find(item => item.id === bookId)

    if (!bookOnCart) {
      return
    }

    const lastUnit = bookOnCart.quantity === 1

    setCart(previous => {
      const itemsToKeep = previous.filter(item => item.id !== bookId)
      const updatedItem = { ...bookOnCart, quantity: bookOnCart.quantity - 1 }
      const updatedCartItems = itemsToKeep

      if (!lastUnit) {
        updatedCartItems.push(updatedItem)
      }

      return updatedCartItems
    })
  }

  const [clients, setClients] = useState(null)
  const [clientChosen, setClientChosen] = useState([])
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

  const handleFilterClients = text => {
    setFilteredClients(
      clients.filter(
        client =>
          client.name.toLowerCase().includes(text.toLowerCase()) ||
          client.cpf.toLowerCase().includes(text.toLowerCase())
      )
    )
  }

  const onAddTo = clientId => {
    const clientObject = clients.find(client => client.id === clientId)
    const clientOnChosen = clientChosen.find(item => item.id === clientId)

    if (!clientOnChosen) {
      setClientChosen([{ ...clientObject }])
      return
    }
    return
  }

  useEffect(() => {
    console.log(clientChosen)
  }, [clientChosen])

  const handleSubmitOrder = async () => {
    if (clientChosen === undefined) {
      alert('Selecione um cliente válido!')
      return
    }

    const totalPrice = cart.reduce(
      (acc, book) => acc + book.price * book.quantity,
      0
    )
    const bookIds = cart.map(book => book.id)
    const booksQnt = cart.map(book => book.quantity)

    const order = {
      clientId: clientChosen[0].id,
      totalPrice,
      bookIds,
      booksQnt
    }

    try {
      await api.post('/sell/create', order)
      alert('Pedido concluído!')
      window.location.reload()
    } catch (error) {
      alert('Erro ao enviar pedido.')
    }
  }

  return (
    <Main>
      <SearchAuthorClient
        title="Escolha um cliente. nome ou cpf"
        onSearch={handleFilterClients}
        children={
          isLoading ? (
            <Spinner />
          ) : (
            <ClientsList
              add="add"
              clients={filteredClients ?? []}
              onAddTo={onAddTo}
            />
          )
        }
      />

      <SearchBar
        title="Escolha os livros para venda"
        onSearch={handleFilterBooks}
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

      <Title titleh3="Informações da venda" />
      <FrameNoScroll>
        <ClientInfo clients={clientChosen} />
        <Cart
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          cart={cart}
          onClick={handleSubmitOrder}
        />
      </FrameNoScroll>
    </Main>
  )
}

export default NewSellOrder
