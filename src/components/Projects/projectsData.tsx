import React from 'react'
import styled from 'styled-components'

import StarWarsIcon from '../../images/projects/myProjects/starwarsIcon.svg'
import HotelsIcon from '../../images/projects/myProjects/hotelsIcon.svg'
import PortfolioIcon from '../../images/projects/myProjects/portfolioIcon.svg'
import SpaceGameIcon from '../../images/projects/myProjects/spaceGameIcon.svg'

import sixBridgesLogo from '../../images/projects/commercial/sixBridgesLogo.png'
import groupfireLogo from '../../images/projects/commercial/groupfireLogo.png'

type ProjectType = {
  name: string
  description: string
  link: string
  icon: JSX.Element
  type: 'Commercial' | 'Training'
}

const CompanyLogo = styled.img`
  width: 250px;
  padding-top: 40px;
`

const projectsData: ProjectType[] = [
  {
    name: 'Groupfire',
    description:
      'Community and membership platform with many features like posting, events, payments, chat and more. Created with React, Redux and TypeScript. Fully tested with e2e tests implemented with Protractor. The team has been using Jira for CI/CD.',
    link: 'https://www.groupfire.com/',
    icon: <CompanyLogo src={groupfireLogo} />,
    type: 'Commercial',
  },
  {
    name: '6bridges',
    description:
      'Software house website created with React, TypeScript, Gatsby, styled-components and react-spring library for animations. It was created taking into account responsive web design.',
    link: 'https://6bridges.io/',
    icon: <CompanyLogo src={sixBridgesLogo} />,
    type: 'Commercial',
  },
  {
    name: 'Hotels',
    description:
      'App for booking hotels. It fetches hotels data from mockApi. Created with React, Context API, TypeScript, Gatsby.js and axios.',
    link: 'https://github.com/mlynek600/hotels',
    icon: <HotelsIcon />,
    type: 'Training',
  },
  {
    name: 'Space game',
    description:
      'Simple game created with React and Material UI. You can draw your card with Star Wars character or starship and play against the computer. App tested with Jest.',
    link: 'https://github.com/mlynek600/space-game',
    icon: <SpaceGameIcon />,
    type: 'Training',
  },
  {
    name: 'Star Wars',
    description:
      'Star Wars characters and movies viewer. Created with React, Redux and TypeScript.',
    link: 'https://github.com/mlynek600/starwars',
    icon: <StarWarsIcon />,
    type: 'Training',
  },
  {
    name: 'Portfolio',
    description:
      'My portfolio website you are looking at right now! Created with React, TypeScript, Gatsby.js, styled-components and some animation libraries.',
    link: 'https://github.com/mlynek600/portfolio-new',
    icon: <PortfolioIcon />,
    type: 'Training',
  },
]

export default projectsData
