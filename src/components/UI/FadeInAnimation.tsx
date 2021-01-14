import React, { ReactElement } from 'react'
import { animated, useSpring } from 'react-spring'

type Props = {
  isVisible: boolean
  children: ReactElement
  fromRight?: boolean
  fromLeft?: boolean
}

const FadeInAnimation: React.FC<Props> = ({
  isVisible,
  children,
  fromRight,
  fromLeft,
}) => {
  const fromRightTransform = isVisible
    ? 'translateX(0px)'
    : 'translateX(250px)'

  const fromLeftTransform = isVisible
    ? 'translateX(0px)'
    : 'translateX(-50px)'

  const defaultransform = isVisible
    ? 'translateY(0px)'
    : 'translateY(50px)'

  const getTransformValue = () => {
    if (fromRight) return fromRightTransform
    else if (fromLeft) return fromLeftTransform
    else return defaultransform
  }
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: getTransformValue(),
    transitionDuration: fromRight ? '3s' : '0.1s',
  })
  return <animated.div style={props}>{children}</animated.div>
}

export default FadeInAnimation
