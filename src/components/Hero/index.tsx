import React from 'react'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

import CodeIcon from '../../images/code.svg'

import ContentContainer, {
  Wrapper as ContentWrapper,
} from '../UI/ContentContainer'
import Navigation from '../Navigation'

const Hero: React.FC = () => {
  return (
    <Wrapper id="hero">
      <ContentContainer>
        <Navigation />

        <HeroContainer>
          <HeroContentContainer>
            <Title>
              Hi, I'm Adam
              <br />
              <Subtitle>Front-end developer</Subtitle>
            </Title>

            <Button>
              <ButtonText onClick={() => scrollTo('#contact')}>
                Hire me
              </ButtonText>
            </Button>

            <CodeIconContainer>
              <CodeIcon />
            </CodeIconContainer>
          </HeroContentContainer>
        </HeroContainer>
      </ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  height: 100vh;

  ${ContentWrapper} {
    padding-top: 30px;
    padding-bottom: 105px;

    @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
      padding-bottom: 150px;
    }
  }
`

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-top: 70px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    padding-top: 120px;
  }
`

const CodeIconContainer = styled.div`
  height: 250px;
  width: 250px;
  position: absolute;
  right: 250px;
  top: 200px;
`

const HeroContentContainer = styled.div``

const Title = styled.h1`
  max-width: 456px;
  padding-bottom: 30px;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSize.smallTitle};

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-bottom: 35px;
    font-size: ${({ theme }) => theme.fontSize.title};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    white-space: nowrap;
    padding-bottom: 40px;
    font-size: ${({ theme }) => theme.fontSize.bigTitle};
  }
`

const Subtitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.s25};
`

const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 40px;
  padding: 15px 20px;
  margin-top: 30px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.colors.cloud};
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    box-shadow: none;
  }
`

const ButtonText = styled.p`
  padding-right: 8px;
  font-size: ${({ theme }) => theme.fontSize.text};
  font-family: ${({ theme }) => theme.fonts.semiBold};

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.bigText};
  }
`

export default Hero
