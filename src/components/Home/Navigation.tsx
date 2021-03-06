import React from 'react'

import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

import navigationData from '../../constants/navigation'

const HomeNavigation: React.FC = () => (
  <Wrapper>
    <NavigationLinksContainer>
      {navigationData.map(({ text, scrollToId }) => (
        <LinkItem key={scrollToId} onClick={() => scrollTo(scrollToId)}>
          {text}
        </LinkItem>
      ))}
    </NavigationLinksContainer>
  </Wrapper>
)

const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
`

const NavigationLinksContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.m}) {
    display: block;
  }
`

const LinkItem = styled.button`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.fontSize.text};
  margin-left: 40px;
  transition: color 0.2s ease-in-out;
  letter-spacing: 1.5px;

  :hover {
    color: ${({ theme }) => theme.colors.red};
  }
`

export default HomeNavigation
