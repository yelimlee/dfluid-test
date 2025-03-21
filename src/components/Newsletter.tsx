import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import Flex from './shared/Flex'
import Spacing from './shared/Spacing'
import Text from './shared/Text'
import styled from '@emotion/styled'
import { ChangeEvent, useCallback, useState } from 'react'
import validator from 'validator'
import { useBackgroundPhoto } from '@/hooks/useBackgroundPhoto'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [dirty, setDirty] = useState(false)
  const { data } = useBackgroundPhoto()

  const handleEmailValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setDirty(true)
  }, [])

  return (
    <Flex
      css={containerStyles(data)}
      direction="column"
      justify="center"
      align="center"
    >
      <div css={overlay}>
        <InfoContainer direction="column" justify="center" align="center">
          <Text
            bold={true}
            typography="t2"
            color="white"
            fontFamily="Montserrat"
          >
            Sed ut perspiciatis unde omnis
          </Text>
          <Spacing size={23} />
          <Text
            typography="t3"
            color="white"
            style={{ opacity: 0.8, width: '90%', maxWidth: '1500px' }}
            fontFamily="Montserrat"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary.
          </Text>
          <Spacing
            size={1}
            backgroundColor="white"
            style={{
              margin: '32px 0',
              opacity: 0.5,
              width: '93%',
              maxWidth: '1500px',
            }}
          />
          <Text typography="t5" color="white" fontFamily="Montserrat">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore.
          </Text>
        </InfoContainer>
        <FormContainer direction="column" justify="center" align="center">
          <Text bold={true} typography="t6" color="white" fontFamily="Exo 2">
            Subscribe to our newsletter
          </Text>
          <Spacing size={16} />
          <InputContainer
            isInvalid={!validator.isEmail(email) && dirty}
            isSuccess={validator.isEmail(email) && dirty}
          >
            <Input
              placeholder="Enter your email"
              onChange={handleEmailValues}
            />
            {validator.isEmail(email) === false && dirty ? (
              <Text
                typography="t6"
                color="error"
                display="inline-block"
                style={{ marginTop: 9 }}
              >
                Please enter a valid email!
              </Text>
            ) : null}

            <button
              style={
                validator.isEmail(email) === false && dirty
                  ? { opacity: '50%' }
                  : { opacity: '100%' }
              }
            >
              <img src="../assets/images/paper-plane.png" alt="" />
            </button>
          </InputContainer>
        </FormContainer>
      </div>
    </Flex>
  )
}

const containerStyles = (photo: string) => css`
  background: url(${photo}) no-repeat center / 100%;
`

const overlay = css`
  width: 100%;
  padding: 152px 0;
  background: rgba(40, 40, 40, 0.5);
`

const InfoContainer = styled(Flex)`
  padding-bottom: 25px;
`

const FormContainer = styled(Flex)`
  width: 100%;
  padding-top: 95px;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  box-sizing: border-box;
  background: transparent;
  font-family: 'Exo 2', sans-serif;
  color: ${colors.white};
  &::placeholder {
    color: ${colors.white};
    font-family: 'Exo 2', sans-serif;
  }
  &:focus {
    outline: none;
  }
  &[aria-invalid='true'] {
    border-color: ${colors.success};
  }
`

const InputContainer = styled.div<{ isInvalid: boolean; isSuccess: boolean }>`
  border: 1px solid
    ${({ isInvalid, isSuccess }) =>
      isInvalid ? colors.error : isSuccess ? colors.success : colors.white};
  position: relative;
  display: inline-block;
  width: 500px;
  height: 50px;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  border-radius: 7px;
  box-sizing: border-box;
  & > button {
    position: absolute;
    top: 55%;
    right: 10px;
    transform: translateY(-50%);
    & > img {
      width: 32px;
      height: 32px;
    }
  }
`

export default Newsletter
