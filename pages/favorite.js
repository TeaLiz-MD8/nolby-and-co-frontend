import React, { useMemo, useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Wrapper from '@/components/Wrapper';
import { useSelector } from 'react-redux';
import FavoriteCart from '@/components/FavoriteCart';


const Favorite = () => {

    const {cartFavorite} = useSelector((state) => state.cart);

  return (
    <div className='w-full md:pt-16 bg-milk h-screen'>

        <Wrapper>

          {cartFavorite.length > 0 && (
            <>
              <div className='max-w-full mx-auto pt-8 md:pt-0 flex flex-row gap-6'>
                  <div className='text-black text-2xl md:text-4xl mb-9 font-medium leading-tight'>
                      Избранное
                  </div>
                  <div className='text-black text-xs md:text-base mb-9 font-medium leading-tight'>
                    {cartFavorite.length}
                </div>
              </div>

              <div className='flex bg-milk pb-16'>
                    <div className='flex gap-6 flex-wrap'>
                        {cartFavorite.map((item) => (
                            <FavoriteCart key={item.id} data={item}/>
                        ))}
                    </div>
              </div>
            </>
            )}

            {/* Экран пустой корзины */}
            {cartFavorite.length < 1 && (<div className='flex flex-col items-center pb-[64px] md:-mt-14'>
                <Image
                    src="/favicon_NolbyAndCo.png"
                    width={300}
                    height={300}
                    className='w-[300px] md:w-[400px]'
                />
                <span className='text-xl text-black font-semibold'>
                    В избранном пока нет товаров...
                </span>
                <Link
                    href="/catalog"
                    className='py-5 px-9 rounded-xl bg-red text-milk text-2xl font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'
                >
                     В каталог
                </Link>
            </div> 
          )}

        </Wrapper>
    </div>
  )
}

export default Favorite
