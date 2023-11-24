import React from 'react'

import styled from 'styled-components'

import StarWarsIcon from '../../images/projects/myProjects/starwarsIcon.svg'
import HotelsIcon from '../../images/projects/myProjects/hotelsIcon.svg'
import PortfolioIcon from '../../images/projects/myProjects/portfolioIcon.svg'
import SpaceGameIcon from '../../images/projects/myProjects/spaceGameIcon.svg'

type ProjectType = {
  name: string
  description: string
  link: string
  icon: JSX.Element
}

const CompanyLogo = styled.img`
  width: 250px;
  padding-top: 40px;
`

const projectsData: ProjectType[] = [
  {
    name: 'Hotels',
    description:
      'App for booking hotels. It fetches hotels data from mockApi. Created with React, Context API, TypeScript, Gatsby.js and axios.',
    link: 'https://github.com/mlynek600/hotels',
    icon: <HotelsIcon />
  },
  {
    name: 'Space game',
    description:
      'Simple game created with React and Material UI. You can draw your card with Star Wars character or starship and play against the computer. App tested with Jest.',
    link: 'https://github.com/mlynek600/space-game',
    icon: <SpaceGameIcon />
  },
  {
    name: 'Star Wars',
    description:
      'Star Wars characters and movies viewer. Created with React, Redux and TypeScript.',
    link: 'https://github.com/mlynek600/starwars',
    icon: <StarWarsIcon />
  },
  {
    name: 'Portfolio',
    description:
      'My portfolio website you are looking at right now! Created with React, TypeScript, Gatsby.js, styled-components and some animation libraries.',
    link: 'https://github.com/mlynek600/portfolio-new',
    icon: <PortfolioIcon />
  },
]

export default projectsData
