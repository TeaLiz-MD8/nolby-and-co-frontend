import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';

const Search = ({setShowSearch}) => {

  return (
    <div className='w-full h-screen fixed z-30 top-0 bg-milk transition-'>
        <div className='flex justify-center mt-8 items-center gap-6 mx-2 md:mx-6'>
            <input
                type='text'
                autoFocus
                placeholder='Введите название'
                className='w-full max-w-[800px] border rounded-md border-black bg-milk relative px-8 py-2 text-black font-normal text-xs md:text-base'
            />
            <AiOutlineClose onClick={() => setShowSearch(false)} className='items-center text-[36px] text-black hover:text-black/[0.75]'/>
        </div>
    </div>
  )
}

export default Search