import React from 'react'

import Carousel from 'react-multi-carousel'
import styled from 'styled-components'
import 'react-multi-carousel/lib/styles.css'

import { useWindowSize } from '../../hooks'

import ProjectCard from './ProjectCard'
import { projectsData } from './projectsData'

const PackagesCards: React.FC = () => {
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

  const cardElements = projectsData.ownProjects.map(data => {
    const { name, icon, description, link } = data

    return (
      <ProjectCard
        icon={icon}
        link={link}
        key={name}
        name={name}
        description={description}
      ></ProjectCard>
    )
  })

  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  margin-top: 30px;
  max-width: 90vw;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    max-width: 80vw;
    margin-top: 60px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    max-width: 70vw;
    margin-top: 60px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    max-width: 60vw;
    margin-top: 70px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    max-width: 80vw;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.l}) {
    max-width: 65vw;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default PackagesCards
