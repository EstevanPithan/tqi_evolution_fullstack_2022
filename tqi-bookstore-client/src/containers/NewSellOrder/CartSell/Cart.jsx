import React from 'react'
import CartItem from './CartItem'
import Frame from '../../../components/Frame'

const Cart = ({ cart, onAddToCart, onRemoveFromCart }) => {
  const totalAmount = cart.reduce(
    (acc, book) => acc + book.price * book.quantity,
    0
  )

  return (
    <Frame>
      {cart
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(item => (
          <CartItem
            key={item.id}
            book={item}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
      <div>
        <h2>Preço total: R$ {totalAmount} </h2>
      </div>
    </Frame>
  )
}

export default Cart
