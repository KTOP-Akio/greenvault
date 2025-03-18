import React from "react";

const WithdrawalCryptoCard = () => {
    return (
        <div className="w-[600px] bg-white dark:bg-[#1C382E] shadow rounded-[14px] p-[20px] flex flex-col gap-[20px]">
            <p className="text-lg font-bold">Withdrawal from crypto wallet</p>
            <div className="w-full flex flex-col gap-[20px]">
                <div className="w-full bg-[#ECFFF5] dark:bg-[#14241B] rounded-[7px] flex flex-col px-[20px] py-[10px]">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Withdrawal amount</p>
                        <div className="flex items-center">
                            <p className="text-lg">
                                Available funds:
                                &nbsp;
                            </p>
                            <p className="text-lg">12.356</p>
                            <div className="w-[48px] h-[24px] rounded-[13px] bg-[#FFFFFF] dark:bg-[#1C382E] shadow-[0px_0px_5px_0px_#D4D4D480] flex items-center justify-center cursor-pointer ml-[20px]">
                                <p>max</p>
                            </div>
                        </div>
                    </div>
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
                                <p>GreenVault Fee</p>
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
                                <p>GVT Holders Discount</p>
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
                                <p>Network Commission</p>
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
            <div className="w-full h-[65px] bg-[#35E032] rounded-[7px] flex items-center justify-center cursor-pointer">
                <p className="text-[24px] font-bold text-[#070D0A]">WITHDRAW 3.447 ETH</p>
            </div>
        </div >
    )
}

export default WithdrawalCryptoCard;