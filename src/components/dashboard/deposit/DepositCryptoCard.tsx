import React from "react";

const DepositCryptoCard = () => {
    return (
        <div className="w-[600px] bg-white dark:bg-[#1C382E] shadow rounded-[14px] p-[20px] flex flex-col gap-[20px]">
            <p className="text-lg font-bold">Deposit from crypto wallet</p>
            <div className="w-full flex flex-col gap-[20px] blur-md">
                <div className="w-full bg-[#ECFFF5] dark:bg-[#14241B] rounded-[7px] flex flex-col px-[20px] py-[10px]">
                    <p className="text-lg font-bold">Your deposit</p>
                    <div className="flex justify-between">
                        <p className="text-[36px]">3.5</p>
                        <p className="text-[36px]">ETH</p>
                    </div>
                </div>
                <div className="w-full bg-[#ECFFF5] dark:bg-[#14241B] rounded-[7px] flex flex-col gap-[21px] px-[20px] pt-[20px]">
                    <p className="text-lg font-bold">Operation details</p>
                    <div className="flex flex-col gap-[10px] text-lg">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p>GreenVault Protocol</p>
                                <p>98.49%</p>
                            </div>
                            <div className="flex">
                                <p className="font-bold">
                                    3.447
                                    &nbsp;
                                </p>
                                <p>ETH</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p>Insurance Fund (USDT)</p>
                                <p>1.5%</p>
                            </div>
                            <div className="flex">
                                <p className="font-bold">
                                    0.053
                                    &nbsp;
                                </p>
                                <p>ETH</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p>GreenVault Fee</p>
                                <p>0%</p>
                            </div>
                            <div className="flex">
                                <p className="font-bold">
                                    0
                                    &nbsp;
                                </p>
                                <p>ETH</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p>Bank Processing Fee</p>
                                <p>5.5%</p>
                            </div>
                            <div className="flex">
                                <p className="font-bold">
                                    0.00031
                                    &nbsp;
                                </p>
                                <p>ETH</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[76px] ml-[-20px] mr-[13px] flex gap-[10px] items-center">
                        <div className="w-[15px] h-[90px] bg-[#35E032] rounded-tr-[14px] rounded-bl-[10px]"></div>
                        <p className="text-md">
                            Before investing, carefully consider all risks because by clicking the button below you agree that only you are responsible for all financial losses incurred
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[65px] cursor-pointer">
                {/* Blurred background layer */}
                <div className="absolute inset-0 bg-[#35E032] rounded-[7px] blur-[8px] shadow-[5px_7px_rgba(53,224,50,0.5)] shadow-[-5px_-7px_rgba(53,224,50,0.5)]">
                </div>

                {/* Sharp background and text layer */}
                <div className="relative z-10 w-full h-full bg-[#35E032] rounded-[7px] flex items-center justify-center">
                    <p className="text-[24px] font-bold text-[#070D0A]">UNLOCK</p>
                </div>
            </div>
        </div>
    )
}

export default DepositCryptoCard;