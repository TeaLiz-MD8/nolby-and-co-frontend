import React from 'react';
import Wrapper from '@/components/Wrapper';

const Delivery = () => {
  return (
    <div className='w-full bg-milk md:pt-16 md:pb-16'>
        <Wrapper>

        <div className='max-w-full mx-auto pt-8 md:pt-0'>
                <div className='text-black text-2xl md:text-4xl mb-9 font-medium leading-tight'>
                    Условия доставки и оплаты
                </div>
        </div>

        <div className='flex flex-col md:flex-row gap-6'>
            <div className='basis-7/12'> 
                <div className='text-black text-base md:text-2xl mb-6 font-medium leading-tight'> Как получить заказ </div>
                <div> Доставка работает пределах г. Санкт-Петербург и Ленинградской области. Доставка заказов магазина осуществляется курьерской службой BoxBerry. Отслеживать заказ можно на сайте курьерской службы, в рассылке на почту и в смс-сообщениях, которые отправляются после оформления заказа. </div>
                <div className='flex flex-row gap-6 mt-6'>
                    <div className='basis-1/2'>Заберите заказ в пункте выдачи</div>
                    <div className='basis-1/2 font-semibold'>бесплатно</div>
                </div>
                <div className='flex flex-row gap-6 mt-6'>
                    <div className='basis-1/2'>Доставка курьером</div>
                    <div className='basis-1/2 font-semibold'>
                        <div>от 149 р в пределах КАД</div>
                        <div>от 349 р за пределами КАД</div>
                        <div>бесплатно при заказе от 1000 р</div>
                    </div>
                </div>


            </div>
            <div className='bais-5/12 flex justify-center'> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d64022.1124124821!2d30.296322259801375!3d59.90427535711716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sboxberry!5e0!3m2!1sru!2sru!4v1686839568511!5m2!1sru!2sru" 
                class="w-[280px] md:w-[416px] h-[200px] md:h-[300px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <div className='flex flex-col md:flex-row gap-6'>
            <div className='basis-7/12'> 
                <div className='text-black text-base md:text-2xl mb-6 font-medium leading-tight mt-9'> Как оплатить заказ </div>
                <div className='flex flex-row gap-6 mt-6'>
                    <div className='basis-1/12'> </div>
                    <div className='basis-11/12 font-normal '>
                        <div className='mb-6'>Оплата картой на сайте</div>
                        <div className='mb-6'>Наличными или картой в пункте выдачи</div>
                        <div className='mb-6'>Наличными или картой курьеру</div>
                    </div>
                </div>
                <div> Оплата заказов банковскими картами производится через авторизационный сервер Процессингового центра Яндекс.Кассы. Цена пересылки включается в стоимость заказа автоматически при оформлении.</div>
            </div>
                <div className='bais-5/12'> </div>
         </div>

        </Wrapper>
    </div>
  )
}

export default Delivery