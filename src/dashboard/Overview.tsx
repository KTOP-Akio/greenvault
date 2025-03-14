import React, { useState } from 'react';
import AreaChart from '../components/dashboard/overview/AreaChart';
import DateDropdown from '../components/dashboard/overview/DateDropdown';
import DonatChart from '../components/dashboard/overview/DonatChart';
import Operation from '../components/dashboard/overview/Operation';
import AssetsOverview from '../components/dashboard/overview/AssetsOverview';

const Overview = () => {
  const [currentDate, setCurrentDate] = useState('week');
  const operations = [
    {
      name: "Deposit",
      date: "01/01/2024",
      amount: 750
    },
    {
      name: "Withdrawal",
      date: "07/10/2023",
      amount: 3500
    },
    {
      name: "Deposit",
      date: "15/06/2023",
      amount: 1200
    }
  ];
  const assets = [
    {
      asset: "USDT/ETH",
      balance: 4100,
      priceChange: 0.02,
      allocation: 45,
      color: "#35E032"
    },
    {
      asset: "ETH/ARB",
      balance: 750,
      priceChange: 0.00,
      allocation: 25,
      color: "#00FDEE"
    },
    {
      asset: "USDT/WETH",
      balance: 3500,
      priceChange: 23.40,
      allocation: 17,
      color: "#9747FF"
    },
    {
      asset: "USDC/WBTC",
      balance: 1200,
      priceChange: 7.10,
      allocation: 13,
      color: "#EBE200"
    }
  ];

  return (
    <div className='flex flex-col gap-12'>
      <div className='flex gap-12'>
        <div className="bg-white dark:bg-[#1C382E] rounded-[17px] shadow p-[24px] w-[1050px]">
          <div className='flex justify-between'>
            <p className="text-xl font-bold mt-[12px] mb-4 pl-2">Net Worth</p>
            <DateDropdown
              currentDate={currentDate}
              onDateChange={setCurrentDate}
            />
          </div>
          <AreaChart />
        </div>
        <div className="bg-white dark:bg-[#1C382E] rounded-[17px] shadow w-[395px] p-[24px]">
          <div className='relative flex flex-col'>
            <p className="text-xl font-bold mt-[12px] mb-4">Asset analysis</p>
            <DonatChart />
            <div className='absolute top-0 left-0 translate-x-[155%] translate-y-[140%] flex flex-col items-center'>
              <p className='text-[50px]'>4</p>
              <p className='text-[20px]'>Securities</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-12'>
        <Operation operations={operations} />
        <AssetsOverview assets={assets} />
      </div>
    </div>
  );
};

export default Overview; 