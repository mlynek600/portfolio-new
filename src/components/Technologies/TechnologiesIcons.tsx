import React from 'react'
import styled from 'styled-components'

import TypeScriptIcon from '../../images/typescript.svg'
import ReactIcon from '../../images/reacticon.svg'
import ReduxIcon from '../../images/redux.svg'
import SassIcon from '../../images/sass.svg'
import NextIcon from '../../images/next.svg'
import ProtractorIcon from '../../images/protractor.svg'
import NodeIcon from '../../images/node.svg'

const TechnologiesIcons: React.FC = () => {
  return (
    <Wrapper>
      <TypeScriptIcon />
      <ReactIcon />
      <ReduxIcon />
      <SassIcon />
      <ProtractorIcon />
      <NodeIcon />
      <NextIcon />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-top: 50px;
  }

  svg {
    width: 60px;
    height: 48px;
    padding: 15px 3px;

    @media (min-width: 360px) and (max-width: 430px) {
      padding: 15px 10px;
    }

    @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
      padding: 15px 7px;
    }

    @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
      width: 80x;
      height: 58px;
      padding: 15px 10px;
    }

    @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
      width: 90px;
      height: 64px;
      padding: 25px 10px;
    }

    @media (min-width: ${({ theme }) => theme.rwd.tablet.m}) {
      padding: 25px 20px;
    }

    @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
      width: 100px;
      height: 84px;
      padding: 25px 15px;
    }

    @media (min-width: ${({ theme }) => theme.rwd.desktop.m}) {
      padding: 25px 22px;
    }

    @media (min-width: ${({ theme }) => theme.rwd.desktop.l}) {
      padding: 25px 33px;
    }
  }
`

export default TechnologiesIcons
