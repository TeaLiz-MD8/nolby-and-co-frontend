import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="w-full h-screen bg-milk">

            <div className="pt-16 text-black font-semibold text-4xl text-center"> Упс... </div>
            <div className="text-black font-normal text-xl text-center"> Такой страницы нет </div>
        </div>
    );
}

export default NotFoundPage

