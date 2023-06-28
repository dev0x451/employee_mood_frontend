// import React from "react"
interface Props {
  color: string;
}

export const ArrowNext: React.FC<Props> = ({color}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.1983 11.5L8.73178 6.14021C8.37822 5.71593 8.43554 5.08537 8.85982 4.7318C9.28409 4.37824 9.91466 4.43556 10.2682 4.85984L15.2682 10.8598C15.5773 11.2307 15.5773 11.7694 15.2682 12.1402L10.2682 18.1402C9.91466 18.5645 9.28409 18.6218 8.85982 18.2682C8.43554 17.9147 8.37821 17.2841 8.73178 16.8598L13.1983 11.5Z"
        fill={color}
        // fill="#2C2D2E"
      />
    </svg>
  )
}
