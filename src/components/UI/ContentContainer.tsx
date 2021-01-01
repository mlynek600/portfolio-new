import React, { ReactChildren, ReactElement } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactChildren | ReactElement | JSX.Element[]
}

const ContentContainer: React.FC<Props> = ({ children }) => (
  <Wrapper>
    <GridContainer>{children}</GridContainer>
  </Wrapper>
)

export const GridContainer = styled.div`
  display: grid;
  grid-column: 1/-1;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.maxWidth}) {
    grid-column: 2/8;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    grid-column: 2/12;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.xl}) {
    grid-column: 3/11;
  }
`

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: 1fr;
  padding: 0 16px;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.maxWidth}) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
    padding: 0 32px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
    padding: 0 24px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.xl}) {
    grid-gap: 40px;
    padding: 0 40px;
  }
`

export default ContentContainer
