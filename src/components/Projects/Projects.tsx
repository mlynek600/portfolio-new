import React from 'react'
import styled from 'styled-components'

import { ContentContainer, FadeInAnimation } from '../UI'
import SectionTitle from '../SectionTitle'

import ProjectsList from './List'
import VisibilitySensor from '../VisibilitySensor/VisibilitySensor'

const Projects: React.FC = () => (
  <Wrapper id="projects">
    <ContentContainer>
      <SectionTitle text="Projects" />

      <SectionStyle>
        <VisibilitySensor once>
          {({ isVisible }) => (
            <FadeInAnimation isVisible={isVisible}>
              <ProjectsList />
            </FadeInAnimation>
          )}
        </VisibilitySensor>
      </SectionStyle>
    </ContentContainer>
  </Wrapper>
)

const Wrapper = styled.div`
  padding-bottom: 60px;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-top: 70px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    padding-top: 50px;
  }
`

const SectionStyle = styled.div`
  justify-content: center;
  flex-flow: wrap;
  display: flex;
`

export default Projects
