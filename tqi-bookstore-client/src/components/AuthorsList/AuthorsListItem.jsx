import React from 'react'
import Button from '../Button'
import Card from '../Card'
import Title from '../Title'
import ImageCard from '../ImageCard'
import * as S from './styled'

const AuhtorsListItem = ({ author, onAddTo, add }) => {
  return (
    <S.ItemWrapper>
      <S.InfoWrapper>
        <ImageCard image={author.image} alt={`${author.title} cover.`} />

        <S.CardWrapper>
          <Card>
            <Title titleh3={author.name} />
            <p>{author.name}</p>
          </Card>

          <Card>
            <Title titleh3="Ano Nascimento" />
            <p>{author.birthday}</p>
          </Card>
        </S.CardWrapper>
      </S.InfoWrapper>

      {add === 'add' ? (
        <>
          {' '}
          <Button
            text1="Adicionar"
            onClick1={() => onAddTo(author.id)}
            qntButton="1"
          />
        </>
      ) : (
        <>
          {' '}
          <Button
            text1="Abrir"
            onClick1={() => onAddTo(author.id)}
            qntButton="1"
          />
        </>
      )}
    </S.ItemWrapper>
  )
}

export default AuhtorsListItem
