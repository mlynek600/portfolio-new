import React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
}

const SectionTitle: React.FC<Props> = ({ text }: Props) => (
  <Title>{text}</Title>
)

const Title = styled.h3`
  position: relative;
  padding-left: 40px;
  font-size: ${({ theme }) => theme.fontSize.smallTitle};
  margin-bottom: 10px;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-left: 50px;
    font-size: ${({ theme }) => theme.fontSize.semiTitle};

    :before {
      width: 36px;
    }
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.m}) {
    padding-left: 60px;
    font-size: ${({ theme }) => theme.fontSize.title};
    width: auto;
  }
`

export default SectionTitle
