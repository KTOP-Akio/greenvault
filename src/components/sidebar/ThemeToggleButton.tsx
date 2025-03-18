import React from 'react';

interface ThemeToggleButtonProps {
    isDark: boolean;
    onToggle: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ isDark, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className="relative inline-flex h-10 w-48 items-center rounded-full bg-[#ECFFF5] dark:bg-[#14241B] transition-colors px-0.5"
            aria-label="Toggle theme"
        >
            <span className={`absolute left-[27px] text-lg z-10`}>
                Light
            </span>
            <span
                className={`${isDark ? 'translate-x-[98px]' : 'translate-x-0'
                    } bg-white dark:bg-[#1C382E] inline-block h-9 w-[90px] transform rounded-full transition-transform duration-200 ease-in-out shadow-[0px_0px_5px_0px_#D4D4D480]`}
            />
            <span className={`absolute right-[27px] text-lg z-10`}>
                Dark
            </span>
        </button>
    );
};

export default ThemeToggleButton;