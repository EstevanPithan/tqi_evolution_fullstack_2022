import React from 'react'
import Button from '../Button'
import Card from '../Card'
import Title from '../Title'
import ImageCard from '../ImageCard'
import * as S from './styled'

const ClientsItem = ({ client }) => {
  return (
    <S.ItemWrapper>
      <S.InfoWrapper>
        <ImageCard
          image="https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_1280.png"
          alt={`${client.title} cover.`}
        />

        <S.CardWrapper>
          <Card>
            <Title titleh3={client.name} />
            <p>{client.name}</p>
          </Card>

          <Card>
            <Title titleh3="CPF" />
            <p>{client.cpf}</p>
          </Card>

          <Card>
            <Title titleh3="Telefone" />
            <p>{client.phone}</p>
          </Card>

          <Card>
            <Title titleh3="Email" />
            <p>{client.email}</p>
          </Card>
        </S.CardWrapper>
      </S.InfoWrapper>
    </S.ItemWrapper>
  )
}

export default ClientsItem
