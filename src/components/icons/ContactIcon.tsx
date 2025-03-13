import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const ContactIcon: React.FC<IconProps> = ({ 
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
      <g clipPath="url(#clip0_2006_1458)">
        <path 
          d="M4.85413 18.3332C4.6319 18.3332 4.43051 18.2429 4.24996 18.0623C4.0694 17.8818 3.97913 17.6804 3.97913 17.4582V15.2707C3.97913 14.0207 4.36801 12.9165 5.14579 11.9582C5.92357 10.9998 6.92357 10.3887 8.14579 10.1248C7.59024 10.5137 7.15968 11.0032 6.85413 11.5932C6.54857 12.1832 6.39579 12.8187 6.39579 13.4998V17.4582C6.39579 17.6109 6.41663 17.7637 6.45829 17.9165C6.49996 18.0693 6.5694 18.2082 6.66663 18.3332H4.85413ZM7.91663 18.3332C7.68052 18.3332 7.47579 18.2465 7.30246 18.0732C7.12913 17.8998 7.04218 17.6948 7.04163 17.4582V13.4998C7.04163 12.5276 7.38551 11.7012 8.07329 11.0207C8.76107 10.3401 9.59079 9.99984 10.5625 9.99984H14.5C15.4722 9.99984 16.2986 10.3401 16.9791 11.0207C17.6597 11.7012 18 12.5276 18 13.4998V14.8332C18 15.8054 17.6597 16.6318 16.9791 17.3123C16.2986 17.9929 15.4722 18.3332 14.5 18.3332H7.91663ZM11 8.24984C10.0833 8.24984 9.30551 7.93039 8.66663 7.2915C8.02774 6.65262 7.70829 5.87484 7.70829 4.95817C7.70829 4.0415 8.02774 3.26373 8.66663 2.62484C9.30551 1.98595 10.0833 1.6665 11 1.6665C11.9166 1.6665 12.6944 1.98595 13.3333 2.62484C13.9722 3.26373 14.2916 4.0415 14.2916 4.95817C14.2916 5.87484 13.9722 6.65262 13.3333 7.2915C12.6944 7.93039 11.9166 8.24984 11 8.24984Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2006_1458">
          <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default ContactIcon; 