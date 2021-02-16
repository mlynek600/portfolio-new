import React, { useState } from 'react'

import scrollTo from 'gatsby-plugin-smoothscroll'
import Typing from 'react-typing-animation'
import styled from 'styled-components'

import CodeImage from '../../images/home/codeImage.svg'

import VisibilitySensor from '../VisibilitySensor'

import {
  ContentContainer,
  Wrapper as ContentWrapper,
  FadeInAnimation,
} from '../UI'

import aboutMeData from './data'
import HomeNavigation from './Navigation'

const Home: React.FC = () => {
  const [animatedCounter, setAnimatedCounter] = useState(1)
  const [animatedText, setAnimatedText] = useState(aboutMeData.words[0])
  const [textLength, setTextLength] = useState(animatedText.length)

  const onFinishedTyping = () => {
    const newText = aboutMeData.words[animatedCounter]

    setAnimatedText(newText)
    setTextLength(newText.length)

    if (animatedCounter === aboutMeData.words.length - 1) {
      setAnimatedCounter(0)
    } else {
      setAnimatedCounter(animatedCounter + 1)
    }
  }

  return (
    <Wrapper id="home">
      <ContentContainer>
        <HomeNavigation />

        <HomeContainer>
          <div>
            <Title>Hi, I'm Adam...</Title>

            <AboutMe>
              <AnimationWrapper>
                <Typing
                  hideCursor
                  speed={100}
                  onFinishedTyping={onFinishedTyping}
                  loop
                  startDelay={100}
                >
                  <AnimatedText>{animatedText}</AnimatedText>

                  <Typing.Backspace
                    count={textLength}
                    speed={50}
                    delay={500}
                  />
                </Typing>
              </AnimationWrapper>
              <Text>{aboutMeData.text}</Text>
            </AboutMe>

            <Button onClick={() => scrollTo('#contact')}>
              <ButtonText>Hire me</ButtonText>
            </Button>

            <CodeImageContainer>
              <VisibilitySensor once>
                {({ isVisible }) => (
                  <FadeInAnimation isVisible={isVisible} fromRight>
                    <CodeImage />
                  </FadeInAnimation>
                )}
              </VisibilitySensor>
            </CodeImageContainer>
          </div>
        </HomeContainer>
      </ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background: linear-gradient(
    0deg,
    rgba(243, 243, 243, 1) 0%,
    rgba(60, 24, 116, 0.3085609243697479) 88%
  );

  ${ContentWrapper} {
    padding-top: 30px;
    padding-bottom: 105px;

    @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
      padding-bottom: 150px;
    }
  }
`

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    padding-left: 40px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-top: 70px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    padding-top: 120px;
  }
`

const CodeImageContainer = styled.div`
  width: 130px;
  position: absolute;
  right: 50px;
  top: 250px;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    top: 250px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    width: 160px;
    top: 250px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    top: 330px;
    right: 120px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    width: 190px;
    top: 400px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.m}) {
    width: 250px;
    right: 160px;
    top: 200px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.l}) {
    right: 250px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.xl}) {
    right: 300px;
  }
`

const Title = styled.h1`
  max-width: 456px;
  padding-bottom: 40px;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSize.smallTitle};

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    font-size: ${({ theme }) => theme.fontSize.semiTitle};
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.title};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSize.bigTitle};
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 40px;
  padding: 20px 25px;
  margin-top: 40px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.colors.cloud};
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    box-shadow: 0 4px 10px 0 ${({ theme }) => theme.colors.purple};
  }
`

const ButtonText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.text};
  font-family: ${({ theme }) => theme.fonts.semiBold};

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.bigText};
  }
`
const AnimationWrapper = styled.div`
  height: 30px;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    height: 60px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    height: 100px;
  }
`
const Text = styled.h1`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${({ theme }) => theme.fontSize.s20};
  text-align: center;
  color: ${({ theme }) => theme.colors.purpleGrey};
  padding-top: 0px;
  margin-top: 0px;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    font-size: ${({ theme }) => theme.fontSize.s22};
  }

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    font-size: ${({ theme }) => theme.fontSize.s25};
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.smallTitle};
  }
`

const AnimatedText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSize.s20};
  text-align: center;
  color: ${({ theme }) => theme.colors.purple};

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    font-size: ${({ theme }) => theme.fontSize.s22};
  }

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    font-size: ${({ theme }) => theme.fontSize.s25};
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.smallTitle};
  }
`

const AboutMe = styled.div`
  display: flex;
  width: 330px;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    width: 370px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    margin-left: 40px;
    width: 420px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    margin-left: 80px;
    width: 540px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.m}) {
    margin-left: 100px;
  }
`

export default Home
