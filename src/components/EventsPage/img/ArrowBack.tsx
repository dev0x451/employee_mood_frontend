// import React from "react"
interface Props {
  color: string;
}

export const ArrowBack: React.FC<Props> = ({color}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.8017 11.5L15.2682 16.8598C15.6218 17.2841 15.5645 17.9146 15.1402 18.2682C14.7159 18.6218 14.0853 18.5644 13.7318 18.1402L8.73178 12.1402C8.42274 11.7693 8.42274 11.2306 8.73178 10.8598L13.7318 4.85979C14.0853 4.43551 14.7159 4.37819 15.1402 4.73175C15.5645 5.08532 15.6218 5.71588 15.2682 6.14016L10.8017 11.5Z"
        fill={color}
        // fill="#B6C1CF"
      />
    </svg>
  )
}
