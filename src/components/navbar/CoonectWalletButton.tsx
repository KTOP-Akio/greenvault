import React from 'react';
import TopArrowIcon from '../icons/TopArrowIcon'

const ConnectWalletButton = () => {
    return (
        <button className="px-4 py-2 bg-white shadow dark:bg-[#1C382E] dark:shadow-[0px_0px_4px_0px_rgba(7,13,10,0.3)] dark:text-[#ECFFF5] text-[#070D0A] rounded-[14px] hover:opacity-90 transition-opacity w-[300px] h-[50px] flex items-center justify-between">
            <span>Connect Wallet</span>
            <TopArrowIcon className='rotate-90' />
        </button>
    );
};

export default ConnectWalletButton;