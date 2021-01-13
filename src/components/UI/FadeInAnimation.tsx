import React, { ReactElement } from 'react'
import { animated, useSpring } from 'react-spring'

type Props = {
  isVisible: boolean
  children: ReactElement
  fromRight?: boolean
}

const FadeInAnimation: React.FC<Props> = ({
  isVisible,
  children,
  fromRight,
}) => {
  const fromRightTransform = isVisible
    ? 'translateX(0px)'
    : 'translateX(250px)'

  const defaultransform = isVisible
    ? 'translateY(0px)'
    : 'translateY(50px)'

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: fromRight ? fromRightTransform : defaultransform,
    transitionDuration: fromRight ? '3s' : '0.1s',
  })
  return <animated.div style={props}>{children}</animated.div>
}

export default FadeInAnimation
