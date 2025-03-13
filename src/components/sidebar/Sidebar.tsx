import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    OverviewIcon,
    DepositIcon,
    WithdrawalIcon,
    NotificationIcon,
    DocumentIcon,
    ContactIcon
} from '../icons';
import ThemeToggleButton from './ThemeToggleButton';
import { useTheme } from '../../hooks/useTheme';
import LanguageSelector from './LanguageSelector';
import CurrencySelector from './CurrencySelector';
import LightLogo from '../logo/LightLogo';
import DarkLogo from '../logo/DarkLogo';

const Sidebar = () => {
    const location = useLocation();
    const { isDark, toggleTheme } = useTheme();
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [currentCurrency, setCurrentCurrency] = useState('USD');

    return (
        <div className="bg-white dark:bg-[#1C382E] text-[#070D0A] dark:text-[#ECFFF5] h-screen w-72 fixed left-0 top-0 flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-center mt-6 mb-8">
                    {isDark ? <DarkLogo /> : <LightLogo />}
                </div>
                <nav>
                    <ul className="space-y-4 text-lg leading-10">
                        <li>
                            <Link
                                to="/dashboard"
                                className={`flex items-center pl-4 border-l-[3px] ${location.pathname === '/dashboard'
                                    ? 'text-[#35E032] border-[#35E032]'
                                    : 'border-transparent hover:text-[#35E032]'
                                    }`}
                            >
                                <OverviewIcon className="mr-6" color="currentColor" />
                                <span>Overview</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/deposit"
                                className={`flex items-center pl-4 border-l-[3px] ${location.pathname === '/dashboard/deposit'
                                    ? 'text-[#35E032] border-[#35E032]'
                                    : 'border-transparent hover:text-[#35E032]'
                                    }`}
                            >
                                <DepositIcon className="mr-6" color="currentColor" />
                                <span>Deposit</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/withdrawal"
                                className={`flex items-center pl-4 border-l-[3px] ${location.pathname === '/dashboard/withdrawal'
                                    ? 'text-[#35E032] border-[#35E032]'
                                    : 'border-transparent hover:text-[#35E032]'
                                    }`}
                            >
                                <WithdrawalIcon className="mr-6" color="currentColor" />
                                <span>Withdrawal</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/notifications"
                                className={`flex items-center pl-4 border-l-[3px] ${location.pathname === '/dashboard/notifications'
                                    ? 'text-[#35E032] border-[#35E032]'
                                    : 'border-transparent hover:text-[#35E032]'
                                    }`}
                            >
                                <NotificationIcon className="mr-6" color="currentColor" />
                                <span>Notifications</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/documents"
                                className={`flex items-center pl-4 border-l-[3px] ${location.pathname === '/dashboard/documents'
                                    ? 'text-[#35E032] border-[#35E032]'
                                    : 'border-transparent hover:text-[#35E032]'
                                    }`}
                            >
                                <DocumentIcon className="mr-6" color="currentColor" />
                                <span>Documents</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/contact-us"
                                className={`flex items-center pl-4 border-l-[3px] ${location.pathname === '/dashboard/contact-us'
                                    ? 'text-[#35E032] border-[#35E032]'
                                    : 'border-transparent hover:text-[#35E032]'
                                    }`}
                            >
                                <ContactIcon className="mr-6" color="currentColor" />
                                <span>Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="text-center text-sm py-4 flex flex-col items-center justify-center gap-4">
                <div className="flex w-48 justify-between mb-2">
                    <LanguageSelector
                        currentLanguage={currentLanguage}
                        onLanguageChange={setCurrentLanguage}
                    />
                    <CurrencySelector
                        currentCurrency={currentCurrency}
                        onCurrencyChange={setCurrentCurrency}
                    />
                </div>
                <ThemeToggleButton isDark={isDark} onToggle={toggleTheme} />
                <span className='mt-4'>© GreenVault Finance Limited</span>
            </div>
        </div>
    );
};

export default Sidebar; 