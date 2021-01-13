import React, { useState } from 'react'
import styled from 'styled-components'

import ContentContainer from '../UI/ContentContainer'
import SectionTitle from '../SectionTitle'

import ProjectsCards from './ProjectsCards'
import VisibilitySensor from '../VisibilitySensor'
import FadeInAnimation from '../UI/FadeInAnimation'

export const ProjectsSection: React.FC = () => {
  const categories = ['Commercial', 'Own']
  type CategoriesType = typeof categories[number]

  const [activeButton, setActiveButton] = useState<CategoriesType>(
    'Commercial'
  )

  const categoryButtons = categories.map(category => (
    <CategoryButton
      key={category}
      isActive={activeButton === category}
      onClick={() => setActiveButton(category)}
    >
      <CategoryButtonText>{category}</CategoryButtonText>
    </CategoryButton>
  ))

  return (
    <Wrapper id="projects">
      <ContentContainer>
        <SectionTitle text="Projects" />

        <SectionStyle>
          <CategoriesContainer>{categoryButtons}</CategoriesContainer>

          <VisibilitySensor once>
            {({ isVisible }) => (
              <FadeInAnimation isVisible={isVisible}>
                <ProjectsCards />
              </FadeInAnimation>
            )}
          </VisibilitySensor>
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

const CategoriesContainer = styled.div`
  display: flex;
  padding-top: 30px;
`

const CategoryButton = styled.button<{ isActive: boolean }>`
  padding: 0px 30px;
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};
`

const CategoryButtonText = styled.h1``
