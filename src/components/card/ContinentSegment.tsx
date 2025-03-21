import { useState } from 'react'
import { css } from '@emotion/react'
import { colors } from '@/styles/colorPalette'

const options = ['All', 'Asia', 'Europe', 'Ameria', 'Oceania']

const ContinentSegment = ({ onSet }: { onSet: (value: string) => void }) => {
  const [selected, setSelected] = useState<string>(options[0])

  const handleSelect = (option: string) => {
    setSelected(option)
    onSet(option)
  }

  return (
    <div css={segmentContainer}>
      {options.map((option) => (
        <button
          key={option}
          css={segmentItem(option === selected)}
          onClick={() => handleSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

const segmentContainer = css`
  display: flex;
  gap: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  overflow: hidden;
  width: fit-content;
  padding: 5px;
`

const segmentItem = (active: boolean) => css`
  padding: 0 20px;
  height: 40px;
  cursor: pointer;
  background: ${active ? `${colors.black}` : `${colors.white}`};
  color: ${active ? `${colors.white}` : `${colors.black}`};
  border: none;
  transition: background 0.3s ease;
  border-radius: 25px;
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
`

export default ContinentSegment
