import React from 'react'
import StarWarsIcon from '../../images/projects/myProjects/starwarsIcon.svg'
import NewsIcon from '../../images/projects/myProjects/newsIcon.svg'
import TodoIcon from '../../images/projects/myProjects/todoIcon.svg'
import MoviesIcon from '../../images/projects/myProjects/moviesIcon.svg'
import QuizIcon from '../../images/projects/myProjects/quizIcon.svg'

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

export const projectsData: ProjectsDataType = {
  commercialProjects: [
    {
      name: 'Groupfire',
      description:
        'Star Wars characters and movies viewer. Created with React, Redux and TypeScript.',
      link: 'https://github.com/mlynek600/starwars',
      icon: <StarWarsIcon />,
    },
    {
      name: '6bridges',
      description:
        'Star Wars characters and movies viewer. Created with React, Redux and TypeScript.',
      link: 'https://github.com/mlynek600/starwars',
      icon: <StarWarsIcon />,
    },
    {
      name: 'Agroturystyka',
      description:
        'Star Wars characters and movies viewer. Created with React, Redux and TypeScript.',
      link: 'https://github.com/mlynek600/starwars',
      icon: <StarWarsIcon />,
    },
  ],
  ownProjects: [
    {
      name: 'Star Wars',
      description:
        'Star Wars characters and movies viewer. Created with React, Redux and TypeScript.',
      link: 'https://github.com/mlynek600/starwars',
      icon: <StarWarsIcon />,
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
        'Movies site with movies marks, it uses local storage and cookies. Created with JavaScript, Webpack and Sass.',
      link: 'https://github.com/mlynek600/movies',
      icon: <MoviesIcon />,
    },
    {
      name: 'Quiz game',
      description:
        'Quiz game with difficult questions, nice music in background. Created with JavaScript and Bootstrap.',
      link: 'https://github.com/mlynek600/quiz',
      icon: <QuizIcon />,
    },
  ],
}
