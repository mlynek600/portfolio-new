import React from 'react'
import Seo from '../components/Seo/Seo'
import Layout from '../components/layout'
import Home from '../components/Home/Home'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import MobileMenu from '../components/MobileMenu/MobileMenu'

const IndexPage: React.FC = () => (
  <>
    <Seo />

    <Layout>
      <MobileMenu />

      <Home />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
