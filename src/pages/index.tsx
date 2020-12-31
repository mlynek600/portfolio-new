import React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies/Technologies'
import { ProjectsSection } from '../components/Projects/ProjectsSection'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'

const IndexPage: React.FC = () => (
  <>
    <Seo />

    <Layout>
      <MobileMenu />

      <Hero />
      <Technologies />
      <ProjectsSection />
      <Background>
        <Footer />
      </Background>
    </Layout>
  </>
)
const Background = styled.div`
  padding-top: 25px;
  height: auto;
  background: #fafafa;
  z-index: -10;
  position: absolute;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.rwd.mobile.maxWidth}) {
    margin-top: 20px;
    padding-top: 1px;
  }
`
export default IndexPage
