import React from 'react';
import {useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import { useFetch } from '../../frontend/hooks/useFetch';
import {useNavigate} from 'react-router';

import prod from "../../frontend/public/favicon_NolbyAndCo.png";

const Search = ({setShowSearch}) => {

    //const [query, setQuery] = useState("");
    //const navigate = useNavigate();

    //const onChange = (e) => {
    //    setQuery(e.target.value);
    //};

    //let {data} = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);

    //if (!query.length) {
    //    data = null;
    //}

  return (
    <div className='w-full h-screen fixed z-30 top-0 bg-milk transition-'>
        <div className='flex justify-center mt-8 items-center gap-6 mx-2 md:mx-6'>
            <input
                type='text'
                autoFocus
                placeholder='Введите название'
                //value ={query}
                //onChange={onChange}
                className='w-full max-w-[800px] border rounded-md border-black bg-milk relative px-8 py-2 text-black font-normal text-xs md:text-base'
            />
            <AiOutlineClose onClick={() => setShowSearch(false)} className='items-center text-[36px] text-black hover:text-black/[0.75]'/>
        </div>
        <div>
            <div> 
                {/*{data?.data?.map((item) => ( */}
                    <div 
                         //key={item.id} 
                        className='flex flex-row justify-center mt-8 gap-6 mx-2 md:mx-6' 
                        //onClick={() => {
                        //    navigate("/prodict/" + item.id);
                        //    setShowSearch(false);
                        //    }}
                        >
                        <div> <img
                            src={prod}
                            alt='name'
                            width={64}
                            height={90}
                        
                        />
                    </div>
                    <div className='flex flex-col max-w-[500px]'>
                    <div className='text-black font-medium text-base md:text-2xl hover:text-black/[0.75]'> {/*{item.attributes.name} */} Название книги</div>
                    <div className='text-black font-normal text-xs md:text-base'> {/*{item.attributes.author} */} Автор </div>
                    </div>
                </div> 
                {/* ))} */}
            </div>
        </div>
    </div>
  )
}

export default Search