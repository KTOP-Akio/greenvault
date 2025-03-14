import React, { useState } from 'react';
import Chart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';

// Type definitions
interface State {
    options: ApexOptions;
    series: number[];
}

const DonutChart: React.FC = () => {
    const [state] = useState<State>({
        options: {
            chart: {
                id: 'apexchart-example',
                type: 'donut'
            },
            dataLabels: {
                enabled: false,
            },
            labels: [
                'USDT/ETH',
                'USDT/WETH',
                'USDC/WBTC',
                'ETH/ARB',
            ],
            colors: ['#35E032', '#9747FF', '#EBE200', '#00FDEE'],
            legend: {
                show: false,
            },
            stroke: {
                colors: ["transparent"]
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "80%",
                    }
                }
            },
        },
        series: [45, 35, 15, 15],
    });

    return (
        <div className='relative pb-[50px]'>
            <Chart
                options={state.options}
                series={state.series}
                type="donut"
                height={320}
            />
            <div className='absolute bottom-0 left-0 flex justify-between w-full'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-1 items-center'>
                        <span className='w-[14px] h-[14px] rounded-[7px] bg-[#35E032]'></span>
                        <span className='font-[14px]'>USDT/ETH</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span className='w-[14px] h-[14px] rounded-[7px] bg-[#EBE200]'></span>
                        <span className='font-[14px]'>USDT/WBTC</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-1 items-center'>
                        <span className='w-[14px] h-[14px] rounded-[7px] bg-[#9747FF]'></span>
                        <span className='font-[14px]'>USDT/WETH</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span className='w-[14px] h-[14px] rounded-[7px] bg-[#00FDEE]'></span>
                        <span className='font-[14px]'>ETH/ARB</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonutChart;
