import { profiles } from '@/mock/data'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Flex from './shared/Flex'
import Spacing from './shared/Spacing'
import Text from './shared/Text'
import { colors } from '@/styles/colorPalette'

function Profiles() {
  const datas = profiles.sort(() => Math.random() - 0.5)

  return (
    <div css={rootStyles}>
      <div css={containerStyles}>
        <Text fontFamily="Exo 2">
          Snap photos and share like
          <br />
          never before
        </Text>
        <Spacing size={70} />
        <Flex gap={20}>
          {datas.map((profile, idx) => {
            return (
              <Flex key={profile.title} direction="column" style={{ flex: 1 }}>
                <ProfileImg
                  src={profile.profileImage}
                  alt={`프로필-${idx}`}
                  width={108}
                  height={108}
                />
                <Spacing size={40} />
                <Text typography="t2" bold={true} fontFamily="Montserrat">
                  {profile.title}
                </Text>
                <Spacing size={24} />
                <Text
                  typography="t3"
                  fontFamily="Montserrat"
                  style={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                    maxWidth: '480px',
                  }}
                >
                  {profile.content}
                </Text>
                <Spacing size={24} />
                <LearnMore>LEARN MORE</LearnMore>
              </Flex>
            )
          })}
        </Flex>
      </div>
    </div>
  )
}

const rootStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const containerStyles = css`
  max-width: 1680px;
  padding: 120px 80px 110px;
`
const ProfileImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
`
const LearnMore = styled.button`
  width: fit-content;
  color: ${colors.blue};
  font-weight: 700;
  line-height: 30px;
  font-family: 'Exo 2', sans-serif;
`

export default Profiles
