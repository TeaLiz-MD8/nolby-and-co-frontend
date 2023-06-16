import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {AiOutlineHeart} from "react-icons/ai";

const ProductCard = ({ data: {attributes: p, id}}) => {
  return (
    <Link href={`/product/${p.slug}`} className='pb-6 transform overflow-hidden bg-milk duration-200 hover: cursor-pointer'>
        <Image
          width={240}
          height={338}
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          className='border border-green'
        />
        <div className='w-[240px] flex flex-col justify-between mt-2'>
            <div className='h-[50px]'>
                <h1 className='font-roboto font-medium text-base text-black leading-none'>{p.name}</h1>
                <p className='font-roboto font-regular text-xs text-black'>{p.author}</p>
            </div>
            <div className='flex flex-row justify-between'>
              <h1 className='font-roboto font-medium text-base text-black'>{p.price} р</h1>
              <div className='text-red self-end hover:text-red/[0.75] cursor-pointer'>
                <AiOutlineHeart className="text-[16px] md:text-[24px]" />
              </div>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard