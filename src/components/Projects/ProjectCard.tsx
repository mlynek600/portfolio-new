import React from 'react'
import styled from 'styled-components'
import GithubIcon from '../../images/githubIcon.svg'

type ProjectCardProps = {
  name: string
  description: string
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  link,
}) => (
  <Container>
    <Card>
      <Title>{name}</Title>

      <Description>{description}</Description>

      <GithubIconContainer href={link}>
        <GithubIcon />
      </GithubIconContainer>
    </Card>
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
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
  max-width: 450px;
  height: 400px;
`

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.bigText};
  color: ${({ theme }) => theme.colors.darkGreen};

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    font-size: ${({ theme }) => theme.fontSize.s25};
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.smallTitle};
  }
`

const Description = styled.p`
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.darkGreen};
  font-size: ${({ theme }) => theme.fontSize.smallText};

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.text};
    margin-bottom: 30px;
  }
`

const GithubIconContainer = styled.a`
  padding: 7px 30px;
  position: absolute;
  bottom: 35px;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.m}) {
    padding: 10px 35px;
    bottom: 45px;
  }
`

export default ProjectCard
