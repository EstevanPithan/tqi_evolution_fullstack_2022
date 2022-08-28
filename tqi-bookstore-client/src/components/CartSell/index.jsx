import React from 'react'
import CartItem from './CartItem'
import Frame from '../Frame'
import Title from '../Title'
import Button from '../Button'
import * as S from './styled'

const Cart = ({ cart, onAddToCart, onRemoveFromCart, onClick }) => {
  const totalAmount = cart.reduce(
    (acc, book) => acc + book.price * book.quantity,
    0
  )

  console.log(cart)

  return (
    <>
      <Title titleh3="Carrinho" />
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
        <S.InfoWrapper>
          <Title titleh3={'Preço total: R$ ' + totalAmount} />
          <Button text1="Enviar pedido" onClick1={onClick} qntButton="1" />
        </S.InfoWrapper>
      </Frame>
    </>
  )
}

export default Cart
