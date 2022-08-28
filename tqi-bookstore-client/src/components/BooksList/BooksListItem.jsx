import React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Title from '../../components/Title'
import ImageCard from '../../components/ImageCard'
import * as S from './styled'

const BooksListItem = ({ book, onClick, add }) => {
  const toCurrency = n => `R$${n.toFixed(2)}`

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
            <Title titleh3="Estoque" />
            <p>{book.quantity} Unidades</p>
          </Card>

          <Card>
            <Title titleh3="Preço" />
            <p>{toCurrency(book.price)}</p>
          </Card>
        </S.CardWrapper>
      </S.InfoWrapper>

      {add === 'add' ? (
        <>
          {' '}
          <Button
            text1="Adicionar"
            onClick1={() => onClick(book.id)}
            qntButton="1"
          />
        </>
      ) : (
        <>
          {' '}
          <Button
            text1="Abrir"
            onClick1={() => onClick(book.id)}
            qntButton="1"
          />
        </>
      )}
    </S.ItemWrapper>
  )
}

export default BooksListItem
