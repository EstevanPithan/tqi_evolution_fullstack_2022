import React from 'react'
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
            <Title titleh3="Estoque atual" />
            <p>{book.quantity}</p>
          </Card>

          <Card>
            <Title titleh3="Preço Atual" />
            <p>{toCurrency(book.price)}</p>
          </Card>
        </S.CardWrapper>
      </S.InfoWrapper>
    </S.ItemWrapper>
  )
}

export default CartItem
