import React, { useState } from 'react';
import AreaChart from '../components/dashboard/overview/AreaChart';
import DateDropdown from '../components/dashboard/overview/DateDropdown';
import DonatChart from '../components/dashboard/overview/DonatChart';

const Overview = () => {
  const [currentDate, setCurrentDate] = useState('week');

  return (
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
  );
};

export default Overview; 