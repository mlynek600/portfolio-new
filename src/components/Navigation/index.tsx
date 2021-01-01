import React from 'react'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'
import navigationData from '../../constants/navigation'

const Navigation: React.FC = () => (
  <Wrapper>
    <button onClick={() => window.scrollTo({ top: 0 })}>
      {/* <Logo src={} /> */}
    </button>

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
  justify-content: space-between;
`

const NavigationLinksContainer = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.rwd.tablet.m}) {
    display: block;
  }
`

const LinkItem = styled.button`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.fontSize.text};
  margin-left: 30px;
  transition: color 0.2s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.red};
  }
`

export default Navigation
