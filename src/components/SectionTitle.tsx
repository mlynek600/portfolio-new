import React from 'react'

import styled from 'styled-components'

type SectionTitleProps = {
  text: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => (
  <Title>{text}</Title>
)

const Title = styled.h3`
  position: relative;
  margin-top: 30px;
  margin-bottom: 10px;
  padding-left: 40px;
  font-size: ${({ theme }) => theme.fontSize.smallTitle};

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-left: 50px;
    font-size: ${({ theme }) => theme.fontSize.semiTitle};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.m}) {
    padding-left: 60px;
    font-size: ${({ theme }) => theme.fontSize.title};
    width: auto;
  }
`

export default SectionTitle
