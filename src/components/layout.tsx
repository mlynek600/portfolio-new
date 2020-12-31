import React, { ReactChild, ReactChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import GlobalStyle from '../utils/globalStyles'
import '../static/fonts/fonts.css'

type Props = {
  children: ReactChild | ReactChildren | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
