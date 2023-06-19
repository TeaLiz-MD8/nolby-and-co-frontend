import React from 'react';
import Image from "next/image";
import { removeFromFavoriteCart } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import {AiFillHeart} from "react-icons/ai";

const FavoriteCart = ({ data }) => {

    const p = data.attributes;
    const dispatch = useDispatch();
  
  return (
        <Link href={`/product/${p.slug}`} className='pb-6 transform overflow-hidden bg-milk duration-200 hover: cursor-pointer'>

            { <Image
            width={240}
            height={338}
            src = { p.thumbnail.data.attributes.url}
            alt={p.name}
            className='border border-green'
            /> }

            <div className='w-[240px] flex flex-col justify-between mt-2'>
                <div className='h-[50px]'>
                    <h1 className='font-roboto font-medium text-base text-black leading-none'>{p.name}</h1>
                    <p className='font-roboto font-regular text-xs text-black'>{p.author}</p>
                </div>
            </div>

            <div className='flex flex-row justify-between w-[240px]'>
                <h1 className='font-roboto font-medium text-base text-black'>{p.price} р</h1>
                <div className='text-red self-end hover:text-red/[0.75] cursor-pointer'>
                    <AiFillHeart 
                        className="text-[20px] md:text-[24px]"
                        onClick={() => dispatch(removeFromFavoriteCart({id: data.id}))}
                    />
                </div>
            </div>

    </Link>
  )
};

export default FavoriteCart;