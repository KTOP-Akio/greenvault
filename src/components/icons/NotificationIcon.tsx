import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const NotificationIcon: React.FC<IconProps> = ({ 
  className = '', 
  width = 28, 
  height = 28, 
  color = 'currentColor' 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M10 18.3332C9.54171 18.3332 9.14949 18.1701 8.82337 17.844C8.49726 17.5179 8.33393 17.1254 8.33337 16.6665H11.6667C11.6667 17.1248 11.5037 17.5173 11.1775 17.844C10.8514 18.1707 10.4589 18.3337 10 18.3332ZM3.33337 15.8332V14.1665H5.00004V8.33317C5.00004 7.18039 5.34726 6.15623 6.04171 5.26067C6.73615 4.36512 7.63893 3.77817 8.75004 3.49984V2.91651C8.75004 2.56928 8.87171 2.27428 9.11504 2.03151C9.35837 1.78873 9.65337 1.66706 10 1.66651C10.3467 1.66595 10.642 1.78762 10.8859 2.03151C11.1298 2.27539 11.2512 2.57039 11.25 2.91651V3.18734C11.1112 3.46512 11.007 3.75678 10.9375 4.06234C10.8681 4.36789 10.8334 4.68039 10.8334 4.99984C10.8334 6.15262 11.2398 7.13539 12.0525 7.94817C12.8653 8.76095 13.8478 9.16706 15 9.16651V14.1665H16.6667V15.8332H3.33337ZM15 7.49984C14.3056 7.49984 13.7153 7.25678 13.2292 6.77067C12.7431 6.28456 12.5 5.69428 12.5 4.99984C12.5 4.30539 12.7431 3.71512 13.2292 3.22901C13.7153 2.74289 14.3056 2.49984 15 2.49984C15.6945 2.49984 16.2848 2.74289 16.7709 3.22901C17.257 3.71512 17.5 4.30539 17.5 4.99984C17.5 5.69428 17.257 6.28456 16.7709 6.77067C16.2848 7.25678 15.6945 7.49984 15 7.49984Z"
        fill={color}
      />
    </svg>
  );
};

export default NotificationIcon; 