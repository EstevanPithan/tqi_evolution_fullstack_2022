import React from 'react'
import Button from '../Button'
import Card from '../Card'
import ImageCard from '../ImageCard'
import Title from '../Title'
import * as S from './styled'

const CartItem = ({ book, onAddToCart, onRemoveFromCart }) => {
  const toCurrency = n => `R$${(n ?? 0).toFixed(2)}`

  return (
    <S.ItemWrapper>
      <S.InfoWrapper>
        <ImageCard image={book.image} alt={`${book.title} cover.`} />

        <S.CardWrapper>
          <Card>
            <Title titleh3={book.name} />
            <p>{book.author.name}</p>
          </Card>

          <Card>
            <Title titleh3="Quantidade" />
            <p>{book.quantity}</p>
          </Card>

          <Card>
            <Title titleh3="Preço Unitário" />
            <p>{toCurrency(book.price)}</p>
          </Card>

          <Card>
            <Title titleh3="Preço Total" />
            <p>{toCurrency(book.price * book.quantity)}</p>
          </Card>
        </S.CardWrapper>
      </S.InfoWrapper>

      <Button
        text1="+"
        text2="-"
        onClick1={() => onAddToCart(book.id)}
        onClick2={() => onRemoveFromCart(book.id)}
        qntButton="2"
      />
    </S.ItemWrapper>
  )
}

export default CartItem
