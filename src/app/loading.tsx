"use client"

import React from "react";
import SelectorLoading from "@/components/swap-card/selector_loading";
import { CgArrowsExchangeV } from "react-icons/cg";

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center w-full">
            <div className="w-96 ">
                <div className="flex justify-around mb-2 rounded-md w-full bg-gray-200 animate-pulse text-gray-400">
                    <div className="  w-1/3 text-sm  font-medium text-center p-2">Swap</div>
                    <div className="  w-1/3 text-sm  font-medium text-center p-2">Buy</div>
                    <div className="  w-1/3 text-sm  font-medium text-center p-2">Sell</div>
                </div>

                <div className="">
                    <div className=" bg-white p-3 w-full rounded-lg flex flex-col items-center gap-2 mb-2">
                        <SelectorLoading />
                        <div className="flex gap-3 w-full items-center">
                            <div className="border bg-gray-200 flex-1"></div>
                            <CgArrowsExchangeV className=" border rounded-lg w-6 h-6 text-gray-300" />
                            <div className="border bg-gray-200 flex-1"></div>
                        </div>

                        <SelectorLoading />

                        <div className="p-1 w-full flex flex-col gap-1   animate-pulse text-gray-400 ">
                            <div className="flex justify-between text-xs">
                                <span className="">Max. Slippage</span>
                                <span className=""></span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="">Price</span>
                                <span className=""></span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="">Fee (0.XX%)</span>
                                <span className=""></span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="">Swap Provider</span>
                                <span className=""></span>
                            </div>
                        </div>

                    </div>

                    <div className="  w-full text-sm rounded-md  font-semibold text-center p-2 py-3  bg-gray-200 animate-pulse text-gray-400">Swap</div>
                </div>
            </div >
        </div>
    );
};

export default Loading;