import React from 'react'

import styled from 'styled-components'

import { Carousel } from '../UI'

import ProjectsCard from './Card'
import projectsData from './data'

const ProjectsList: React.FC = () => {
  const cardElements = projectsData.map(data => {
    const { name, icon, description, link, type } = data

    return (
      <ProjectsCard
        icon={icon}
        link={link}
        key={name}
        name={name}
        description={description}
        type={type}
      ></ProjectsCard>
    )
  })

  return (
    <Wrapper>
      <ProjectsCardsContainer>
        <Carousel>{cardElements}</Carousel>
      </ProjectsCardsContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 40px;
  max-width: 90vw;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    margin-top: 70px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    max-width: 80vw;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.xl}) {
    max-width: 65vw;
  }
`

const ProjectsCardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  animation: changeOpacity 0.2s ease-in;

  @keyframes changeOpacity {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

export default ProjectsList
