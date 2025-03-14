import React, { useState } from 'react';
import Chart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';
// Type definitions
interface State {
    options: ApexOptions;
    series: {
        name: string;
        data: number[];
    }[];
}

const AreaChart: React.FC = () => {
    const [state] = useState<State>({
        options: {
            chart: {
                id: 'apexchart-example',
                type: 'area',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false,
                }
            },
            xaxis: {
                categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                axisBorder: {
                    show: true,
                    offsetX: 0,
                    offsetY: 0
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                }
            },
            yaxis: {
                min: 0,
                max: 25,
                tickAmount: 5,
                axisBorder: {
                    show: true,
                    offsetX: -1,
                    offsetY: 0
                },
                labels: {
                    show: false,
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.8,
                    opacityTo: 0.3,
                    gradientToColors: ["#ECFFF5"],
                    stops: [0, 100],
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: false,
            },
            stroke: {
                show: true,
                curve: 'straight',
                width: 5,
            },
            colors: ['#35E032'],
        },
        series: [{
            name: 'series-1',
            data: [20, 12, 10, 11, 14, 23, 22]
        }],
    });

    return (
        <div className='relative pl-4 pb-6'>
            <Chart
                options={state.options}
                series={state.series}
                type="area"
                width={950}
                height={320}
            />
            <div className='absolute top-[18px] left-[10px] flex flex-col gap-[31px] items-end'>
                <p>25</p>
                <p>20</p>
                <p>15</p>
                <p>10</p>
                <p>5</p>
            </div>
            <div className='absolute bottom-[25px] left-[26px] flex gap-[133px]'>
                <p>Mo</p>
                <p>Tu</p>
                <p>We</p>
                <p>Th</p>
                <p className='pl-1'>Fr</p>
                <p className='pl-1'>Sa</p>
                <p className='pl-1'>Su</p>
            </div>
        </div>
    );
}

export default AreaChart;
