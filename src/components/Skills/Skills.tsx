import React from 'react'
import styled from 'styled-components'

import { ContentContainer } from '../UI'
import SectionTitle from '../SectionTitle'

import SkillsIcons from './SkillsIcons'

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

export default Skills
