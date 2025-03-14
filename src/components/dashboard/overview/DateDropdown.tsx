import React, { useState } from 'react';
import TopArrowIcon from '../../icons/TopArrowIcon'

interface Date {
    index: number;
    name: string;
}

const dates: Date[] = [
    { index: 1, name: 'week' },
    { index: 2, name: 'month' },
    { index: 3, name: 'year' },
];

interface DateDropdownProps {
    currentDate: string;
    onDateChange: (name: string) => void;
}

const DateDropdown: React.FC<DateDropdownProps> = ({ currentDate, onDateChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const currentDateData = dates.find(date => date.name === currentDate) || dates[0];

    return (
        <div className="relative">
            <button
                className="px-4 py-2 dark:text-[#ECFFF5] text-[#070D0A] flex items-center justify-center gap-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{currentDateData.name}</span>
                <TopArrowIcon className='rotate-180' width={18} height={13} />
            </button>

            {isOpen && (
                <div className="absolute left-0 mb-1 bg-white dark:bg-[#14241B] rounded-lg shadow-lg overflow-hidden z-50">
                    {dates.map((date) => (
                        <button
                            key={date.name}
                            onClick={() => {
                                onDateChange(date.name);
                                setIsOpen(false);
                            }}
                            className={`flex items-center gap-2 w-full px-4 py-2 text-lg hover:bg-[#ECFFF5] dark:hover:bg-[#2A2A2A] text-left
                                    ${currentDate === date.name ? 'text-[#35E032]' : ''}`}
                        >
                            <span>{date.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DateDropdown;