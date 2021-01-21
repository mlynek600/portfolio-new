import React from 'react'

import Carousel from 'react-multi-carousel'
import styled, { keyframes } from 'styled-components'
import 'react-multi-carousel/lib/styles.css'

import { useWindowSize } from '../../hooks'

import ProjectCard from './ProjectCard'
import { projectsData } from './projectsData'

type PackagesCardsProps = {
  category: 'Commercial' | 'Own'

  onProjectLinkClick: (link: string) => Promise<void>
}

const PackagesCards: React.FC<PackagesCardsProps> = ({
  category,
  onProjectLinkClick,
}) => {
  const isCommercialCategory = category === 'Commercial'

  const { width } = useWindowSize()

  const deviceType =
    width < 1024 ? (width < 464 ? 'mobile' : 'tablet') : 'desktop'

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1023 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  const projectsCategoryData = isCommercialCategory
    ? projectsData.commercialProjects
    : projectsData.ownProjects

  const cardElements = projectsCategoryData.map(data => {
    const { name, icon, description, link } = data

    return (
      <ProjectCard
        onProjectLinkClick={onProjectLinkClick}
        icon={icon}
        link={link}
        key={name}
        name={name}
        description={description}
        isCommercialCategory={isCommercialCategory}
      ></ProjectCard>
    )
  })

  const projectsElement = isCommercialCategory ? (
    <CommercialProjectsCards>{cardElements}</CommercialProjectsCards>
  ) : (
    <OwnProjectsCards>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        transitionDuration={500}
        deviceType={deviceType}
      >
        {cardElements}
      </Carousel>
    </OwnProjectsCards>
  )

  return <Wrapper>{projectsElement}</Wrapper>
}

const Wrapper = styled.div`
  margin-top: 30px;
  max-width: 90vw;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    max-width: 80vw;
  }

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    max-width: 70vw;
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    max-width: 60vw;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    max-width: 80vw;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.l}) {
    max-width: 65vw;
  }
`

const changeOpacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const CommercialProjectsCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  animation: ${changeOpacity} 0.2s ease-in;
`

const OwnProjectsCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${changeOpacity} 0.2s ease-in;
`

export default PackagesCards
