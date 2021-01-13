type ProjectsDataType = {
  name: string
  description: string
  link: string
}[]

export const projectsData: ProjectsDataType = [
  {
    name: 'Star Wars',
    description:
      'Star Wars characters and movies viewer. Created with React, Redux and TypeScript.',
    link: 'https://github.com/mlynek600/starwars',
  },
  {
    name: 'News App',
    description:
      'News application - display news in different categories and languages. Created with React and Node.js.',
    link: 'https://github.com/mlynek600/react-news-app',
  },
  {
    name: 'To-do App',
    description: 'Simple to-do app created with React and Bootstrap.',
    link: 'https://github.com/mlynek600/react-to-do',
  },
  {
    name: 'Movies',
    description:
      'Movies site with movies marks, it uses local storage and cookies. Created with JavaScript, Webpack and Sass.',
    link: 'https://github.com/mlynek600/movies',
  },
  {
    name: 'Quiz game',
    description:
      'Quiz game with difficult questions, nice music in background. Created with JavaScript and Bootstrap.',
    link: 'https://github.com/mlynek600/quiz',
  },
]
