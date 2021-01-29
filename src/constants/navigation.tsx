import React from 'react'
import styled from 'styled-components'

import ProjectsIcon from '../images/mobileMenu/projectsIcon.svg'
import ContactIcon from '../images/mobileMenu/contactIcon.svg'
import SkillsIcon from '../images/mobileMenu/skillsIcon.svg'

const ContactIconContainer = styled.div`
  width: 15.5px;
  padding-bottom: 10px;
`

const ProjectsIconContainer = styled.div`
  width: 40px;
  margin-bottom: 0px;
`

const SkillsIconContainer = styled.div`
  width: 18px;
  padding-bottom: 8px;
`

const skillsIcon = (
  <SkillsIconContainer>
    <SkillsIcon />
  </SkillsIconContainer>
)

const projectsIcon = (
  <ProjectsIconContainer>
    <ProjectsIcon />
  </ProjectsIconContainer>
)

const contactIcon = (
  <ContactIconContainer>
    <ContactIcon />
  </ContactIconContainer>
)

export default [
  {
    text: 'Skills',
    scrollToId: '#skills',
    iconComponent: skillsIcon,
  },
  {
    text: 'Projects',
    scrollToId: '#projects',
    iconComponent: projectsIcon,
  },
  {
    text: 'Contact',
    scrollToId: '#contact',
    iconComponent: contactIcon,
  },
]
