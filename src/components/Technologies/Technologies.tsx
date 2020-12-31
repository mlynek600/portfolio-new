import React, { useState } from 'react'
import styled from 'styled-components'
import Typing from 'react-typing-animation'

import ContentContainer from '../UI/ContentContainer'
import SectionTitle from '../SectionTitle'

import TechnologiesIcons from './TechnologiesIcons'
import technolgiesData from './technologiesData'

const Technologies: React.FC = () => {
  const [animatedCounter, setAnimatedCounter] = useState(1)
  const [animatedText, setAnimatedText] = useState(
    technolgiesData.words[0]
  )
  const [textLength, setTextLength] = useState(animatedText.length)

  const onFinishedTyping = () => {
    const newText = technolgiesData.words[animatedCounter]
    setAnimatedText(newText)
    setTextLength(newText.length)
    if (animatedCounter === technolgiesData.words.length - 1) {
      setAnimatedCounter(0)
    } else {
      setAnimatedCounter(animatedCounter + 1)
    }
  }

  return (
    <Wrapper>
      <ContentContainer>
        <SectionTitle text="Technologies" />
        <TechnologiesIcons />
        <Text>{technolgiesData.text}</Text>
        <AnimationWrapper>
          <Typing
            hideCursor
            speed={100}
            onFinishedTyping={onFinishedTyping}
            loop
            startDelay={100}
          >
            <AnimatedText>{animatedText}</AnimatedText>
            <Typing.Backspace count={textLength} speed={50} delay={500} />
          </Typing>
        </AnimationWrapper>
      </ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.lightGray};

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-top: 15px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    padding-top: 35px;
    padding-bottom: 70px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.m}) {
    padding-bottom: 90px;
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
  font-size: ${({ theme }) => theme.fontSize.s22};
  text-align: center;
  padding-top: 50px;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    font-size: ${({ theme }) => theme.fontSize.s25};
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.smallTitle};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    font-size: ${({ theme }) => theme.fontSize.semiTitle};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.m}) {
    font-size: ${({ theme }) => theme.fontSize.title};
  }
`

const AnimatedText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSize.s22};
  text-align: center;
  padding-top: 7px;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-color: ${({ theme }) => theme.colors.red};
  text-decoration-thickness: 0.3px;
  color: #8495ff;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    font-size: ${({ theme }) => theme.fontSize.s25};
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.smallTitle};
    text-decoration-thickness: 1.5px;
    text-underline-offset: 7px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    font-size: ${({ theme }) => theme.fontSize.semiTitle};
    text-underline-offset: 10px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.m}) {
    font-size: ${({ theme }) => theme.fontSize.title};
    text-decoration-thickness: 2px;
    text-underline-offset: 12px;
    padding-bottom: 90px;
  }
`

export default Technologies
