import React from 'react'
import styled from 'styled-components'

import StarWarsIcon from '../../images/projects/myProjects/starwarsIcon.svg'
import NewsIcon from '../../images/projects/myProjects/newsIcon.svg'
import TodoIcon from '../../images/projects/myProjects/todoIcon.svg'
import MoviesIcon from '../../images/projects/myProjects/moviesIcon.svg'
import QuizIcon from '../../images/projects/myProjects/quizIcon.svg'
import HotelsIcon from '../../images/projects/myProjects/hotelsIcon.svg'
import PortfolioIcon from '../../images/projects/myProjects/portfolioIcon.svg'
import sixBridgesLogo from '../../images/projects/commercial/sixBridgesLogo.png'
import groupfireLogo from '../../images/projects/commercial/groupfireLogo.png'

type ProjectType = {
  name: string
  description: string
  link: string
  icon: JSX.Element
}

type ProjectsDataType = {
  commercialProjects: ProjectType[]
  ownProjects: ProjectType[]
}

const CompanyLogo = styled.img`
  width: 250px;
  padding-top: 20px;
`

const projectsData: ProjectsDataType = {
  commercialProjects: [
    {
      name: 'Groupfire',
      description:
        'Community and membership platform with many features like posting, events, payments, chat and more. Created with React, Redux and TypeScript. Fully tested with e2e tests implemented with Protractor. The team has been using Jira for CI/CD.',
      link: 'https://www.groupfire.com/',
      icon: <CompanyLogo src={groupfireLogo} />,
    },
    {
      name: '6bridges',
      description:
        'Software house website created with React, TypeScript, Gatsby, styled-components and react-spring library for animations. It was created taking into account responsive web design.',
      link: 'https://6bridges.io/',
      icon: <CompanyLogo src={sixBridgesLogo} />,
    },
  ],
  ownProjects: [
    {
      name: 'Hotels',
      description:
        'App for booking hotels. It fetches hotels data from mockApi. Created with React, Context API, TypeScript, Gatsby.js and axios.',
      link: 'https://github.com/mlynek600/hotels',
      icon: <HotelsIcon />,
    },
    {
      name: 'Star Wars',
      description:
        'Star Wars characters and movies viewer. Created with React, Redux and TypeScript.',
      link: 'https://github.com/mlynek600/starwars',
      icon: <StarWarsIcon />,
    },
    {
      name: 'Portfolio',
      description:
        'My portfolio website you are looking at right now! Created with React, TypeScript, Gatsby.js, styled-components and some animation libraries.',
      link: 'https://github.com/mlynek600/portfolio-new',
      icon: <PortfolioIcon />,
    },
    {
      name: 'News App',
      description:
        'News application - display news in different categories and languages. Created with React and Node.js.',
      link: 'https://github.com/mlynek600/react-news-app',
      icon: <NewsIcon />,
    },
    {
      name: 'To-do App',
      description: 'Simple to-do app created with React and Bootstrap.',
      link: 'https://github.com/mlynek600/react-to-do',
      icon: <TodoIcon />,
    },
    {
      name: 'Movies',
      description:
        'Site with movies and marks which uses local storage and cookies. Created with JavaScript, Webpack and Sass.',
      link: 'https://github.com/mlynek600/movies',
      icon: <MoviesIcon />,
    },
    {
      name: 'Quiz game',
      description:
        'Quiz game with difficult questions and nice music in background. Created with JavaScript and Bootstrap.',
      link: 'https://github.com/mlynek600/quiz',
      icon: <QuizIcon />,
    },
  ],
}

export default projectsData
