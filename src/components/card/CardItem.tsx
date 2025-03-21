import { css } from '@emotion/react'
import Flex from '../shared/Flex'
import styled from '@emotion/styled'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'
import { colors } from '@/styles/colorPalette'
import { Card } from '@/models/card'

function CardItem({ cards }: { cards: Card[] }) {
  return (
    <Flex css={ListStyled} gap={40} justify="flex-start">
      {cards.map((card, idx) => {
        return (
          <Container key={card.place} direction="column">
            <Flex
              justify="space-between"
              style={{ paddingLeft: '3px', paddingRight: '5px' }}
            >
              <Text bold={true} typography="t4" fontFamily="Montserrat">
                {card.place}
              </Text>
              <Text typography="t6" fontFamily="Montserrat">
                {card.value}
              </Text>
            </Flex>
            <Spacing size={9} />
            <img
              src={card.image}
              alt={`card-${idx}`}
              style={{
                minWidth: '360px',
                borderRadius: '5px',
                objectFit: 'cover',
              }}
            />
            <Spacing size={20} />
            <Text
              css={contentText}
              fontFamily="Montserrat"
              typography="t6"
              style={{ paddingLeft: '3px' }}
            >
              {card.content}
            </Text>
          </Container>
        )
      })}
    </Flex>
  )
}

const ListStyled = css`
  overflow-x: scroll;
  max-width: 1600px;
  width: 1600px;
  min-width: 1600px;
  padding-right: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Container = styled(Flex)`
  max-width: 400px;
  width: 400px;
  padding: 15px 20px 23px;
  background: ${colors.lightgray};
  border-radius: 10px;
`

const contentText = css`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
  line-height: 16px;
`

export default CardItem
