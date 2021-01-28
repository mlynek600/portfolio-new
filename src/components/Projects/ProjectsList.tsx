import React from 'react'

import styled from 'styled-components'

import { useWindowSize } from '../../hooks'

import { Carousel } from '../UI'

import ProjectsCard from './ProjectsCard'
import projectsData from './projectsData'

type ProjectsListProps = {
  category: 'Commercial' | 'Own'

  onProjectLinkClick: (link: string) => Promise<void>
}

const ProjectsList: React.FC<ProjectsListProps> = ({
  category,

  onProjectLinkClick,
}) => {
  const isCommercialCategory = category === 'Commercial'

  const { width } = useWindowSize()

  const deviceType =
    width < 1024 ? (width < 768 ? 'mobile' : 'tablet') : 'desktop'

  const projectsCategoryData = isCommercialCategory
    ? projectsData.commercialProjects
    : projectsData.ownProjects

  const cardElements = projectsCategoryData.map(data => {
    const { name, icon, description, link } = data

    return (
      <ProjectsCard
        onProjectLinkClick={onProjectLinkClick}
        icon={icon}
        link={link}
        key={name}
        name={name}
        description={description}
        isCommercialCategory={isCommercialCategory}
      ></ProjectsCard>
    )
  })

  const commercialProjects =
    deviceType !== 'desktop' ? (
      <Carousel>{cardElements}</Carousel>
    ) : (
      cardElements
    )

  const ownProjects = <Carousel>{cardElements}</Carousel>

  const projectsElement = isCommercialCategory
    ? commercialProjects
    : ownProjects

  return (
    <Wrapper>
      <ProjectsCardsContainer>{projectsElement}</ProjectsCardsContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 30px;
  max-width: 90vw;

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    max-width: 80vw;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.l}) {
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
