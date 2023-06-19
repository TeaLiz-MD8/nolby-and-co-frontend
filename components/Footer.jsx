import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className=" w-full bg-dark-milk text-black pt-8 pb-16">
            <Wrapper className="">
                <div className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-6">

                      {/* MENU START */}
                      <div className="flex flex-col gap-4 shrink-0">
                        <div className="font-roboto font-medium text-2xl">
                            Интернет-магазин
                        </div>

                        <Link href="/catalog">
                            <div className="font-roboto text-base hover:text-black/[0.75] cursor-pointer">
                                Каталог
                            </div>
                        </Link>

                        <Link href="/delivery">
                            <div className="font-roboto text-base hover:text-black/[0.75] cursor-pointer">
                                Условия доставки и оплаты
                            </div>
                        </Link>

                        <Link href="/favorite">
                            <div className="font-roboto text-base hover:text-black/[0.75] cursor-pointer">
                                Избранное
                            </div>
                        </Link>
                      </div>
                      {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-4">
                            
                          <div className="font-roboto font-medium text-2xl">
                                Пользователям
                            </div>

                            <Link href="/confidential_politic">
                                <div className="font-roboto text-base hover:text-black/[0.75] cursor-pointer">
                                    Политика конфиденциальности
                                </div>
                            </Link>

                            <Link href="/use_rule">
                                <div className="font-roboto text-base hover:text-black/[0.75] cursor-pointer">
                                    Условия использования
                                </div>
                            </Link>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-4">
                            <div className="font-roboto font-medium text-2xl">
                                Контакты
                            </div>
                            <div className="font-roboto font-medium text-xs">
                                Контактный центр:
                            </div>
                            <div onClick={() => window.open('tel:+79969276598')} className="font-roboto text-base hover:text-black/[0.75] cursor-pointer">
                                + 7 996 927 - 65- 98
                            </div>
                            <div className="font-roboto font-medium text-xs">
                                Электронная почта:
                            </div>
                            <div onClick={() => window.open('mailto:help_bookstore@mail.com?subject=Вопосы по сайту')} className="font-roboto text-base hover:text-black/[0.75] cursor-pointer">
                                help_bookstore@mail.com
                            </div>
                        </div>
                        {/* MENU END */}

                </div>
            </Wrapper>
        </footer>
    );
};


export default Footer