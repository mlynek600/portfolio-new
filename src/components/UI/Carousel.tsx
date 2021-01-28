import React from 'react'

import CarouselComponent from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { useWindowSize } from '../../hooks'

type CarouselProps = {
  children: JSX.Element[]
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const { width } = useWindowSize()

  const deviceType =
    width < 1024 ? (width < 768 ? 'mobile' : 'tablet') : 'desktop'

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  return (
    <CarouselComponent
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={false}
      ssr={true}
      infinite={true}
      autoPlay={false}
      keyBoardControl={true}
      transitionDuration={500}
      deviceType={deviceType}
    >
      {children}
    </CarouselComponent>
  )
}
