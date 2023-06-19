import React from 'react';
import {AiOutlineHeart} from "react-icons/ai";
import { AiOutlineRight } from 'react-icons/ai';
import Wrapper from '@/components/Wrapper';
import ProductDetailCarousel from '@/components/ProductDetailCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import { fetchDataFromApi } from '@/utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, addToFavoriteCart} from "@/store/cartSlice";
import Link from 'next/link';
import {AiFillHeart} from "react-icons/ai";


const ProductDetails = ({product, products}) => {
   
  const dispatch = useDispatch ();   
  const p = product?.data?.[0]?.attributes;
  return (
    <div className='w-full pt-3 md:pt-6 pb-3 md:pb-16 bg-milk'>
        <Wrapper>

            {/* Breadcrumbs*/}
            <div className='pb-3 md:pb-6 flex justify-center md:justify-start'>
                <div className='flex flex-row items-center gap-1'>

                <Link href="/" className='text-[10px] text-black/[0.75] hover:text-black/[0.5] cursor-pointer'>
                    Главная
                </Link>

                <div> <AiOutlineRight className="text-[12px]"/> </div>

                <Link href="/catalog" className='text-[10px] text-black/[0.75] hover:text-black/[0.5] cursor-pointer'>
                    Каталог
                </Link>

                <div> <AiOutlineRight className="text-[12px]"/> </div>

                <div className='text-[10px] text-black/[0.75]'>
                    {p.categorylist}
                </div>

                <div> <AiOutlineRight className="text-[12px]"/> </div>

                <div className='text-[10px] text-black/[0.75]'>
                    {p.name}
                </div>


                </div>
            </div>
             {/* Breadcrumbs*/}

            <div className='flex flex-col md:flex-row gap-[56px] lg:gap-[112px]'>

                {/* Left side */}
                <div className='w-full md:w-auto flex-[1] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 pt-6 md:pt-0'>
                    <ProductDetailCarousel images={p.image.data}/>
                </div>
                {/* Left side */}

                {/* Right side */}
                <div className='flex-[1]'> 

                    <div className='flex flex-row justify-between items-center gap-6'>

                        
                        <div className='text-4xl font-semibold'>
                            {p.name}
                        </div>

                        <button className="text-red hover:text-red/[0.75] cursor-pointer relative"> 
                            <AiOutlineHeart className="text-[30px] md:text-[36px]"
                            onClick={ () => {
                                dispatch ( addToFavoriteCart ({
                                  ...product?.data?.[0]})); 
                            }}/>
                        </button>
                    </div>

                    <div className='text-base font-regular'>
                        {p.author}
                    </div>
                                         
                    <div className='flex flex-row items-center justify-between pt-12'>
                        <div className='text-4xl font-semibold'>
                            {p.price} р
                        </div>

                        <button className='w-[240px] h-[64px] bg-red text-milk text-2xl font-semibold rounded-[10px] transition-transform active:scale-95 mb-3 hover:opacity-75' onClick={ () => {
                          dispatch ( addToCart ({
                            ...product?.data?.[0],
                            oneQuantityPrice: p.price,
                        })); 
                        }}>
                            В корзину
                        </button>
                    </div>

                    <div className='text-base pt-12'>
                    {p.description}
                    </div>

                    <table className="table-fixed border-separate border-spacing-y-3">
                        <thead>
                            <tr>
                                <th> </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr> 
                                <td className='w-[200px] font-base'> Страна </td>
                                <td className='font-base font-semibold'> {p.country} </td>
                            </tr>
                            <tr>
                                <td className='font-base'> Количество страниц </td>
                                <td className='font-base font-semibold'> {p.number} </td>
                            </tr>
                            <tr>
                                <td className='font-base'> Год издания </td>
                                <td className='font-base font-semibold'> {p.year} </td>
                            </tr>
                            <tr>
                                <td className='font-base'> Язык издания </td>
                                <td className='font-base font-semibold'> {p.language} </td>
                            </tr>
                            <tr>
                                <td className='font-base'> Переплет </td>
                                <td className='font-base font-semibold'> {p.binding} </td>
                            </tr>
                            <tr>
                                <td className='font-base'> Издательство </td>
                                <td className='font-base font-semibold'> {p.publishing} </td>
                            </tr>
                            <tr>
                                <td className='font-base'> Вес книги, гр </td>
                                <td className='font-base font-semibold'> {p.weight} </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
                {/* Right side */}

            </div>

            <RelatedProducts products={ products }/>

        </Wrapper>
    </div>
  )
};

export default ProductDetails;

export async function getStaticPaths() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    const paths = products.data.map( (p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: {slug}}) {
    const product = await fetchDataFromApi (
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][slug][$ne]=${slug}`
    );

    return {
        props: {
            product,
            products
        },
    };
};