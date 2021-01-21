import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Skills from '../components/Skills/Skills'
import { ProjectsSection } from '../components/Projects/ProjectsSection'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'

const IndexPage: React.FC = () => (
  <>
    <Seo />

    <Layout>
      <MobileMenu />

      <Hero />
      <Skills />
      <ProjectsSection />
      <Footer />
    </Layout>
  </>
)

export default IndexPage
