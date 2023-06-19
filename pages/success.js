import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = (order) => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[700px] p-6 mx-auto flex flex-col items-center">
                    <div className="text-4xl font-medium">Поздравляем!</div>
                    <div className="text-base mt-3 mb-6">
                        Ваш заказ успешно оформлен
                    </div>

                    <Link href="/catalog" className="w-[360px] flex justify-center py-4 px-4 rounded-xl bg-red text-milk text-2xl font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
                        Продолжить покупки
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;