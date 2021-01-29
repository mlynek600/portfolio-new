import React from 'react'

import styled, { css } from 'styled-components'

import FacebookIcon from '../../images/footer/facebookIcon.svg'
import LinkedinIcon from '../../images/footer/linkedinIcon.svg'
import CodewarsIcon from '../../images/footer/codewarsIcon.svg'
import GithubIcon from '../../images/footer/githubIcon.svg'

import VisibilitySensor from '../VisibilitySensor/VisibilitySensor'
import {
  FadeInAnimation,
  ContentContainer,
  Wrapper as ContentWrapper,
} from '../UI'

const Contact: React.FC = () => {
  const SOCIALS_DATA: { icon: string; link: string }[] = [
    {
      icon: GithubIcon,
      link: 'https://github.com/mlynek600',
    },
    {
      icon: LinkedinIcon,
      link: 'https://www.linkedin.com/in/mlynek600/',
    },
    {
      icon: CodewarsIcon,
      link: 'https://www.codewars.com/users/mlynek600',
    },
    {
      icon: FacebookIcon,
      link: 'https://www.facebook.com/mlynek600/',
    },
  ]

  const socialComponents = SOCIALS_DATA.map(({ icon: Icon, link }) => (
    <SocialLink key={link} href={link}>
      <IconContainer>
        <Icon />
      </IconContainer>
    </SocialLink>
  ))

  const phone = '+48 788 512 824'
  const email = 'adam.wiktor.mlynarczyk@gmail.com'

  const year = new Date().getFullYear()
  const copyright = '\u00A9'

  return (
    <Wrapper id="contact">
      <FooterContainer>
        <ContentContainer>
          <FooterMenuContainer>
            <InfoContainer>
              <VisibilitySensor once>
                {({ isVisible }) => (
                  <FadeInAnimation isVisible={isVisible} fromLeft>
                    <InfoColumn>
                      <Title>Contact me</Title>

                      <Info as="a" href={`tel:${phone}`}>
                        {phone}
                      </Info>

                      <Info as="a" href={`mailto:${email}`}>
                        {email}
                      </Info>
                    </InfoColumn>
                  </FadeInAnimation>
                )}
              </VisibilitySensor>
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
            Adam Młynarczyk {copyright} {year}
          </RightsInfo>

          <SocialsContainer>{socialComponents}</SocialsContainer>
        </FooterBottom>
      </ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 100px;

  background: rgb(243, 243, 243);
  background: linear-gradient(
    180deg,
    rgba(243, 243, 243, 1) 0%,
    rgba(60, 24, 116, 0.3085609243697479) 88%
  );

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

    @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
      padding-bottom: 128px;
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
  color: ${({ theme }) => theme.colors.purple};

  ${({ as }) =>
    as === 'a' &&
    css`
      font-family: ${({ theme }) => theme.fonts.semiBold};
      transition: color 0.2s ease-in-out;

      :hover {
        color: ${({ theme }) => theme.colors.red};
      }
    `};

  :first-of-type {
    padding-bottom: 15px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    padding: 0;
    max-width: 190px;
    font-size: ${({ theme }) => theme.fontSize.text};
  }
`

const Title = styled.h3`
  padding-bottom: 40px;
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

const IconContainer = styled.div`
  display: inline-block;

  :hover {
    transform: scale(1.2);
  }
`

export default Contact
