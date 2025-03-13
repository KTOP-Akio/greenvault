import React, { useState } from 'react';
import ChevronIcon from '../icons/ChevronIcon';

interface Currency {
    code: string;
    symbol: string;
    name: string;
}

const currencies: Currency[] = [
    { code: 'USD', symbol: '$', name: 'USD' },
    { code: 'EUR', symbol: '€', name: 'EUR' },
    { code: 'GBP', symbol: '£', name: 'GBP' },
];

interface CurrencySelectorProps {
    currentCurrency: string;
    onCurrencyChange: (code: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ currentCurrency, onCurrencyChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const currentCurr = currencies.find(curr => curr.code === currentCurrency) || currencies[0];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-lg"
            >
                <span>{currentCurr.symbol}</span>
                <span>{currentCurr.code}</span>
                <ChevronIcon className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isOpen && (
                <div className="absolute bottom-full left-0 mb-1 bg-white dark:bg-[#14241B] rounded-lg shadow-lg overflow-hidden z-50">
                    {currencies.map((curr) => (
                        <button
                            key={curr.code}
                            onClick={() => {
                                onCurrencyChange(curr.code);
                                setIsOpen(false);
                            }}
                            className={`flex items-center gap-2 w-full px-4 py-2 text-lg hover:bg-[#ECFFF5] dark:hover:bg-[#2A2A2A] text-left
                                ${currentCurrency === curr.code ? 'text-[#35E032]' : ''}`}
                        >
                            <span>{curr.symbol}</span>
                            <span>{curr.code}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CurrencySelector; 