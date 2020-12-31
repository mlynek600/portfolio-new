import React, { ReactElement } from 'react'
import { animated, useSpring } from 'react-spring'

type Props = {
  isVisible: boolean
  children: ReactElement
}

const FadeInAnimation: React.FC<Props> = ({ isVisible, children }) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
  })
  return <animated.div style={props}>{children}</animated.div>
}

export default FadeInAnimation
