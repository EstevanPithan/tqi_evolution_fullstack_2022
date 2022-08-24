import React from 'react'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import Title from '../../../components/Title'
import ImageBook from '../../../components/ImageBook'

const BooksListItem = ({ book, onAddToCart }) => {
  const toCurrency = n => `R$${n.toFixed(2)}`

  return (
    <div class="card-container">
      <span class="card-info">
        <ImageBook image={book.image} alt={`${book.title} cover.`} />

        <div class="card-data">
          <Card>
            <Title titleh3={book.name} />
            <p>{book.author.name}</p>
          </Card>

          <Card>
            <Title titleh3="Estoque" />
            <p>{book.quantity} Unidades</p>
          </Card>

          <Card>
            <Title titleh3="Estoque" />
            <p>{toCurrency(book.price)}</p>
          </Card>
        </div>
      </span>

      <span class="card-buttons">
        {onAddToCart ? (
          <>
            {' '}
            <Button
              text1="Adicionar"
              onClick1={() => onAddToCart(book.id)}
              qntButton="1"
            />
          </>
        ) : (
          <></>
        )}
      </span>
    </div>
  )
}

export default BooksListItem
