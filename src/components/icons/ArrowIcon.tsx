import React from 'react';

interface IconProps {
    className?: string;
    width?: number;
    height?: number;
    color?: string;
}

const ArrowIcon: React.FC<IconProps> = ({
    className = '',
    width = 9,
    height = 13,
    color = 'currentColor'
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0.752053 7.22031H8.18955C8.8583 7.22031 9.19268 8.02969 8.7208 8.50156L5.00205 12.2203C4.7083 12.5141 4.2333 12.5141 3.94268 12.2203L0.220803 8.50156C-0.251072 8.02969 0.0833026 7.22031 0.752053 7.22031ZM8.7208 3.93906L5.00205 0.220312C4.7083 -0.0734375 4.2333 -0.0734375 3.94268 0.220312L0.220803 3.93906C-0.251072 4.41094 0.0833026 5.22031 0.752053 5.22031H8.18955C8.8583 5.22031 9.19268 4.41094 8.7208 3.93906Z" fill={color} />
        </svg>
    );
};

export default ArrowIcon; 