import React, {use, useMemo, useState} from 'react';
import Image from "next/image";
import Link from 'next/link';
import Wrapper from '@/components/Wrapper';
import CartItem from "@/components/CartItem";
import {AiOutlineDelete} from "react-icons/ai";
import {AiOutlineCheck} from "react-icons/ai";
import { useSelector } from 'react-redux';

{/* Payment */}
import { makePaymentRequest } from '@/utils/api';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


const Cart = () => {

    const [loading, setLoading] = useState(false);
    const {cartItems} = useSelector((state) => state.cart);

    const subTotal = useMemo(() => {
        return cartItems.reduce((total, val) => total + val.attributes.price, 0)
    }, [cartItems]);

    const handlePayment = async () => {
        try {
            setLoading(true)
            const strpe = await stripePromise;
            const res = await makePaymentRequest("/api/orders", {
                products: cartItems
            })
            await strpe.redirectToCheckout({
                sessionId: res.stripeSession.id,
            })
        } catch (error) {
            setLoading(false)
        }
    }

  return (
    <div className='w-full md:pt-16 bg-milk'>
        <Wrapper>

            {cartItems.length > 0 && (

            <>
            <div className='max-w-full mx-auto mt-8 md:mt-0'>
                <div className='text-black text-2xl md:text-4xl mb-9 font-medium leading-tight'>
                    Корзина
                </div>
            </div>

            <div className='grid place-content-center'>
                <img src='cart_1.png'/>
            </div>

            <div className='flex flex-col gap-12 py-9'>
                <div className=''>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} data={item}/>
                    ))}
                </div>
                <div className='w-full flex flex-col gap-6 md:flex-row md:gap-0 justify-between items-start'>
                    <div className='flex flex-row gap-6 items-center'> {/*Очистить корзину*/}
                        <div> <AiOutlineDelete className="text-[24px] md:text-[36px] cursor-pointer hover:text-black/[0.75]"/> </div>
                        <div className='text-black font-medium text-2xl'> Очистить корзину </div>
                    </div>
                    <div className='flex flex-row gap-6 items-center'> {/*Промокод */}
                        <div className='w-[240px] h-[36px] flex justify-start pl-3 items-center text-base font-thin border border-black rounded-md'> Ввести промокод </div>
                        <div> <AiOutlineCheck className="text-[24px] md:text-[36px] cursor-pointer hover:text-black/[0.75]"/> </div>
                    </div >
                    <div className='flex flex-col mb-16'> {/*Итого*/}
                        <div className='flex flex-row items-center pb-9'>
                            <div className='text-black font-medium text-2xl pr-6'> Итого: </div>
                            <div className='text-black font-medium text-4xl'> {subTotal} р</div>
                        </div>
                        <div>
                            <button className='w-[240px] h-[64px] bg-red text-milk text-2xl font-semibold rounded-xl transition-transform active:scale-95 mb-3 hover:opacity-75' onClick={handlePayment}>
                            Выбор доставки
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
            )}

            {/* Экран пустой корзины */}
            {cartItems.length < 1 && (<div className='flex flex-col items-center pb-[64px] md:-mt-14'>
                <Image
                    src="/favicon_NolbyAndCo.png"
                    width={300}
                    height={300}
                    className='w-[300px] md:w-[400px]'
                />
                <span className='text-xl text-black font-semibold'>
                    В корзине пока нет товаров...
                </span>
                <Link
                    href="/catalog"
                    className='py-5 px-9 rounded-xl bg-red text-milk text-2xl font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'
                >
                     В каталог
                </Link>
            </div> )}
        </Wrapper>
    </div>
  )
}

export default Cart