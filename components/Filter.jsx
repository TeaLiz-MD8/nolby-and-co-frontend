import React from 'react';

const Filter = () => {
  return (
    <div className='text-black'>
        <div className='pb-6'>
            <div className='font-medium text-base pb-2'>
                Категория
            </div>
            <div className='font-normal text-base pl-[24px]'>
                <div className='pb-1 cursor-pointer'>Художественная литература</div> 
                <div className='pb-1 cursor-pointer'>Нонфикшн</div> 
                <div className='pb-1 cursor-pointer'>Учебная литература</div> 
                <div className='pb-1 cursor-pointer'>Искусство</div> 
                <div className='pb-1 cursor-pointer'>История. Политика</div> 
            </div>  
                
        </div>

        <div className='pb-6'>
            <div className='font-medium text-base pb-2'>
                Автор
            </div>
            <input type='text' placeholder='Введите автора' className='w-full max-w-[240px] bg-milk border border-black rounded-md text-black font-thin pl-2'/>
        </div>

        <div className='pb-6'>
            <div className='font-medium text-base pb-2'>
                Страна
            </div>
            <div className='pl-[24px]'>
                <div><input type='checkbox' className='bg-milk'/> <label className='text-base ' > Япония </label></div>
                <div><input type='checkbox'/> <label> Китай </label></div>
                <div><input type='checkbox'/> <label> Южная Корея </label></div>
                <div><input type='checkbox'/> <label> Индонезия </label></div>
                <div><input type='checkbox'/> <label> Таиланд </label></div>
            </div>
        </div>

        <div className='pb-6'>
            <div className='font-medium text-base pb-2'>
                Издательство
            </div>
            <select className='bg-milk '>
                <option value="" className='bg-milk text-base'>Эксмо</option>
                <option value="">Азбука</option>
                <option value="">АСТ</option>
                <option value="">INSPIRIA</option>
            </select>
        </div>

        <div className='pb-6'>
            <div className='font-medium text-base pb-2'>
                Год издания
            </div>
            <div className='flex flex-row'>
                <input type='text' placeholder='от' className='w-[120px] bg-milk border border-black rounded-l-md font-thin pl-2'/>
                <input type='text' placeholder='до' className='w-[120px] bg-milk border border-l-0 border-black rounded-r-md font-thin pl-2'/>
            </div>
        </div>

        <div className='pb-6'>
            <div className='font-medium text-base pb-2'>
                Язык издания
            </div>
            <select className='bg-milk'>
                <option value="">Русский</option>
                <option value="">Иностранный</option>
            </select>
        </div>

        <div className='pb-6'>
            <div className='font-medium text-base pb-2'>
                Переплет
            </div>
            <div className='pl-[24px]'>
                <div><input type='checkbox'/> <label> Твердый </label></div>
                <div><input type='checkbox'/> <label> Мягкий </label></div>
            </div>
        </div>

        <button className='w-[240px] h-[36px] bg-red text-milk text-base font-semibold rounded-[10px] transition-transform active:scale-95 hover:opacity-75'>
            Применить фильтры
        </button>
    </div>
  )
}

export default Filter