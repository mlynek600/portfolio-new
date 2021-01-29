import React, { ReactElement, useState } from 'react'

import VSensor from 'react-visibility-sensor'

type AnimationFunction = (args: {
  isVisible: boolean
}) => ReactElement[] | ReactElement

type VisibilitySensorProps = {
  once?: boolean

  children: AnimationFunction
}

const VisibilitySensor: React.FC<VisibilitySensorProps> = ({
  once,
  children,
}) => {
  const [isActive, setIsActive] = useState(true)

  return (
    <VSensor
      active={isActive}
      partialVisibility
      minTopValue={100}
      onChange={isVisible => {
        once && isVisible && setIsActive(false)
      }}
    >
      {/* eslint-disable-next-line */}
      { /* @ts-ignore */}
      {({ isVisible }) => children({ isVisible })}
    </VSensor>
  )
}
export default VisibilitySensor
