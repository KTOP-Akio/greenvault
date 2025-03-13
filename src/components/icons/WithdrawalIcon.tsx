import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const WithdrawalIcon: React.FC<IconProps> = ({
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
      <g clipPath="url(#clip0_2006_1421)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 3.3248C1 2.27546 1.85066 1.4248 2.9 1.4248H8.6V8.5498H3.09675L5.30876 6.33778C5.49426 6.1523 5.49426 5.85155 5.30876 5.66605C5.12326 5.48055 4.82251 5.48055 4.637 5.66605L1.61412 8.68893C1.42863 8.87442 1.42863 9.17519 1.61412 9.36068L4.637 12.3836C4.82251 12.5691 5.12326 12.5691 5.30876 12.3836C5.49426 12.198 5.49426 11.8973 5.30876 11.7118L3.09675 9.4998H8.6V16.6248H5.275C5.275 17.1495 4.84967 17.5748 4.325 17.5748C3.80033 17.5748 3.375 17.1495 3.375 16.6248H2.9C1.85066 16.6248 1 15.7741 1 14.7248V3.3248Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.1 1.4248H10.025V16.6248H15.725C15.725 17.1495 16.1503 17.5748 16.675 17.5748C17.1997 17.5748 17.625 17.1495 17.625 16.6248H18.1C19.1493 16.6248 20 15.7741 20 14.7248V3.3248C20 2.27546 19.1493 1.4248 18.1 1.4248ZM15.3393 13.961C15.5958 14.0408 15.9293 14.095 16.3397 14.1235V15.1666H17.2289V14.0978C17.7647 14.018 18.1494 13.8413 18.3831 13.5677C18.6168 13.2941 18.7337 12.9692 18.7337 12.593C18.7337 12.3422 18.6881 12.1256 18.5969 11.9432C18.5114 11.7608 18.3917 11.6041 18.2378 11.473C18.0839 11.3362 17.9015 11.2193 17.6906 11.1224C17.4854 11.0198 17.2659 10.9229 17.0322 10.8317C16.8669 10.7747 16.7187 10.7206 16.5876 10.6693C16.4565 10.6123 16.3454 10.5553 16.2542 10.4983C16.163 10.4356 16.0946 10.3672 16.049 10.2931C16.0034 10.2133 15.9806 10.1164 15.9806 10.0024C15.9806 9.80855 16.0575 9.65751 16.2114 9.5492C16.3653 9.4352 16.5962 9.3782 16.904 9.3782C17.1947 9.3782 17.4512 9.4067 17.6735 9.4637C17.9015 9.5207 18.0981 9.58055 18.2634 9.64325L18.4772 8.7968C18.3518 8.7455 18.1808 8.6942 17.9642 8.6429C17.7476 8.5859 17.5025 8.546 17.2289 8.5232V7.5998H16.3397V8.5574C15.8552 8.6372 15.4961 8.81675 15.2624 9.09605C15.0287 9.36965 14.9118 9.7031 14.9118 10.0964C14.9118 10.3358 14.9546 10.5382 15.0401 10.7035C15.1256 10.8688 15.2367 11.0113 15.3735 11.131C15.516 11.245 15.6728 11.3419 15.8438 11.4217C16.0205 11.5015 16.1972 11.5727 16.3739 11.6354C16.562 11.7038 16.733 11.7694 16.8869 11.8321C17.0465 11.8948 17.1833 11.9632 17.2973 12.0373C17.4113 12.1114 17.4996 12.1969 17.5623 12.2938C17.625 12.3907 17.6564 12.5047 17.6564 12.6358C17.6564 12.8296 17.5794 12.9863 17.4255 13.106C17.2773 13.22 17.0066 13.277 16.6133 13.277C16.2827 13.277 15.9863 13.24 15.7241 13.1659C15.4676 13.0918 15.2481 13.0091 15.0657 12.9179L14.775 13.7302C14.9004 13.7986 15.0885 13.8755 15.3393 13.961ZM12.5397 9.37345C12.1293 9.34495 11.7958 9.2908 11.5393 9.211C11.2885 9.1255 11.1004 9.04855 10.975 8.98015L11.2657 8.1679C11.4481 8.2591 11.6676 8.34175 11.9241 8.41585C12.1863 8.48995 12.4827 8.527 12.8133 8.527C13.2066 8.527 13.4773 8.47 13.6255 8.356C13.7794 8.2363 13.8564 8.07955 13.8564 7.88575C13.8564 7.75465 13.825 7.64065 13.7623 7.54375C13.6996 7.44685 13.6113 7.36135 13.4973 7.28725C13.3833 7.21315 13.2465 7.14475 13.0869 7.08205C12.933 7.01935 12.762 6.9538 12.5739 6.8854C12.3972 6.8227 12.2205 6.75145 12.0438 6.67165C11.8728 6.59185 11.716 6.49495 11.5735 6.38095C11.4367 6.26125 11.3256 6.11875 11.2401 5.95345C11.1546 5.78815 11.1118 5.5858 11.1118 5.3464C11.1118 4.9531 11.2287 4.61965 11.4624 4.34605C11.6961 4.06675 12.0552 3.8872 12.5397 3.8074V2.8498H13.4289V3.7732C13.7025 3.796 13.9476 3.8359 14.1642 3.8929C14.3808 3.9442 14.5518 3.9955 14.6772 4.0468L14.4634 4.89325C14.2981 4.83055 14.1015 4.7707 13.8735 4.7137C13.6512 4.6567 13.3947 4.6282 13.104 4.6282C12.7962 4.6282 12.5653 4.6852 12.4114 4.7992C12.2575 4.9075 12.1806 5.05855 12.1806 5.25235C12.1806 5.36635 12.2034 5.46325 12.249 5.54305C12.2946 5.61715 12.363 5.68555 12.4542 5.74825C12.5454 5.80525 12.6565 5.86225 12.7876 5.91925C12.9187 5.97055 13.0669 6.0247 13.2322 6.0817C13.4659 6.1729 13.6854 6.2698 13.8906 6.3724C14.1015 6.4693 14.2839 6.58615 14.4378 6.72295C14.5917 6.85405 14.7114 7.0108 14.7969 7.1932C14.8881 7.3756 14.9337 7.5922 14.9337 7.843C14.9337 8.2192 14.8168 8.5441 14.5831 8.8177C14.3494 9.0913 13.9647 9.268 13.4289 9.3478V10.4166H12.5397V9.37345Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2006_1421">
          <rect width="19" height="16.15" fill="white" transform="translate(1 1.4248)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WithdrawalIcon; 
