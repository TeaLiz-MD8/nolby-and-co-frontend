import React from 'react';
import {useState} from 'react';
import {AiOutlineDelete} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlineMinus} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import Image from "next/image";
import { updateCart, removeFromCart} from '@/store/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ data}) => {

    const p = data.attributes;

    {/* Count tovars*/}
    const [count, setQuantity] = useState(1);

    const decrement = () => {
        setQuantity (prevState => {
            if(prevState === 1) return 1
            return prevState - 1
        });
    }

    const increment = () => {
        setQuantity (prevState => prevState + 1);
    }
    {/* Count tovars*/}

    const dispatch = useDispatch();

    const updateCartItem = (e, key) => {
        let payload = {
            key,
            val: key === "count" ? parseInt(e.target.value) : e.target.value,
            id: data.id,
        };
        dispatch(updateCart(payload));
    }

    
  return ( <div className='flex py-6 gap-6'>
        <div className='shrink-0 aspect-square w-[50px] md:w-[152px] border border-green'>
            <Image
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
                width={152}
                height={214}
            />
        </div>
        <div className='w-full flex flex-col md:flex-row justify-between gap-3'>
            <div className='flex flex-col w-[200px] md:w-[300px]'>
                    <div className='text-xl md:text-2xl font-medium text-black'> {p.name} </div>
                    <div className='text-sm md:text-base font-regular text-black'> {p.author} </div>
            </div>
            <div className='flex items-start'>
                {/* количество товаров, избранное, удаление */}
                <div className='flex items-center gap-2 md:gap-10 text-black'>
                    <div>
                        <AiOutlineHeart className="text-[20px] md:text-[24px] cursor-pointer hover:text-red/[0.75]"/>
                    </div>

                    {/*
                    <div className='flex flex-row border border-black rounded-md items-center'>
                        <AiOutlineMinus 
                            className="w-[40px] text-[20px] md:text-[24px] cursor-pointer hover:text-black/[0.75]"
                            onClick={decrement}
                        /> 
                        <div className='w-[40px] flex justify-center border-x border-black'> {count} </div>
                        <AiOutlinePlus
                            className="w-[40px] text-[20px] md:text-[24px] cursor-pointer hover:text-black/[0.75]"
                            onClick={increment}
                        /> 
                    </div> 
                    */}

                    <select
                        className="hover:text-black bg-milk"
                        onChange={(e) => updateCartItem(e, "quantity")}
                        >
                        {Array.from(
                            { length: 10 },
                            (_, i) => i + 1
                        ).map((q, i) => {
                        return (
                            <option
                            key={i}
                            value={q}
                            selected={data.quantity === q}
                            >
                            {q}
                            </option>
                        );
                        })}
                    </select>

                    <div>  <AiOutlineDelete
                        onClick={() =>
                            dispatch(removeFromCart({id: data.id}))
                        }
                    className="text-[20px] md:text-[24px] cursor-pointer hover:text-black/[0.75]"/> </div>
                </div>
            </div>
            <div className='w-[150px] flex justify-start md:justify-end text-2xl md:text-4xl font-medium text-black'>
                 {p.price} р
            </div>
        </div>
    </div>
  )
};


export default CartItem;