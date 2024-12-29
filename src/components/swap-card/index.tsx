"use client"

import React, { FormEvent, useState } from "react";
import Button from "@/ui/button";
import { CgArrowsExchangeV } from "react-icons/cg";
import { CustomType } from "@/app/type";
import SelectorComponent from "./selector";

const SwapCard = () => {
    const [currentSection, setSection] = useState("swap")


    const [from, setFrom] = useState<CustomType>({
        network: 'Polygon',
        token: 'WBTC',
        amount: 120,
        balance: 100300200
    });
    const [to, setTo] = useState<CustomType>({
        network: 'Polygon',
        token: 'WBTC',
        amount: 120,
        balance: 100300200
    });


    const handleInterChange = () => {
        let temp = from;
        setFrom(to);
        setTo(temp);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(from, to)
    }



    return (
        <div className="w-96">

            <div className="flex justify-around mb-2  bg-white  rounded-md shadow-lg">
                <Button onClick={() => setSection('swap')} className={` w-1/3  ${currentSection === 'swap' ? 'bg-blue-500 text-white shadow-md' : ""}`}>Swap</Button>
                <Button onClick={() => setSection('buy')} className={` w-1/3 ${currentSection === 'buy' ? 'bg-blue-500 text-white shadow-md' : ""}`}>Buy</Button>
                <Button onClick={() => setSection('sell')} className={` w-1/3 ${currentSection === 'sell' ? 'bg-blue-500 text-white shadow-md' : ""}`}>Sell</Button>
            </div>



            <form action="" className="w-full flex flex-col items-center  bg-white p-5 rounded-md shadow-xl" onSubmit={onSubmit}>
                <SelectorComponent state={from} onChange={setFrom}></SelectorComponent>


                <div className="flex gap-1 w-full items-center">
                    <div className="h-0.5 bg-gray-200 w-1/2"></div>
                    <CgArrowsExchangeV onClick={() => handleInterChange()} className=" border-2 rounded-full w-5 h-5 text-blue-500" />
                    <div className="h-0.5 bg-gray-200 w-1/2"></div>
                </div>



                <SelectorComponent state={to} onChange={setTo}></SelectorComponent>



                {/* Summary Section */}
                <div className="p-4 w-full">
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-700">Max. Slippage</span>
                        <span className="text-black">0.5%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-700">Price</span>
                        <span className="text-black">1 WBTC = XX ETH</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-700">Fee (0.XX%)</span>
                        <span className="text-black">$102.34</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-700">Swap Provider</span>
                        <span className="text-black">Decent</span>
                    </div>
                </div>

                {/* Swap Button */}
                <Button type="submit" className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                    Swap
                </Button>
            </form>
        </div >
    );
};

export default SwapCard;
