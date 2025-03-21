import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import { useState } from 'react'
import { Range } from 'react-range'

const options = [1000, 1500, 2000, 2500]

function NumSegment({ onSet }: { onSet: (values: number[]) => void }) {
  const [values, setValues] = useState([options[0], options[2]])

  const snapToNearest = (val: number) => {
    return options.reduce((prev, curr) =>
      Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev,
    )
  }

  const handleValue = (newValues: number[]) => {
    setValues(newValues.map(snapToNearest))
    onSet(newValues.map(snapToNearest))
  }

  return (
    <div css={numSegmentContainer}>
      <Range
        min={options[0]}
        max={options[options.length - 1]}
        values={values}
        onChange={handleValue}
        renderTrack={({ props, children }) => {
          const index1 = options.indexOf(values[0])
          const index2 = options.indexOf(values[1])
          const percent1 = index1 * 33.333
          const percent2 = index2 * 33.333

          return (
            <div
              {...props}
              style={{
                ...props.style,
                height: '10px',
                width: '400px',
                maxWidth: '400px',
                position: 'relative',
                borderRadius: '2px',
                background: `linear-gradient(to right, ${colors.gray} ${percent1}%, ${colors.black} ${percent1}%, ${colors.black} ${percent2}%, ${colors.gray} ${percent2}%, ${colors.gray} 100%)`,
              }}
            >
              {options.map((option, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    left: `${((option - options[0]) / (options[options.length - 1] - options[0])) * 100 - 5.2}% `,
                    bottom: '-15.5px',
                    fontWeight: '400',
                    width: '42px',
                    height: '42px',
                    background: options.slice(index1, index2).includes(option)
                      ? `${colors.black}`
                      : `${colors.gray}`,
                    borderRadius: '50%',
                    fontSize: '14px',
                    color: '#fff',
                  }}
                >
                  <span
                    style={{
                      fontFamily: `'Exo 2', sans-serif`,
                      transform: `translateY(0.5px)`,
                    }}
                  >
                    {option}
                  </span>
                </div>
              ))}
              {children}
            </div>
          )
        }}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            key={index}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundColor: `${colors.black}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              fontSize: '14px',
              fontWeight: 400,
              color: '#fff',
              outline: 'none',
            }}
          >
            <span
              style={{
                fontFamily: `'Exo 2', sans-serif`,
              }}
            >
              {values[index]}
            </span>
          </div>
        )}
      />
    </div>
  )
}

const numSegmentContainer = css`
  display: flex;
  align-items: center;
  height: 56px;
  max-height: 56px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  overflow: hidden;
  padding: 0 26px;
  box-sizing: border-box;
`

export default NumSegment
