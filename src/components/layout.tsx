import React, { ReactChild, ReactChildren } from 'react'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../utils/globalStyles'
import theme from '../utils/theme'
import '../static/fonts/fonts.css'

type LayoutProps = {
  children: ReactChild | ReactChildren | JSX.Element[]
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
