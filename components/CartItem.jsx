import React from 'react';
import {AiOutlineDelete} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlineMinus} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import Image from "next/image";
import { updateCart, removeFromCart } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';



const CartItem = ({ data }) => {

    const p = data.attributes;

    const dispatch = useDispatch();

    const updateCartItem = (e, key) => {
        let payload = {
            key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            id: data.id,
        };
        dispatch(updateCart(payload));
    }
  return  <div className='flex py-6 md:gap-8'>
        <div className='shrink-0 aspect-square w-[50px] md:w-[152px] border border-green'>
            <Image
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
                width={152}
                height={214}
            />
        </div>
        <div className='w-full flex justify-between'>
            <div className='flex flex-col'>
                    <div className='text-lg md:text-2xl font-medium text-black'> {p.name} </div>
                    <div className='text-sm md:text-base font-regular text-black'> {p.author} </div>
            </div>
            <div className='flex'>
                {/* количество товаров, избранное, удаление */}
                <div className='flex items-start gap-2 md:gap-10 text-black'>
                    <div>  <AiOutlineHeart className="text-[16px] md:text-[24px] cursor-pointer hover:text-black/[0.75]"/> </div>
                    <div className='flex flex-row border border-black rounded-md items-center'>
                        <AiOutlineMinus className="w-[40px] text-[16px] md:text-[24px] cursor-pointer hover:text-black/[0.75]"/> 
                        <div className='w-[40px] flex justify-center border-x border-black'> 1 </div>
                        <AiOutlinePlus className="w-[40px] text-[16px] md:text-[24px] cursor-pointer hover:text-black/[0.75]"/> 
                    </div>
                    <div>  <AiOutlineDelete
                        onClick={() =>
                            dispatch(removeFromCart({id: data.id}))
                        }
                    className="text-[16px] md:text-[24px] cursor-pointer hover:text-black/[0.75]"/> </div>
                </div>
            </div>
            <div className='w-[200px] flex justify-end text-2xl md:text-4xl font-medium text-black'> {p.price} р </div>
        </div>
    </div>;
  
};

export default CartItem;