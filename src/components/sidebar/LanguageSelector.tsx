import React, { useState } from 'react';
import ChevronIcon from '../icons/ChevronIcon';

interface Language {
    code: string;
    name: string;
    flag: string;
}

const languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

interface LanguageSelectorProps {
    currentLanguage: string;
    onLanguageChange: (code: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage, onLanguageChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-lg"
            >
                <span>{currentLang.flag}</span>
                <span>{currentLang.name}</span>
                <ChevronIcon className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isOpen && (
                <div className="absolute bottom-full left-0 mb-1 bg-white dark:bg-[#14241B] rounded-lg shadow-lg overflow-hidden z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                onLanguageChange(lang.code);
                                setIsOpen(false);
                            }}
                            className={`flex items-center gap-2 w-full px-4 py-2 text-lg hover:bg-[#ECFFF5] dark:hover:bg-[#2A2A2A] text-left
                                ${currentLanguage === lang.code ? 'text-[#35E032]' : ''}`}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector; 