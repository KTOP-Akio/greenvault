import React, { useState } from 'react'
import ArrowIcon from '../../icons/ArrowIcon';

interface AssetsOverviewProps {
    assets: {
        asset: string;
        balance: number;
        priceChange: number;
        allocation: number;
        color: string;
    }[];
}

const AssetsOverview = ({ assets }: AssetsOverviewProps) => {
    const [sortConfig, setSortConfig] = useState({ key: 'asset', direction: 'ascending' });
    const sortedAssets = [...assets].sort((a, b) => {
        const key = sortConfig.key as keyof typeof a;
        if (a[key] < b[key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[key] > b[key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key: keyof typeof assets[0]) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="bg-white dark:bg-[#1C382E] rounded-[17px] shadow w-[1050px] p-[24px]">
            <p className="text-xl font-bold mt-[12px] mb-4">Assets overview</p>
            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        <th onClick={() => requestSort('asset')} className="cursor-pointer text-left px-4 py-2">
                            <span className="flex items-center gap-2">
                                Asset
                                <ArrowIcon />
                            </span>
                        </th>
                        <th onClick={() => requestSort('balance')} className="cursor-pointer text-left px-4 py-2">
                            <span className="flex items-center gap-2">
                                Balance
                                <ArrowIcon />
                            </span>
                        </th>
                        <th onClick={() => requestSort('priceChange')} className="cursor-pointer text-left px-4 py-2">
                            <span className="flex items-center gap-2">
                                Price Change
                                <ArrowIcon />
                            </span>
                        </th>
                        <th onClick={() => requestSort('allocation')} className="cursor-pointer text-left px-4 py-2">
                            <span className="flex items-center gap-2">
                                Allocation
                                <ArrowIcon />
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedAssets.map((asset, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 flex items-center gap-1">
                                <span className='w-[14px] h-[14px] rounded-[7px]' style={{ backgroundColor: asset.color }}></span>
                                {asset.asset}
                            </td>
                            <td className="px-4 py-2">${asset.balance}</td>
                            <td className="px-4 py-2">{asset.priceChange > 0 ? "+" : ""}{asset.priceChange.toFixed(2)}%</td>
                            <td className="px-4 py-2">{asset.allocation}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AssetsOverview;