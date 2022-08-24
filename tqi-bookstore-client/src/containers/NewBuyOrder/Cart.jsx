import React from 'react'
import CartItem from './CartItem'
import Frame from '../../components/Frame'

const Cart = ({ cart, onAddToCart }) => {
  return (
    <>
      <Frame>
        {cart
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(item => (
            <CartItem key={item.id} book={item} onAddToCart={onAddToCart} />
          ))}
      </Frame>
    </>
  )
}

export default Cart
