import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Failed = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[700px] p-6 mx-auto flex flex-col items-center">
                    <div className="text-4xl font-medium">Проблемы!</div>
                    <div className="text-base mt-6">
                        Для подробных сведений напишите на почту 
                    </div>
                    <div className="underline pb-9">help_bookstore@mail.com</div>

                    <Link href="/" className="w-[360px] flex justify-center py-5 px-5 rounded-xl bg-red text-milk text-2xl font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
                        Продолжить покупки
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Failed;