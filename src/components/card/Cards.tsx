import { css } from '@emotion/react'
import Flex from '../shared/Flex'
import Text from '../shared/Text'
import Spacing from '../shared/Spacing'
import ContinentSegment from './ContinentSegment'
import NumSegment from './NumSegment'
import CardItem from './CardItem'
import { cards } from '@/mock/data'
import { useState } from 'react'
import styled from '@emotion/styled'

function Cards() {
  const [filterCriteria, setFilterCriteria] = useState({
    range: [0, Infinity],
    continent: 'All',
  })

  const filterCards = () => {
    return cards.filter((card) => {
      console.log('뭘까?', filterCriteria.range)

      const isWithinRange =
        filterCriteria.range[0] <= card.value &&
        filterCriteria.range[1] >= card.value

      const continentMap: Record<string, string[]> = {
        Asia: [`Russia, Saint Basil's Cathedral`],
        Europe: [
          'Spain, Sagrada Família',
          'Italy, Pica',
          `Russia, Saint Basil's Cathedral`,
        ],
        America: ['US, Fallingwater'],
        Oceania: [],
      }

      const isInContinent =
        filterCriteria.continent === 'All' ||
        continentMap[filterCriteria.continent]?.includes(card.place)

      return isWithinRange && isInContinent
    })
  }

  const handleFilter = (newRange?: number[], newContinent?: string) => {
    setFilterCriteria((prev) => ({
      range: newRange || prev.range,
      continent: newContinent ?? prev.continent,
    }))
  }

  return (
    <Flex justify="center">
      <div css={containerStyles}>
        <Text fontFamily="Exo 2">Duis tincidunt ut ligula vitae mollis.</Text>
        <Spacing size={60} />
        <Flex justify="flex-start" gap={20}>
          <ContinentSegment onSet={(value) => handleFilter(undefined, value)} />
          <NumSegment onSet={(values) => handleFilter(values)} />
        </Flex>
        <Spacing size={68} />
        {filterCards().length > 0 ? (
          <CardItem cards={filterCards()} />
        ) : (
          <NoList direction="column">
            {IconCheck()}
            <Text typography="t4" fontFamily="Exo 2">
              No results
            </Text>
          </NoList>
        )}
      </div>
    </Flex>
  )
}

const containerStyles = css`
  padding-top: 120px;
  padding-left: 80px;
  padding-bottom: 80px;
  max-width: 1600px;
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: auto;
`

const NoList = styled(Flex)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
  margin-right: 80px;
`

function IconCheck() {
  return (
    <svg
      width={50}
      height={50}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M64 13.435c-.05-.69-9.295-5.66-9.442-5.66-.147 0-10.714 17.672-10.86 17.72-.148.05-3.915-20.183-4.404-21.364C38.804 2.95.09 10.156.01 10.778c-.342 2.658 7.387 48.49 8.22 49.18.83.688 40.31-6.794 40.604-7.237.294-.443-1.614-10.19-1.565-10.93.048-.738 16.78-27.666 16.73-28.355zM9.795 57.838c-.195-.492-7.778-43.025-7.73-45.585.004-.156 35.47-5.81 35.665-5.514.196.294 4.207 21.364 4.158 21.758-.05.394-2.935 4.184-3.082 4.184-.147 0-14.58-11.372-14.92-11.372-.343 0-8.66 8.812-8.513 9.353.147.542 25.243 19.987 25.733 20.233.49.246 4.354-6.006 4.5-5.76.148.246.735 6.203.735 6.203S9.99 58.33 9.796 57.837zM47 38.024c-.183 0-2.862-1.994-3.01-1.994-.146 0-.586 1.108-.586 1.108l2.825 2.03-1.212 1.884s-2.715-1.81-2.9-1.81c-.182 0-.806.776-.55.998.258.222 2.936 1.772 2.9 1.957-.037.185-1.32 2.363-1.43 2.363-.11 0-3.633-2.917-3.743-2.917-.11 0-.954.628-.624.997.33.37 3.56 2.99 3.523 3.1-.037.112-.697 1.995-.99 1.884-.295-.11-23.043-17.02-22.896-17.61.147-.592 5.296-5.6 5.675-5.847.29-.19 14.236 12.16 14.97 11.667.734-.492 16.144-24.96 16.584-24.86.44.098 5.235 3.397 5.235 3.397L52.21 28.55s-1.54-.86-1.65-.825c-.11.037-.55.85-.368.96.183.11 1.394.812 1.394.812s-.99 2.363-1.1 2.326c-.11-.036-1.652-.996-1.8-.996s-.586.923-.476.997c.11.075 1.724 1.146 1.724 1.146l-1.137 2.104s-2.275-1.33-2.385-1.33c-.11 0-.66 1.035-.514 1.146.147.11 2.165 1.477 2.165 1.477s-.88 1.66-1.063 1.66zm-11.74-25.55c-.074-.11-27.634 3.535-27.886 3.915-.073.11-.183 1.18 0 1.328.183.148 27.995-3.58 28.142-3.766.146-.185-.184-1.366-.257-1.477zM19.297 24.4c0-.11-10.31 1.33-10.75 1.55 0 0 .147.998.257 1.22.11.22 9.393-1.33 9.613-1.404.22-.074.88-1.255.88-1.366zm10.017.037s7.155-1.034 7.19-1.145c.038-.11-.182-1.33-.292-1.33-.11 0-8.072 1.256-8.402 1.33-.18.04 1.505 1.145 1.505 1.145zM21.17 37.803c-.184-.074-10.236 1.258-10.495 1.403-.33.185-.073.997.073 1.145.147.15 11.227-1.587 11.484-1.697.258-.112-.88-.777-1.063-.85zm7.007 5.87c-.22-.148-16.33 2.755-16.584 2.806-.367.073 0 .81.183 1.033.183.222 17.135-2.843 17.318-2.954s-.696-.74-.917-.887zm3.89 5.02c-.257-.11-19.362 3.068-19.667 3.287-.257.185.037 1.034.293 1.145.257.11 19.923-3.803 19.923-3.803s-.293-.517-.55-.628zm-10.31-18.79s.476-.813.55-.998c.072-.185-.548-.835-.66-.812-.184.037-1.432 1.735-1.652 2.068-.22.333 4.22 3.36 4.586 3.545.368.185.515-.406.588-.775.074-.37-3.412-3.028-3.412-3.028z" />
    </svg>
  )
}

export default Cards
