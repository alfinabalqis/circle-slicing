import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardTestimoni } from './Card';

const Testimoni = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1440 },
      items: 5,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1440, min: 768 },
      items: 4,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  return(
    <Carousel 
    responsive={responsive}
    arrows={false} 
    showDots={true}
    >
    <CardTestimoni/><CardTestimoni/><CardTestimoni/><CardTestimoni/>
    <CardTestimoni/><CardTestimoni/><CardTestimoni/><CardTestimoni/>
  </Carousel>
  )
}

export default Testimoni