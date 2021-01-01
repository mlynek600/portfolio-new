import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import styled, { css } from 'styled-components'
import ContentContainer, {
  GridContainer,
  Wrapper as ContentWrapper,
} from '../UI/ContentContainer'

import FacebookIcon from '../../images/facebookIcon.svg'
import LinkedinIcon from '../../images/linkedinIcon.svg'

const Footer: React.FC = () => {
  const SOCIALS_DATA: { icon: string; link: string }[] = [
    {
      icon: FacebookIcon,
      link: 'facebook',
    },
    {
      icon: LinkedinIcon,
      link: 'linkedin',
    },
  ]

  const socialComponents = SOCIALS_DATA.map(({ icon: Icon, link }) => (
    <SocialLink key={link} href={link}>
      <Icon />
    </SocialLink>
  ))

  const phone = ''
  const email = ''

  return (
    <Wrapper id="contact">
      <FooterContainer>
        <ContentContainer>
          <FooterMenuContainer>
            <button onClick={() => scrollTo('#hero')}>
              {/* <Logo src={} alt="" /> */}
            </button>

            <InfoContainer>
              <InfoColumn>
                <Title>Get in touch</Title>
                <Info as="a" href={`tel:${phone}`}>
                  {phone}
                </Info>
                <Info as="a" href={`mailto:${email}`}>
                  {email}
                </Info>
              </InfoColumn>
            </InfoContainer>

            <MobileSocialsContainer>
              {socialComponents}
            </MobileSocialsContainer>
          </FooterMenuContainer>
        </ContentContainer>
      </FooterContainer>

      <ContentContainer>
        <FooterBottom>
          <RightsInfo>
            2020
            <PageLink as="a" href="">
              {' Adam Młynarczyk'}
            </PageLink>
            {', All Rights Reserved.'}
          </RightsInfo>

          <SocialsContainer>{socialComponents}</SocialsContainer>
        </FooterBottom>
      </ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 100px;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    margin-top: 50px;
  }
`

const FooterContainer = styled.div`
  position: relative;

  ${ContentWrapper} {
    padding-top: 70px;
    padding-bottom: 50px;

    @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
      padding-bottom: 120px;
      padding-top: 100px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      ${GridContainer} {
        grid-column: -1/1;
      }
    }

    @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
      padding-bottom: 168px;
    }
  }
`

const FooterMenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    flex-direction: row;
  }
`

const InfoColumn = styled.div`
  padding-top: 50px;
`

const Info = styled.p<{ as?: string }>`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.semiText};
  color: ${({ theme }) => theme.colors.red};

  ${({ as }) =>
    as === 'a' &&
    css`
      font-family: ${({ theme }) => theme.fonts.semiBold};
      transition: color 0.2s ease-in-out;

      :hover {
        color: ${({ theme }) => theme.colors.purple};
      }
    `};

  :first-of-type {
    padding-bottom: 10px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    padding: 0;
    max-width: 190px;
    font-size: ${({ theme }) => theme.fontSize.text};
  }
`

const Title = styled.h3`
  padding-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.s20};
  color: ${({ theme }) => theme.colors.red};
`

const FooterBottom = styled.div`
  display: flex;
  padding: 17px 0;
  justify-content: center;
  margin-bottom: 60px;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.m}) {
    margin-bottom: 0;
  }
`

const SocialsContainer = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    display: block;
  }
`

const MobileSocialsContainer = styled.div`
  display: block;
  padding-top: 40px;
  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    display: none;
  }
`

const SocialLink = styled.a`
  padding-right: 30px;

  :last-of-type {
    padding-right: 0;
  }
`

const RightsInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.smallText};

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    font-size: ${({ theme }) => theme.fontSize.semiText};
  }
`

const PageLink = styled(RightsInfo)`
  color: ${({ theme }) => theme.colors.purple};
`

export default Footer
