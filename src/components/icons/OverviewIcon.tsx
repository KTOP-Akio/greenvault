import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const OverviewIcon: React.FC<IconProps> = ({ 
  className = '', 
  width = 28, 
  height = 28, 
  color = 'currentColor' 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 21 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M3.83333 10.8333H8.83333C9.29167 10.8333 9.66667 10.4583 9.66667 10V3.33333C9.66667 2.875 9.29167 2.5 8.83333 2.5H3.83333C3.375 2.5 3 2.875 3 3.33333V10C3 10.4583 3.375 10.8333 3.83333 10.8333ZM3.83333 17.5H8.83333C9.29167 17.5 9.66667 17.125 9.66667 16.6667V13.3333C9.66667 12.875 9.29167 12.5 8.83333 12.5H3.83333C3.375 12.5 3 12.875 3 13.3333V16.6667C3 17.125 3.375 17.5 3.83333 17.5ZM12.1667 17.5H17.1667C17.625 17.5 18 17.125 18 16.6667V10C18 9.54167 17.625 9.16667 17.1667 9.16667H12.1667C11.7083 9.16667 11.3333 9.54167 11.3333 10V16.6667C11.3333 17.125 11.7083 17.5 12.1667 17.5ZM11.3333 3.33333V6.66667C11.3333 7.125 11.7083 7.5 12.1667 7.5H17.1667C17.625 7.5 18 7.125 18 6.66667V3.33333C18 2.875 17.625 2.5 17.1667 2.5H12.1667C11.7083 2.5 11.3333 2.875 11.3333 3.33333Z" 
        fill={color}
      />
    </svg>
  );
};

export default OverviewIcon; 