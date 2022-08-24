import React from 'react'
import Card from '../../components/Card'
import ImageBook from '../../components/ImageBook'

const BooksListItem = ({ book }) => {
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
            <h3>Estoque atual</h3>
            <p>{book.quantity} Unidades</p>
          </Card>

          <Card>
            <h3>Preço Atual</h3>
            <p>{toCurrency(book.price)}</p>
          </Card>
        </div>
      </span>
    </div>
  )
}

export default BooksListItem
