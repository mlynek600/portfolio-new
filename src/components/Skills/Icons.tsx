import React from 'react'

import styled from 'styled-components'
import { Transition } from 'react-spring/renderprops'

import TypeScriptIcon from '../../images/skills/typescriptIcon.svg'
import ReactIcon from '../../images/skills/reactIcon.svg'
import ReduxIcon from '../../images/skills/reduxIcon.svg'
import SassIcon from '../../images/skills/sassIcon.svg'
import NextIcon from '../../images/skills/nextIcon.svg'
import ProtractorIcon from '../../images/skills/protractorIcon.svg'
import NodeIcon from '../../images/skills/nodeIcon.svg'
import BootstrapIcon from '../../images/skills/bootstrapIcon.svg'
import FigmaIcon from '../../images/skills/figmaIcon.svg'
import GatsbyIcon from '../../images/skills/gatsbyIcon.svg'
import GitIcon from '../../images/skills/gitIcon.svg'
import GraphQLIcon from '../../images/skills/graphqlIcon.svg'
import JestIcon from '../../images/skills/jestIcon.svg'
import JiraIcon from '../../images/skills/jiraIcon.svg'
import VSCodeIcon from '../../images/skills/vscodeIcon.svg'

import VisibilitySensor from '../VisibilitySensor'

const SkillsIcons: React.FC = () => {
  const icons = [
    <TypeScriptIcon key="TypeScriptIcon" />,
    <ReactIcon key="ReactIcon" />,
    <ReduxIcon key="ReduxIcon" />,
    <NodeIcon key="NodeIcon" />,
    <NextIcon key="NextIcon" />,
    <GatsbyIcon key="GatsbyIcon" />,
    <GraphQLIcon key="GraphQLIcon" />,
    <SassIcon key="SassIcon" />,
    <BootstrapIcon key="BootstrapIcon" />,
    <JiraIcon key="JiraIcon" />,
    <GitIcon key="GitIcon" />,
    <ProtractorIcon key="ProtractorIcon" />,
    <JestIcon key="JestIcon" />,
    <FigmaIcon key="FigmaIcon" />,
    <VSCodeIcon key="VSCodeIcon" />,
  ]

  return (
    <VisibilitySensor once>
      {({ isVisible }) => (
        <Wrapper>
          {isVisible && (
            <Transition
              items={icons}
              //eslint-disable-next-line
              //@ts-ignore-next-line
              keys={item => item.key}
              from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
              enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
              trail={100}
            >
              {item => props => (
                <IconContainer style={props}>{item}</IconContainer>
              )}
            </Transition>
          )}
        </Wrapper>
      )}
    </VisibilitySensor>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin-top: 40px;
  height: 300px;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    height: 360px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    height: 480px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.m}) {
    padding-top: 50px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.xl}) {
    height: 580px;
  }

  svg {
    width: 50px;
    height: 38px;

    @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
      width: 60px;
      height: 48px;
    }

    @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
      width: 80x;
      height: 58px;
    }

    @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
      width: 90px;
      height: 64px;
    }

    @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
      width: 100px;
      height: 84px;
    }
  }
`

const IconContainer = styled.div`
  flex: 0 1 calc(20% - 8px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default SkillsIcons
