import React from 'react'

import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

import navigationData from '../constants/navigation'
import HomeIcon from '../images/mobileMenu/homeIcon.svg'

const MobileMenu: React.FC = () => (
  <Wrapper>
    <MobileNavigationContainer>
      <MobileLinkItem onClick={() => scrollTo('#home')}>
        <HomeIconContainer>
          <HomeIcon />
        </HomeIconContainer>

        <span>Home</span>
      </MobileLinkItem>

      {navigationData.map(navigationItem => {
        const { scrollToId, text } = navigationItem
        const IconComponent = navigationItem.iconComponent

        return (
          <MobileLinkItem
            key={scrollToId}
            onClick={() => scrollTo(scrollToId)}
          >
            {IconComponent}

            <span>{text}</span>
          </MobileLinkItem>
        )
      })}
    </MobileNavigationContainer>
  </Wrapper>
)

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 5px 0;
  background-color: ${({ theme }) => theme.colors.cloud};
  box-shadow: 0px -2px 10px 0px rgba(0, 0, 0, 0.15);

  @media (min-width: ${({ theme }) => theme.rwd.tablet.m}) {
    display: none;
  }
`

const MobileNavigationContainer = styled.nav`
  display: flex;
  align-items: flex-end;
`

const MobileLinkItem = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.deepRed};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-right: 20px;

  :last-of-type {
    margin-right: 0 !important;
  }

  span {
    padding-top: 5px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    margin-right: 30px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    margin-right: 40px;
  }
`

const HomeIconContainer = styled.div`
  width: 26px;
`

export default MobileMenu
