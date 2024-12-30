"use client"

import React from "react";
import Button from "@/ui/button";
import { CgArrowsExchangeV } from "react-icons/cg";
import Input from "@/ui/input";
import Select from "@/ui/select";
import { CardFormData } from "@/lib/validator";
import useHook from "./hook";
const SwapCard = ({ data }: { data?: CardFormData }) => {
    const networkOptions = ['Ethereum', 'Polygon'];
    const tokenOptions = ['WBTC', 'ETH'];

    const { handleSubmit,
        onSubmit,
        register,
        currentSection,
        getValues,
        setSection,
        setValue,
        errors } = useHook();

    return (


        <div className="w-96 ">

            <div className="flex justify-around mb-2  bg-white  rounded-md  w-full">
                <Button onClick={() => { setValue('case', 'swap'); setSection('swap') }} className={` w-1/3 text-sm  font-medium  ${currentSection === 'swap' ? 'bg-[#0B4AE1] text-white shadow-md' : ""}`}>Swap</Button>
                <Button onClick={() => { setValue('case', 'buy'); setSection('buy') }} className={` w-1/3 text-sm font-medium  ${currentSection === 'buy' ? 'bg-[#0B4AE1] text-white shadow-md' : ""}`}>Buy</Button>
                <Button onClick={() => { setValue('case', 'sell'); setSection('sell') }} className={` w-1/3 text-sm font-medium ${currentSection === 'sell' ? 'bg-[#0B4AE1] text-white shadow-md' : ""}`}>Sell</Button>
            </div>


            <form id="swap_card" action="" className="" onSubmit={handleSubmit(onSubmit)}>

                <input type="text" className="hidden" {...register('case')} />
                <div className=" bg-white p-3 w-full rounded-lg flex flex-col items-center gap-2 mb-2">
                    <div className=" border border-customGray rounded-2xl p-2.5 flex gap-2 flex-col w-full">
                        <Select
                            error={errors.from_network?.message}
                            defaultValue={getValues("from_network") || data?.from_network}
                            {...register("from_network")}
                            options={networkOptions}
                            changeFuntion={(value: string) => setValue('from_network', value)}
                        />
                        <div className="flex items-center justify-between gap-2">

                            <Input
                                autoComplete="off"
                                spellCheck="false"
                                type="number"
                                min={0}

                                error={errors.from_amount?.message}
                                defaultValue={data?.from_amount}

                                {...register('from_amount')}></Input>
                            <Select
                                error={errors.from_token?.message}
                                defaultValue={getValues("from_token") || data?.from_token}
                                {...register('from_token')}
                                changeFuntion={(value: string) => setValue('from_token', value)}
                                options={tokenOptions}
                            />
                        </div>
                        <div className="text-xs  flex justify-between items-center">
                            <span>{getValues('from_total') || data?.from_total}</span>
                            <input  {...register('from_total')} defaultValue={data?.from_total} className="hidden" />

                            <span className="flex gap-1">
                                <span className="text-gray-500">Balance:</span>
                                <span>{getValues('from_balance') || data?.from_balance}</span>
                                <input  {...register('from_balance')} defaultValue={data?.from_balance} className="hidden" /> {/* Display dynamic balance */}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-3 w-full items-center"
                    >
                        <div className="border bg-gray-200 flex-1"></div>
                        <CgArrowsExchangeV
                            className=" border rounded-lg w-6 h-6 text-blue-500"
                            onClick={() => {
                                setValue("case", 'swap');
                                handleSubmit(onSubmit)();
                            }
                            }
                        />
                        <div className="border bg-gray-200 flex-1"></div>
                    </div>


                    <div className=" border border-customGray rounded-2xl p-2.5 flex gap-2 flex-col w-full">
                        <Select
                            error={errors.to_network?.message}
                            changeFuntion={(value: string) => setValue('to_network', value)}
                            defaultValue={getValues("to_network") || data?.to_network}
                            {...register("to_network")}
                            options={networkOptions}

                        />
                        <div className="flex items-center justify-between gap-2">

                            <Input
                                autoComplete="off"
                                spellCheck="false"
                                type="number"
                                min={0}
                                defaultValue={data?.to_amount}
                                error={errors.to_amount?.message}

                                {...register('to_amount')}></Input>
                            <Select
                                error={errors.to_token?.message}
                                changeFuntion={(value: string) => setValue('to_token', value)}
                                defaultValue={getValues("to_token") || data?.to_token}
                                {...register("to_token")}
                                options={tokenOptions}
                            />

                        </div>
                        <div className="text-xs  flex justify-between items-center">
                            <span>{getValues('to_total') || data?.to_total}</span>
                            <input {...register('to_total')} defaultValue={data?.to_total} className="hidden" />

                            <span className="flex gap-1">
                                <span className="text-gray-500">Balance:</span>
                                <span>{getValues('to_balance') || data?.to_balance}</span>
                                <input  {...register('to_balance')} defaultValue={data?.to_balance} className="hidden" /> {/* Display dynamic balance */}
                            </span>
                        </div>
                    </div>



                    <div className="p-1 w-full flex flex-col gap-1">
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
                </div>

                <Button
                    onClick={
                        () => {
                            setValue('case', currentSection);
                            handleSubmit(onSubmit)()
                        }
                    }
                    type="button"
                    className="w-full py-3 text-[#0B4AE1] bg-[#0B4AE14D]  rounded-lg font-semibold text-sm capitalize ">
                    {currentSection}
                </Button>
            </form>
        </div >
    );
};

export default SwapCard;
