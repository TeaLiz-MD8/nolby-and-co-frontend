import Link from "next/link";
import React from 'react';

import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineInbox} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import { useSelector } from "react-redux";

const IconMenu = () => {

    const { cartFavorite } = useSelector((state => state.cart));
    const { cartItems } = useSelector((state => state.cart));

  return (
    <div className="flex flex-row gap-5 ">

        <Link href="/delivery">
            <div className="w-8 md:w-12 h-8 md:h-12 flex justify-center items-center cursor-pointer relative"> 
                <AiOutlineInbox className="text-[20px] md:text-[24px] hover:hover:text-dark-milk/[0.75]" />
            </div>
        </Link>

        <Link href="/favorite">
            <div className="w-8 md:w-12 h-8 md:h-12 flex justify-center items-center cursor-pointer relative"> 
                <AiOutlineHeart className="text-[20px] md:text-[24px] hover:hover:text-dark-milk/[0.75]" />
                { cartFavorite.length > 0 && ( 
                <div className="h-[12px] md:h-[20px] min-w-[16px] md:min-w-[18px] rounded-full bg-red absolute top-1 left-5 md:left-7 text-milk text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]"> {cartFavorite.length} </div>
                )}
            </div>
        </Link>

        <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 flex justify-center items-center cursor-pointer relative"> 
                <AiOutlineShoppingCart className="text-[20px] md:text-[24px] hover:hover:text-dark-milk/[0.75]"/>
                { cartItems.length > 0 && ( 
                    <div className="h-[16px] md:h-[20px] min-w-[16px] md:min-w-[18px] rounded-full bg-red absolute top-1 left-5 md:left-7 text-milk text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                        {cartItems.length}
                    </div>
                )}
            </div>
        </Link>

    </div>
  )
}

export default IconMenu