import React from 'react'
import styled from 'styled-components'
import GithubIcon from '../../images/projects/githubIconGray.svg'
import { useWindowSize } from '../../hooks'

type ProjectsCardProps = {
  name: string
  description: string
  link: string
  icon: JSX.Element
  isCommercialCategory: boolean

  onProjectLinkClick: (link: string) => Promise<void>
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  name,
  description,
  link,
  icon,
  isCommercialCategory,

  onProjectLinkClick,
}) => {
  const { width } = useWindowSize()

  const isMobileNav = width < 900 ? true : false

  const githubIconElement = !isCommercialCategory && (
    <GithubIconButton onClick={() => onProjectLinkClick(link)}>
      <GithubIcon />
    </GithubIconButton>
  )

  const titleElement = !isCommercialCategory && <Title>{name}</Title>

  const linkElement = isCommercialCategory && (
    <LinkButton onClick={() => onProjectLinkClick(link)}>
      <LinkText>LINK</LinkText>
    </LinkButton>
  )

  return (
    <Container isMobileNav={isMobileNav}>
      <Card>
        <IconContainer>{icon}</IconContainer>
        {titleElement}

        <Description>{description}</Description>

        {githubIconElement}
        {linkElement}
      </Card>
    </Container>
  )
}

const Container = styled.div<{ isMobileNav: boolean }>`
  display: flex;
  justify-content: center;
  opacity: ${props => (props.isMobileNav ? 1 : 0.7)};
  transition: opacity 0.5s ease-out;

  :hover {
    opacity: 1;
  }
`

const Card = styled.div<{ centered?: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  margin: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  max-width: 300px;
  height: 400px;

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    max-width: 400px;
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.bigText};
  color: ${({ theme }) => theme.colors.purple};

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    font-size: ${({ theme }) => theme.fontSize.s25};
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.smallTitle};
  }
`

const Description = styled.p`
  margin-bottom: 25px;
  margin-top: 25px;
  color: ${({ theme }) => theme.colors.darkGreen};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.text};
    margin-bottom: 30px;
  }
`

const GithubIconButton = styled.button`
  position: absolute;
  bottom: 35px;

  :hover {
    transform: scale(1.2);
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.m}) {
    bottom: 45px;
  }
`

const IconContainer = styled.div`
  height: 120px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  svg {
    width: 80%;
    padding: 20px;
  }
`

const LinkButton = styled.button`
  position: absolute;
  bottom: 50px;
`

const LinkText = styled.p`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.purpleGrey};
  font-size: ${({ theme }) => theme.fontSize.s20};
`

export default ProjectsCard
