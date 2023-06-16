import React from 'react';
import ProductCard from '@/components/ProductCard';
import Wrapper from '@/components/Wrapper';



const Category = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
          <div className='text-[20px] md:text-[24px] md-5 font-medium leading-light'>
            Художественная литература
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 my-6 px-8 md:px-0">
            
        </div>

      </Wrapper> 
    </div>
  )
};


export default Category;