interface ChevronIconProps {
    className?: string;
    width?: number | string;
    height?: number | string;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ 
    className = '', 
    width = 24, 
    height = 17 
}) => {
    return (
        <svg 
            width={width} 
            height={height} 
            viewBox="0 0 47.255 47.255" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path 
                d="M46.255,35.941c-0.256,0-0.512-0.098-0.707-0.293l-21.921-21.92l-21.92,21.92c-0.391,0.391-1.023,0.391-1.414,0 c-0.391-0.391-0.391-1.023,0-1.414L22.92,11.607c0.391-0.391,1.023-0.391,1.414,0l22.627,22.627c0.391,0.391,0.391,1.023,0,1.414 C46.767,35.844,46.511,35.941,46.255,35.941z" 
                fill="currentColor"
                strokeWidth={2}
            />
        </svg>
    );
};

export default ChevronIcon; 