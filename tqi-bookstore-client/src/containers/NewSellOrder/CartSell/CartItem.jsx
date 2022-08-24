import React from 'react'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import ImageBook from '../../../components/ImageBook'

const CartItem = ({ book, onAddToCart, onRemoveFromCart }) => {
  const toCurrency = n => `R$${(n ?? 0).toFixed(2)}`

  return (
    <div class="card-container">
      <span class="card-info">
        <ImageBook image={book.image} alt={`${book.title} cover.`} />

        <div class="card-data">
          <Card>
            <h3>{book.name}</h3>
            <p>{book.author}</p>
          </Card>

          <Card>
            <h3>Quantidade</h3>
            <p>{book.quantity}</p>
          </Card>

          <Card>
            <h3>Preço Unitário</h3>
            <p>{toCurrency(book.price)}</p>
          </Card>

          <Card>
            <h3>Preço Total</h3>
            <p>{toCurrency(book.price * book.quantity)}</p>
          </Card>
        </div>
      </span>

      <Button
        text1="+"
        text2="-"
        onClick1={() => onAddToCart(book.id)}
        onClick2={() => onRemoveFromCart(book.id)}
        qntButton="2"
      />
    </div>
  )
}

export default CartItem
