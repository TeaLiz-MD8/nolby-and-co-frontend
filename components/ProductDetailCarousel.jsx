import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductDetailCarousel = ({images}) => {
  return (
    <div className=' text-[20px] w-full  max-w-[304px] md:max-w-[504px] mx-auto sticky top-[50px]'>
        <Carousel
            infiniteLoop = {true}
            showIndicators  = {false}
            showStatus  = {false}
            thumbWidth = {64}
            className='productCarousel'
        >
            {images?.map((img) => (
              <img key={img.id} 
               src={img.attributes.url} 
               alt={img.attributes.name} />
            ))}

        </Carousel>
    </div>
  )
}

export default ProductDetailCarousel