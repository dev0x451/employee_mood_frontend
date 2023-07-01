// import React from "react"
interface Props {
  color: string;
  className: string;

}
// interface Img {
//   svg: HTMLElement;
//   rect: HTMLElement;
//   path: HTMLElement;
// }

export const Like: React.FC<Props> = ({className, color}) => {
  return (
    <svg className={className} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="34" height="34" rx="17" fill="#B1B3B5" fillOpacity="0.45"/>
      <path
        fillRule = "evenodd"
        clipRule = "evenodd"
        d = "M16.2694 9H17.7306C18.6848 8.99999 19.4436 8.99999 20.0558 9.04969C20.6827 9.10058 21.2173 9.20704 21.7068 9.45484C22.497 9.85493 23.1396 10.4933 23.5422 11.2786C23.7916 11.7649 23.8988 12.296 23.95 12.919C24 13.5272 24 14.2812 24 15.2292V21.2421C24 21.9424 24 22.5161 23.9593 22.9602C23.9191 23.4 23.8307 23.8518 23.5466 24.2085C23.1522 24.7036 22.5533 24.9946 21.9179 24.9999C21.4601 25.0038 21.0469 24.7957 20.6728 24.5573C20.295 24.3165 19.8392 23.9643 19.2829 23.5343L17.9455 22.5008C17.4025 22.0812 17.2856 22.0075 17.1829 21.9799C17.0631 21.9477 16.9369 21.9477 16.8171 21.9799C16.7144 22.0075 16.5975 22.0812 16.0545 22.5008L14.7171 23.5344C14.1607 23.9643 13.705 24.3165 13.3272 24.5573C12.9531 24.7957 12.5399 25.0038 12.0821 24.9999C11.4467 24.9946 10.8478 24.7036 10.4534 24.2085C10.1693 23.8518 10.0809 23.4 10.0407 22.9602C9.99998 22.5161 9.99999 21.9424 10 21.242V15.2292C9.99999 14.2812 9.99999 13.5272 10.05 12.919C10.1012 12.296 10.2084 11.7649 10.4578 11.2786C10.8604 10.4933 11.503 9.85493 12.2932 9.45484C12.7827 9.20704 13.3173 9.10058 13.9442 9.04969C14.5564 8.99999 15.3152 8.99999 16.2694 9ZM14.0582 10.4361C13.5179 10.48 13.188 10.563 12.9288 10.6943C12.402 10.961 11.9736 11.3866 11.7052 11.9101C11.5731 12.1676 11.4895 12.4953 11.4454 13.0322C11.4005 13.5772 11.4 14.2744 11.4 15.2597V21.207C11.4 21.951 11.4007 22.4607 11.4349 22.8342C11.4702 23.2194 11.533 23.3224 11.5511 23.3451C11.6826 23.5102 11.8822 23.6072 12.094 23.609C12.1232 23.6092 12.2436 23.5952 12.5713 23.3864C12.889 23.184 13.2944 22.8716 13.8855 22.4148L15.195 21.4028C15.2241 21.3803 15.2529 21.358 15.2814 21.3358C15.6855 21.0225 16.0397 20.7479 16.4512 20.6372C16.8106 20.5405 17.1894 20.5405 17.5488 20.6372C17.9603 20.7479 18.3145 21.0225 18.7186 21.3358C18.7471 21.358 18.7759 21.3803 18.805 21.4028L20.1145 22.4148C20.7056 22.8716 21.111 23.184 21.4287 23.3864C21.7564 23.5952 21.8768 23.6092 21.906 23.609C22.1178 23.6072 22.3174 23.5102 22.4489 23.3451C22.467 23.3224 22.5298 23.2194 22.5651 22.8342C22.5993 22.4607 22.6 21.951 22.6 21.207V15.2597C22.6 14.2744 22.5995 13.5772 22.5546 13.0322C22.5105 12.4953 22.4269 12.1676 22.2948 11.9101C22.0264 11.3866 21.598 10.961 21.0712 10.6943C20.812 10.563 20.4821 10.48 19.9418 10.4361C19.3933 10.3916 18.6916 10.391 17.7 10.391H16.3C15.3084 10.391 14.6067 10.3916 14.0582 10.4361Z"
        fill={color}
        // fill = "white"
        // fill = "#4C239D"
      />
    </svg>

  )
}
