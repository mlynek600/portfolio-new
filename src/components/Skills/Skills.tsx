import React from 'react'

import styled from 'styled-components'

import SectionTitle from '../SectionTitle'
import { ContentContainer } from '../UI'

import SkillsIcons from './Icons'

const Skills: React.FC = () => {
  return (
    <Wrapper id="skills">
      <ContentContainer>
        <SectionTitle text="Skills" />

        <SkillsIcons />
      </ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.lightGray};

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-top: 15px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    padding-top: 35px;
  }
`

export default Skills
