import React from "react";

const RiskBar = () => {
    return (
        <div className="relative w-full">
            <div className="h-[40px] w-full rounded-[7px] bg-gradient-to-r from-[#FF0000] to-[#38E035] flex items-center justify-end pr-[24px]">
                <span className="font-bold text-[14px] leading-[20px] tracking-[0.02em] text-[#ECFFF5]">
                    MINIMUM RISKS
                </span>
            </div>
            <div className="absolute w-[5px] h-[60px] bg-[#ECFFF5] shadow rounded-[5px] top-[-10px] left-[50%]"></div>
        </div>
    )
}

export default RiskBar;