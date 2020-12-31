import styled, { css } from 'styled-components'

export default styled.img<{ isMobile?: boolean }>`
  width: 100%;
  height: 100%;
  display: none;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    display: block;
  }

  ${({ isMobile }) =>
    isMobile &&
    css`
      display: block;
      @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
        display: none;
      }
    `};
`
