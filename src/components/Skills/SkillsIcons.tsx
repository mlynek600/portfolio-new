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
import VisibilitySensor from '../VisibilitySensor/VisibilitySensor'

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
    <GitIcon key="GitIcon" />,
    <ProtractorIcon key="ProtractorIcon" />,
    <JestIcon key="JestIcon" />,
    <FigmaIcon key="FigmaIcon" />,
    <JiraIcon key="JiraIcon" />,
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
              {item => props => <div style={props}>{item}</div>}
            </Transition>
          )}
        </Wrapper>
      )}
    </VisibilitySensor>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px;
  margin-top: 40px;
  height: 480px;

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

export default SkillsIcons
