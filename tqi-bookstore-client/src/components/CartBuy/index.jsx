import React from 'react'
import CartItem from './CartItem'
import FrameNoScroll from '../FrameNoScroll'
import Title from '../Title'

const Cart = ({ cart, onAddToCart, onRemoveFromCart, onClick }) => {
  console.log(cart)

  return (
    <>
      <Title titleh3="Livro para dar entrada" />
      <FrameNoScroll>
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
      </FrameNoScroll>
    </>
  )
}

export default Cart
