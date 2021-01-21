import React, { useState } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import { ContentContainer, FadeInAnimation } from '../UI'
import SectionTitle from '../SectionTitle'

import ProjectsList from './ProjectsList'
import VisibilitySensor from '../VisibilitySensor/VisibilitySensor'

const Projects: React.FC = () => {
  type ProjectCategoriesType = 'Commercial' | 'Own'
  const projectsCategories: ProjectCategoriesType[] = ['Commercial', 'Own']
  const historyState: ProjectCategoriesType | null = window.history.state
  const initialCategory: ProjectCategoriesType =
    historyState || 'Commercial'

  const [
    projectsCategory,
    setProjectsCategory,
  ] = useState<ProjectCategoriesType>(initialCategory)

  const categoryButtons = projectsCategories.map(category => (
    <CategoryButton
      key={category}
      isActive={projectsCategory === category}
      onClick={() => setProjectsCategory(category)}
    >
      <CategoryButtonText>{category}</CategoryButtonText>
    </CategoryButton>
  ))

  const onProjectLinkClick = (link: string) => navigate(link)
  history.pushState(projectsCategory, 'projectsCategory')

  return (
    <Wrapper id="projects">
      <ContentContainer>
        <SectionTitle text="Projects" />

        <SectionStyle>
          <CategoriesContainer>{categoryButtons}</CategoriesContainer>

          <VisibilitySensor once>
            {({ isVisible }) => (
              <FadeInAnimation isVisible={isVisible}>
                <ProjectsList
                  category={projectsCategory}
                  onProjectLinkClick={onProjectLinkClick}
                />
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
  width: 100%;
  justify-content: center;
`

const CategoryButton = styled.button<{ isActive: boolean }>`
  margin: 0px 30px;
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};
  text-decoration-color: ${({ theme }) => theme.colors.purple};
  text-decoration-thickness: 3px;
  text-underline-offset: 3px;
`

const CategoryButtonText = styled.h1``

export default Projects