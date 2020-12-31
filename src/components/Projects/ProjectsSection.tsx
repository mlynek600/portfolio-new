import React from 'react'
import styled from 'styled-components'

import ContentContainer from '../UI/ContentContainer'
import SectionTitle from '../SectionTitle'

import { ProjectCard } from './ProjectCard'
import VisibilitySensor from '../VisibilitySensor'
import FadeInAnimation from '../UI/FadeInAnimation'

import { projectsData } from './ProjectsData'


export const ProjectsSection: React.FC = () => {


  return (
    <Wrapper id="projects">
      <ContentContainer>
        <SectionTitle text="Projects" />
        <SectionStyle>
          {projectsData.map(project => (
            <VisibilitySensor key={project.name} once>
              {({ isVisible }) => (
                <FadeInAnimation isVisible={isVisible}>
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                  />
                </FadeInAnimation>
              )}
            </VisibilitySensor>
          ))}
        </SectionStyle>
      </ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;

  @media (max-width: ${({ theme }) => theme.rwd.mobile.maxWidth}) {
    margin-top: 10px;
  }

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
  @media (max-width: ${({ theme }) => theme.rwd.mobile.maxWidth}) {
    padding-top: 30px;
  }
`
