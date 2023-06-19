import React, {useState, useEffect} from "react";
import Wrapper from "./Wrapper";
import IconMenu from "./IconMenu";

import Link from "next/link";

import {AiOutlineSearch} from "react-icons/ai";
import { fetchDataFromApi } from "@/utils/api";
import Search from "./Search";


const Header = () => {
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrolly] = useState(0);
    const [categories, setCategories] = useState (null);
    const [showSearch, setShowSearch] = useState(false); 


    const controlNavbar = () => {
        if (window.scrollY > 200 ){
            if(window.scrollY > lastScrollY) {
                setShow ("-translate-y-[80px]");
            } else {
                setShow("shadow-sm")
            }
        } else {
            setShow ("translate-y-0")
        }
        setLastScrolly(window.scrollY)
    };

    useEffect ( () => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])

    useEffect( () => {}, [])
    const fetchCategories = async () => {
        const {data} = await fetchDataFromApi ('/api/categories?populate=*');
        setCategories (data);
    }

    return (
        <>
        <header className={`w-full h-[100px] md:h-[64px] bg-green z-20 top-0 transition-transform duration-300 translate-y-0 ${show}`}>

        <Wrapper>
            <div className="h-[44px] md:h-[64px] flex flex-col md:flex-row justify-between items-center">
                
                <div className="basis-6/12 flex flex-row justify-between items-center gap-6 md:gap-0 pt-2 md:pt-0">
            {/* Logo */}
                    <Link href="/"> 
                        <img src="/logo_NolbyAndCo.png" className="h-[44px] md:h-[54px] hover:opacity-75" />
                    </Link>

                    <Link href="/catalog">
                        <div className="font-normal text-milk text-lg md:text-2xl hover:hover:text-dark-milk/[0.75]">
                            Каталог
                        </div>
                    </Link>
                </div>

                {/* Icons and IconMenu */}
                <div className='basis-6/12 flex flex-row justify-end items-end gap-6 text-milk pt-2 md:pt-0'>

                    <div className="w-8 md:w-12 h-8 md:h-12 flex justify-center items-center cursor-pointer relative"> 
                        <AiOutlineSearch className="text-[20px] md:text-[24px] hover:hover:text-dark-milk/[0.75]" onClick={() => setShowSearch (true)} />
                    </div>

                    <IconMenu
                        categories = {categories}
                    />

                </div>
                {/* Icons and IconMenu */}

            </div>
            </Wrapper>
        </header>
        {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    )
}

export default Header