import React from 'react';
import Wrapper from '@/components/Wrapper';
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import useSWR from 'swr';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Filter from '@/components/Filter';


const maxResult = 6;

const Catalog = ({products}) => {

    const [pageIndex, setPageIndex] = useState(1);
    const {query} = useRouter ();

    useEffect(()=> {
        setPageIndex(1)
    }, [query])

    const { data, error} = useSWR(`/api/products?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`, fetchDataFromApi, 
    {
        fallbackData: products,
    });

  return (
    <div className='w-full md:pt-16 bg-milk md:pb-9 relative'>
        <Wrapper>
            
        <div className='max-w-full mx-auto pt-8 md:pt-0'>
            <div className='text-black text-2xl md:text-4xl mb-9 font-medium leading-tight'>
                    Каталог
            </div>
        </div>

        <div className='flex flex-col md:flex-row gap-6 bg-milk'>

            <div className='basis-1/4'>
                <div className='text-black text-base md:text-2xl mb-6 font-medium leading-tight'>
                    Фильтры
                </div>
                {/*<Filter/>*/}
            </div>

            <div className='basis-3/4'> 
                <div className='text-black text-base md:text-2xl mb-6 font-medium leading-tight'>
                    Результаты поиска
                </div>

                <div className="flex flex-row flex-wrap gap-6 pb-3">
                    {data?.data?.map((product) => (
                    <ProductCard key = {products?.id} data = {product}/>
                    ))}
                </div>

            </div>

        </div>

        {/* Pagination buttons */}
        {data?.meta?.pagination?.total > maxResult && (
            <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                <button
                    className={`py-2 px-4 text-black hover:text-black/[0.75] cursor-pointer`}
                    disabled={pageIndex === 1}
                    onClick={() => setPageIndex(pageIndex - 1)}
                >
                    Предыдущие
                </button>

                <span className="font-semibold">{`${pageIndex} из ${data && data.meta.pagination.pageCount}`}</span>

                <button
                    className={`py-2 px-4 text-black hover:text-black/[0.75] cursor-pointer`}
                    disabled={
                        pageIndex ===
                        (data && data.meta.pagination.pageCount)
                    }
                        onClick={() => setPageIndex(pageIndex + 1)}
                >
                    Следующие
                </button>
            </div>
        )}
        {/* Pagination buttons */}

        </Wrapper>
    </div>
  )
}

export default Catalog

export async function getStaticProps () {
    const products = await fetchDataFromApi(`/api/products?populate=*&pagination[page]=2&pagination[sizePage]=${maxResult}`);
   
    return {
      props: {products}
    }
  }