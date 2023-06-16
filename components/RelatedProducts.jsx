import React from 'react';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';

const RelatedProducts = ({products}) => {

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: {max: 1023, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: {max: 463, min: 0 },
            items: 1,
        }
    };

    return (
        <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>
            <div className='text-4xl font-semibold mb-6 text-center'> Подобрано для вас </div>
            <Carousel 
                responsive={responsive}
            >
                {products?.data?.map((product) => (
                    <ProductCard key = {products?.id} data = {product}/>
                    ))}
            </Carousel>
        </div>
  )
}

export default RelatedProducts