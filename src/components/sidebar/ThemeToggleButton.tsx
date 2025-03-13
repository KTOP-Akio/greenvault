 import React from 'react';

interface ThemeToggleButtonProps {
    isDark: boolean;
    onToggle: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ isDark, onToggle }) => {
    return (
        <button 
            onClick={onToggle}
            className="relative inline-flex h-10 w-40 items-center rounded-full bg-[#ECFFF5] dark:bg-[#14241B] transition-colors px-0.5"
            aria-label="Toggle theme"
        >
            <span className={`absolute left-[1rem] text-lg z-10`}>
                Light
            </span>
            <span 
                className={`${
                    isDark ? 'translate-x-[5.4rem]' : 'translate-x-0'
                } bg-white dark:bg-[#1C382E] inline-block h-9 w-[70px] transform rounded-full transition-transform duration-200 ease-in-out shadow-md`}
            />
            <span className={`absolute right-[1rem] text-lg z-10`}>
                Dark
            </span>
        </button>
    );
};

export default ThemeToggleButton;