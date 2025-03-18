import React from "react";

const DepositBankCard = () => {
    return (
        <div className="w-full bg-white dark:bg-[#1C382E] shadow rounded-[14px] p-[20px] flex flex-col gap-[20px]">
            <p className="text-lg font-bold">Deposit from bank card</p>
            <div className="w-full flex flex-col gap-[20px]">
                <div className="w-full bg-[#ECFFF5] dark:bg-[#14241B] rounded-[7px] flex flex-col px-[20px] py-[10px]">
                    <p className="text-lg font-bold">Your deposit</p>
                    <div className="flex justify-between">
                        <p className="text-[36px]">7 824.42</p>
                        <p className="text-[36px]">USD</p>
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
                                    7 275.931
                                    &nbsp;
                                </p>
                                <p>USD</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p>Insurance Fund (USDT)</p>
                                <p>1.5%</p>
                            </div>
                            <div className="flex">
                                <p className="font-bold">
                                    117.366
                                    &nbsp;
                                </p>
                                <p>USD</p>
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
                                <p>USD</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p>Bank Processing Fee</p>
                                <p>5.5%</p>
                            </div>
                            <div className="flex">
                                <p className="font-bold">
                                    430.343
                                    &nbsp;
                                </p>
                                <p>USD</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p>Network Commission</p>
                                <p>
                                    &lt;
                                    0.01%
                                </p>
                            </div>
                            <div className="flex">
                                <p className="font-bold">
                                    0.780
                                    &nbsp;
                                </p>
                                <p>USD</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[11px] ml-[-20px] mr-[13px] flex gap-[10px] items-center">
                        <div className="w-[10px] h-[65px] bg-[#35E032] rounded-tr-[14px] rounded-bl-[7px]"></div>
                        <p className="text-md">
                            Before investing, carefully consider all risks because by clicking the button below you agree that only you are responsible for all financial losses incurred
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[65px] bg-[#35E032] rounded-[7px] flex items-center justify-center cursor-pointer">
                <p className="text-[24px] font-bold text-[#070D0A]">DEPOSIT 7 824.42 USD</p>
            </div>
        </div>
    )
}

export default DepositBankCard;