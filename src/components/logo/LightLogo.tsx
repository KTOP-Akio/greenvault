import React from 'react';

interface IconProps {
    className?: string;
    width?: number;
    height?: number;
}

const LightLogo: React.FC<IconProps> = ({
    className = '',
    width = 200,
    height = 50,
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 150 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M14.6042 23.6514C14.6042 22.685 15.3776 21.8892 16.3169 21.8892L25.2488 21.8702C26.188 21.8702 26.9615 22.6661 26.9615 23.6324V31.7425C26.9615 32.5573 26.5748 33.3152 25.9486 33.789C24.3648 34.9448 22.7626 35.8544 21.1051 36.4986C19.0977 37.2755 17.0167 37.6734 14.8988 37.6734C12.0443 37.6734 9.42917 37.0481 7.09029 35.7786C4.75142 34.509 2.98345 32.6899 1.78638 30.3024C0.589322 27.9148 0 25.2431 0 22.306C0 19.3879 0.589322 16.6593 1.78638 14.1391C2.96503 11.6 4.67775 9.72408 6.90613 8.51136C9.13451 7.2797 11.6944 6.67334 14.6042 6.67334C16.7036 6.67334 18.6189 7.03336 20.3132 7.73447C22.0075 8.43557 23.3519 9.4209 24.328 10.6715C24.991 11.5242 25.5251 12.5474 25.967 13.7412C26.317 14.7076 25.7829 15.7877 24.8252 16.0719L24.6042 16.1287C23.7755 16.3561 22.8915 15.9203 22.5784 15.1055C22.2469 14.2528 21.8602 13.5328 21.4366 12.9643C20.7921 12.0927 19.8528 11.3916 18.6558 10.861C17.4403 10.3304 16.1143 10.0652 14.641 10.0652C12.873 10.0652 11.3445 10.3494 10.0737 10.8989C8.78459 11.4484 7.75328 12.1685 6.96138 13.078C6.16948 13.9875 5.56174 14.9729 5.11974 16.053C4.38309 17.9099 4.01476 19.9185 4.01476 22.0786C4.01476 24.7504 4.45676 26.9864 5.35916 28.7865C6.26156 30.5866 7.5507 31.932 9.26342 32.8036C10.9761 33.6753 12.7809 34.1111 14.7147 34.1111C16.3905 34.1111 18.0112 33.789 19.6134 33.1257C20.9762 32.5573 22.0628 31.9509 22.8731 31.3256C23.1125 31.1361 23.2414 30.8519 23.2414 30.5487V26.4368C23.2414 25.8873 22.7994 25.4326 22.2654 25.4326H16.3905C15.3776 25.4136 14.6042 24.6178 14.6042 23.6514Z" fill="#35E032" />
            <path d="M98.0933 30.6362C99.4192 31.6783 100.948 32.3984 102.532 32.7016C103.489 32.8911 104.447 32.91 105.386 32.7963C107.522 32.531 109.53 31.4699 111.261 29.7456C111.629 29.3666 111.979 28.9687 112.311 28.5518C117.117 22.3177 116.252 11.2137 115.865 7.95455C115.755 7.13975 115.092 6.5334 114.3 6.57129C111.906 6.72288 103.839 7.51873 98.5905 11.7443C96.933 6.66603 93.084 2.95208 91.2608 1.39829C90.8925 1.09511 90.4321 0.94352 89.9901 1.01932C89.5297 1.09511 89.1429 1.34144 88.8667 1.73937C87.0434 4.46798 82.8629 11.5927 83.4891 18.49C83.5259 18.9638 83.5996 19.4564 83.6917 19.9491C84.6677 25.1789 89.8611 27.6233 92.863 28.0023M92.8262 28.0402C93.8207 27.9075 94.2811 27.6423 95.0546 27.1307C95.6255 28.1539 98.0564 30.5983 98.8852 31.3941" stroke="#35E032" strokeWidth="1.75" strokeMiterlimit="17.5781" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M98.5535 11.7632C98.5535 11.7632 101.942 19.968 95.0544 27.1306" stroke="#35E032" strokeWidth="1.75" strokeMiterlimit="17.5781" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M93.9845 35.9964L93.9849 35.9982C94.1533 36.691 94.7298 37.2065 95.4426 37.3043L95.4426 37.3046L95.4566 37.306L96.7642 37.4386L96.7642 37.4388L96.7753 37.4396C97.456 37.4897 98.1035 37.1153 98.4139 36.5011L98.4139 36.5011L98.4164 36.496L108.159 16.5241L108.159 16.5235C108.676 15.4593 108.008 14.1613 106.826 14.0558L106.5 14.0185L106.492 14.0175L106.483 14.0169C105.795 13.9681 105.116 14.3331 104.82 14.9882L97.5655 30.5236L97.528 30.6041V30.6191C97.1559 31.3307 96.1238 31.2242 95.9222 30.4075L95.8962 30.3023L95.8895 30.2954L92.5379 13.3543C92.5379 13.354 92.5378 13.3538 92.5378 13.3536C92.3939 12.6152 91.7932 12.066 91.0635 11.9906L90.5301 11.9338L90.5301 11.9337L90.5227 11.9331C89.369 11.8321 88.4935 12.9131 88.7538 14.0328L88.7538 14.0328L88.7543 14.0349L93.9845 35.9964Z" fill="#35E032" stroke="#35E032" strokeWidth="0.8" />
            <path d="M36.583 25.6529C36.7598 25.6529 36.9587 25.6681 37.1797 25.6984C37.4154 25.7135 37.6438 25.7439 37.8647 25.7893C38.0857 25.8196 38.2846 25.8575 38.4614 25.903C38.653 25.9333 38.7929 25.9637 38.8813 25.994L38.5277 27.8358C38.3657 27.7752 38.0931 27.7069 37.7101 27.6311C37.3417 27.5402 36.8629 27.4947 36.2736 27.4947C35.8905 27.4947 35.5075 27.5402 35.1244 27.6311C34.7561 27.7069 34.513 27.76 34.3951 27.7903V37.727H32.3398V26.4033C32.826 26.2214 33.4301 26.0546 34.152 25.903C34.8739 25.7363 35.6843 25.6529 36.583 25.6529Z" fill="#070D0A" />
            <path d="M41.3287 31.8378C41.3287 30.7918 41.476 29.8823 41.7707 29.1091C42.0653 28.3209 42.4558 27.669 42.942 27.1536C43.4282 26.6382 43.988 26.2517 44.6215 25.994C45.2551 25.7363 45.9033 25.6074 46.5663 25.6074C48.1133 25.6074 49.2993 26.1077 50.1243 27.1082C50.9494 28.0935 51.3619 29.6018 51.3619 31.6331C51.3619 31.7241 51.3619 31.8453 51.3619 31.9969C51.3619 32.1334 51.3545 32.2622 51.3398 32.3835H43.4724C43.5607 33.6114 43.907 34.5436 44.511 35.1803C45.1151 35.817 46.058 36.1353 47.3398 36.1353C48.0617 36.1353 48.6658 36.0747 49.152 35.9534C49.6529 35.817 50.0286 35.6881 50.279 35.5669L50.5663 37.3405C50.3159 37.4769 49.8739 37.6209 49.2404 37.7725C48.6216 37.9241 47.9144 37.9999 47.1188 37.9999C46.1169 37.9999 45.2477 37.8483 44.511 37.5451C43.7891 37.2268 43.1924 36.7947 42.721 36.249C42.2495 35.7033 41.8959 35.059 41.6602 34.3163C41.4392 33.5583 41.3287 32.7321 41.3287 31.8378ZM49.2183 30.6781C49.233 29.7231 48.9973 28.9424 48.5111 28.336C48.0396 27.7145 47.384 27.4038 46.5442 27.4038C46.0727 27.4038 45.6528 27.5023 45.2845 27.6994C44.9309 27.8813 44.6289 28.1238 44.3784 28.427C44.128 28.7302 43.9291 29.0788 43.7817 29.473C43.6491 29.8671 43.5608 30.2688 43.5166 30.6781H49.2183Z" fill="#070D0A" />
            <path d="M54.7784 31.8378C54.7784 30.7918 54.9257 29.8823 55.2204 29.1091C55.515 28.3209 55.9055 27.669 56.3916 27.1536C56.8778 26.6382 57.4377 26.2517 58.0712 25.994C58.7047 25.7363 59.353 25.6074 60.016 25.6074C61.563 25.6074 62.749 26.1077 63.574 27.1082C64.3991 28.0935 64.8116 29.6018 64.8116 31.6331C64.8116 31.7241 64.8116 31.8453 64.8116 31.9969C64.8116 32.1334 64.8042 32.2622 64.7895 32.3835H56.922C57.0104 33.6114 57.3567 34.5436 57.9607 35.1803C58.5648 35.817 59.5077 36.1353 60.7895 36.1353C61.5114 36.1353 62.1154 36.0747 62.6016 35.9534C63.1026 35.817 63.4783 35.6881 63.7287 35.5669L64.016 37.3405C63.7656 37.4769 63.3236 37.6209 62.69 37.7725C62.0712 37.9241 61.3641 37.9999 60.5685 37.9999C59.5666 37.9999 58.6974 37.8483 57.9607 37.5451C57.2388 37.2268 56.6421 36.7947 56.1707 36.249C55.6992 35.7033 55.3456 35.059 55.1099 34.3163C54.8889 33.5583 54.7784 32.7321 54.7784 31.8378ZM62.6679 30.6781C62.6827 29.7231 62.4469 28.9424 61.9607 28.336C61.4893 27.7145 60.8337 27.4038 59.9939 27.4038C59.5224 27.4038 59.1025 27.5023 58.7342 27.6994C58.3806 27.8813 58.0786 28.1238 57.8281 28.427C57.5777 28.7302 57.3788 29.0788 57.2314 29.473C57.0988 29.8671 57.0104 30.2688 56.9662 30.6781H62.6679Z" fill="#070D0A" />
            <path d="M68.8689 26.2441C69.3404 26.1228 69.9666 25.994 70.7474 25.8575C71.5283 25.7211 72.427 25.6529 73.4436 25.6529C74.357 25.6529 75.1158 25.7893 75.7198 26.0622C76.3239 26.3199 76.8027 26.6913 77.1563 27.1764C77.5246 27.6463 77.7825 28.2148 77.9298 28.8818C78.0771 29.5488 78.1508 30.284 78.1508 31.0874V37.727H76.0955V31.5422C76.0955 30.8145 76.044 30.193 75.9408 29.6776C75.8524 29.1622 75.6977 28.7453 75.4767 28.427C75.2557 28.1087 74.9611 27.8813 74.5928 27.7448C74.2244 27.5932 73.7677 27.5175 73.2226 27.5175C73.0016 27.5175 72.7732 27.525 72.5375 27.5402C72.3018 27.5554 72.0734 27.5781 71.8524 27.6084C71.6461 27.6236 71.4546 27.6463 71.2778 27.6766C71.1157 27.7069 70.9979 27.7297 70.9242 27.7448V37.727H68.8689V26.2441Z" fill="#070D0A" />
            <path d="M113.577 35.4902C114.064 35.4902 114.491 35.4826 114.859 35.4675C115.242 35.4372 115.559 35.3917 115.809 35.3311V31.8066C115.662 31.7308 115.419 31.6702 115.08 31.6247C114.756 31.564 114.358 31.5337 113.887 31.5337C113.577 31.5337 113.246 31.5565 112.892 31.6019C112.553 31.6474 112.237 31.746 111.942 31.8975C111.662 32.034 111.426 32.231 111.235 32.4887C111.043 32.7313 110.947 33.0572 110.947 33.4665C110.947 34.2244 111.183 34.755 111.655 35.0582C112.126 35.3462 112.767 35.4902 113.577 35.4902ZM113.401 24.8941C114.226 24.8941 114.918 25.0078 115.478 25.2352C116.052 25.4474 116.509 25.7582 116.848 26.1675C117.202 26.5616 117.452 27.0391 117.599 27.6C117.747 28.1457 117.82 28.7521 117.82 29.4191V36.8091C117.644 36.8394 117.393 36.8848 117.069 36.9455C116.76 36.991 116.406 37.0364 116.008 37.0819C115.61 37.1274 115.176 37.1653 114.704 37.1956C114.248 37.2411 113.791 37.2638 113.334 37.2638C112.686 37.2638 112.089 37.1956 111.544 37.0592C110.999 36.9227 110.528 36.7105 110.13 36.4225C109.732 36.1193 109.423 35.7252 109.202 35.2401C108.981 34.755 108.87 34.1714 108.87 33.4892C108.87 32.8374 108.995 32.2765 109.246 31.8066C109.511 31.3367 109.865 30.9577 110.307 30.6697C110.749 30.3816 111.264 30.1694 111.854 30.033C112.443 29.8966 113.062 29.8283 113.71 29.8283C113.916 29.8283 114.13 29.8435 114.351 29.8738C114.572 29.889 114.778 29.9193 114.97 29.9648C115.176 29.9951 115.353 30.0254 115.5 30.0557C115.647 30.086 115.75 30.1088 115.809 30.1239V29.5327C115.809 29.1841 115.773 28.843 115.699 28.5095C115.625 28.1609 115.493 27.8577 115.301 27.6C115.11 27.3271 114.844 27.1149 114.506 26.9633C114.181 26.7965 113.754 26.7132 113.224 26.7132C112.546 26.7132 111.949 26.7662 111.434 26.8723C110.933 26.9633 110.557 27.0618 110.307 27.1679L110.063 25.4171C110.329 25.2958 110.771 25.1821 111.389 25.076C112.008 24.9547 112.679 24.8941 113.401 24.8941Z" fill="#070D0A" />
            <path d="M131.488 36.6726C131.017 36.7939 130.391 36.9227 129.61 37.0592C128.844 37.1956 127.952 37.2638 126.936 37.2638C126.052 37.2638 125.308 37.135 124.704 36.8773C124.1 36.6044 123.613 36.2254 123.245 35.7403C122.877 35.2553 122.612 34.6868 122.449 34.035C122.287 33.368 122.206 32.6328 122.206 31.8293V25.1897H124.262V31.3746C124.262 32.8147 124.483 33.8455 124.925 34.467C125.367 35.0885 126.111 35.3993 127.157 35.3993C127.378 35.3993 127.606 35.3917 127.842 35.3765C128.077 35.3614 128.298 35.3462 128.505 35.3311C128.711 35.3007 128.895 35.278 129.057 35.2628C129.234 35.2325 129.359 35.2022 129.433 35.1719V25.1897H131.488V36.6726Z" fill="#070D0A" />
            <path d="M139.582 37.2411C138.314 37.2108 137.416 36.9303 136.885 36.3998C136.355 35.8692 136.09 35.043 136.09 33.9213V19.7325L138.145 19.3687V33.5802C138.145 33.9288 138.174 34.2169 138.233 34.4443C138.292 34.6716 138.388 34.8535 138.521 34.99C138.653 35.1264 138.83 35.2325 139.051 35.3083C139.272 35.3689 139.545 35.422 139.869 35.4675L139.582 37.2411Z" fill="#070D0A" />
            <path d="M145.204 25.1897H149.558V26.9633H145.204V32.4205C145.204 33.0117 145.249 33.5044 145.337 33.8985C145.425 34.2775 145.558 34.5807 145.735 34.8081C145.912 35.0203 146.133 35.1719 146.398 35.2628C146.663 35.3538 146.972 35.3993 147.326 35.3993C147.945 35.3993 148.438 35.3311 148.807 35.1946C149.19 35.043 149.455 34.9369 149.602 34.8763L150 36.6271C149.794 36.7333 149.433 36.8621 148.917 37.0137C148.402 37.1804 147.812 37.2638 147.149 37.2638C146.368 37.2638 145.72 37.1653 145.204 36.9682C144.704 36.756 144.298 36.4452 143.989 36.0359C143.68 35.6266 143.459 35.1264 143.326 34.5352C143.208 33.9288 143.149 33.2315 143.149 32.4433V21.8926L145.204 21.5288V25.1897Z" fill="#070D0A" />
        </svg>
    );
};

export default LightLogo; 
