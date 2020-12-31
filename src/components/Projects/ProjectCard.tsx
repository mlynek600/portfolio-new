import React from 'react'
import styled from 'styled-components'

type ProjectsCardProps = {
  name: string,
  description: string,
}

export const ProjectCard: React.FC<ProjectsCardProps> = ({
  name,
  description,
}) => (
  <CardStyle>
    <Name>{name}</Name>
    <Description>{description}</Description>
  </CardStyle>
)

const CardStyle = styled.div`
  margin-top: 40px;
  margin-inline: 20px;
  text-align: center;

  padding-top: 90px;

  background: #ffffff;
  box-shadow: 0px 4px 8px 3px #f2f2f2;
  border-radius: 5px;

  @media (max-width: 606px) {
    margin-inline: 0px;
    margin-top: 10px;
    width: 280px;
    height: 300px;
  }

  @media (min-width: 607px) {
    width: 300px;
    height: 350px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.m}) {
    width: 330px;
    height: 375px;
  }
`

const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.medium};

  @media (max-width: ${({ theme }) => theme.rwd.mobile.maxWidth}) {
    font-size: ${({ theme }) => theme.fontSize.bigText};
    margin-top: 15px;
    margin-bottom: 15px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.bigText};
    margin-top: 24px;
    margin-bottom: 24px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.m}) {
    font-size: ${({ theme }) => theme.fontSize.s20};
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

const Description = styled.p`
  margin-inline: 20px;
  line-height: 1.4;
  font-size: ${({ theme }) => theme.fontSize.semiText};

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    font-size: ${({ theme }) => theme.fontSize.semiText};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.m}) {
    font-size: ${({ theme }) => theme.fontSize.text};
  }
`
