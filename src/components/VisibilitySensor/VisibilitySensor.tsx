import React, { ReactElement, useState } from 'react'
import VSensor from 'react-visibility-sensor'

type AnimationFunction = (args: {
  isVisible: boolean
}) => ReactElement[] | ReactElement

type Props = {
  children: AnimationFunction
  once?: boolean
}

const VisibilitySensor: React.FC<Props> = ({ once, children }) => {
  const [isActive, setIsActive] = useState(true)

  return (
    <VSensor
      active={isActive}
      partialVisibility
      minTopValue={100}
      onChange={(isVisible) => {
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
