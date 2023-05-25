const calendarIcon = <svg width="22" height="24" viewBox="0 0 22 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 0C16.5523 0 17 0.447715 17 1L17.0007 2.15982C17.8406 2.29344 18.3843 2.50928 18.9305 2.8014C19.9083 3.32432 20.6757 4.09168 21.1986 5.06946C21.6737 5.95778 21.947 6.83957 21.993 8.99907L22 9V16.3083L21.9947 16.9184C21.9539 19.1381 21.6797 20.031 21.1986 20.9305C20.6757 21.9083 19.9083 22.6757 18.9305 23.1986C17.9528 23.7215 16.9829 24 14.3083 24H7.69166L7.08162 23.9947C4.86187 23.9539 3.96902 23.6797 3.06946 23.1986C2.09169 22.6757 1.32432 21.9083 0.801398 20.9305C0.299394 19.9919 0.0226692 19.0605 0.00133443 16.6212L0 9.69166V9C0.0530014 6.83957 0.326319 5.95778 0.801398 5.06946C1.32432 4.09168 2.09169 3.32432 3.06946 2.8014C3.61591 2.50916 4.15988 2.29326 5.00031 2.15965L5 1C5 0.447715 5.44772 0 6 0C6.55228 0 7 0.447715 7 1L6.99907 2.00697C7.21654 2.00233 7.44696 2 7.69166 2H14.3083C14.5534 2 14.7842 2.00234 15.0019 2.00699L15 1C15 0.447715 15.4477 0 16 0ZM19.999 11H2L2.00092 16.5913L2.00977 17.1601C2.04865 18.6673 2.2079 19.3196 2.56502 19.9873C2.90155 20.6166 3.38342 21.0985 4.01266 21.435C4.75898 21.8341 5.48594 21.9861 7.40871 21.9991H14.5913L15.1601 21.9902C16.6673 21.9514 17.3196 21.7921 17.9873 21.435C18.6166 21.0985 19.0985 20.6166 19.435 19.9873C19.8341 19.241 19.9861 18.5141 19.9991 16.5913L19.999 11ZM16.046 16C16.4788 16 16.8196 16.0812 17.1047 16.2337C17.3899 16.3863 17.6137 16.6101 17.7663 16.8953C17.9188 17.1804 18 17.5212 18 17.954V18.046C18 18.4788 17.9188 18.8196 17.7663 19.1047C17.6137 19.3899 17.3899 19.6137 17.1047 19.7663C16.8196 19.9188 16.4788 20 16.046 20H15.954C15.5212 20 15.1804 19.9188 14.8953 19.7663C14.6101 19.6137 14.3863 19.3899 14.2337 19.1047C14.0812 18.8196 14 18.4788 14 18.046V17.954C14 17.5212 14.0812 17.1804 14.2337 16.8953C14.3863 16.6101 14.6101 16.3863 14.8953 16.2337C15.1804 16.0812 15.5212 16 15.954 16H16.046ZM14.5913 4.00092H7.40871L7 4.006V5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5L4.99925 4.19251C4.61856 4.28042 4.31722 4.40214 4.01266 4.56502C3.38342 4.90155 2.90155 5.38342 2.56502 6.01266C2.1956 6.70342 2.03791 7.37759 2.00618 8.99864L19.993 9L19.9902 8.83985C19.9514 7.33268 19.7921 6.68042 19.435 6.01266C19.0985 5.38342 18.6166 4.90155 17.9873 4.56502C17.6829 4.40218 17.3816 4.28048 17.001 4.19257L17 5C17 5.55228 16.5523 6 16 6C15.4477 6 15 5.55228 15 5L15.0024 4.0062C14.8717 4.00364 14.7348 4.00189 14.5913 4.00092Z" fill="currentColor"/>
</svg>

const eventsIcon = <svg width="23" height="26" viewBox="0 0 23 26" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 0.5C5.55229 0.5 6 0.947715 6 1.5V2.00549C6.41146 1.99999 6.86247 2 7.35716 2L9 2V1.5C9 0.947715 9.44771 0.5 10 0.5C10.5523 0.5 11 0.947715 11 1.5V2L12.6428 2C13.1375 2 13.5885 1.99999 14 2.00549V1.5C14 0.947715 14.4477 0.5 15 0.5C15.5523 0.5 16 0.947715 16 1.5V2.1419C16.4531 2.21908 16.8723 2.34237 17.27 2.54497C18.2108 3.02433 18.9757 3.78924 19.455 4.73005C19.7568 5.32234 19.8826 5.96253 19.9422 6.69138C20 7.39923 20 8.27334 20 9.35707V11.2498C20 11.8021 19.5523 12.25 19 12.25C18.4477 12.25 18 11.8023 18 11.25V9.4C18 8.26339 17.9992 7.47108 17.9488 6.85424C17.8994 6.24907 17.8072 5.90138 17.673 5.63803C17.3854 5.07354 16.9265 4.6146 16.362 4.32698C16.258 4.27401 16.1409 4.22758 16 4.18775V4.5C16 5.05228 15.5523 5.5 15 5.5C14.4477 5.5 14 5.05228 14 4.5V4.0057C13.5985 4.00017 13.1378 4 12.6 4H11V4.5C11 5.05228 10.5523 5.5 10 5.5C9.44771 5.5 9 5.05228 9 4.5V4H7.4C6.86222 4 6.40151 4.00017 6 4.0057V4.5C6 5.05228 5.55229 5.5 5 5.5C4.44772 5.5 4 5.05228 4 4.5V4.18775C3.8591 4.22758 3.74199 4.27401 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2.19279 5.90138 2.10062 6.24907 2.05118 6.85424C2.00078 7.47108 2 8.2634 2 9.40001V16.6C2 17.7366 2.00078 18.5289 2.05118 19.1458C2.10062 19.7509 2.1928 20.0986 2.32698 20.362C2.6146 20.9265 3.07355 21.3854 3.63803 21.673C3.90138 21.8072 4.24909 21.8994 4.85435 21.9488C5.47128 21.9992 6.26371 22 7.40047 22L8.5 22C9.05228 22 9.5 22.4477 9.5 23C9.5 23.5523 9.05229 24 8.5 24L7.35762 24C6.27374 24 5.39943 24 4.69151 23.9422C3.9626 23.8826 3.32236 23.7568 2.73005 23.455C1.78924 22.9757 1.02434 22.2108 0.54497 21.27C0.243181 20.6777 0.117368 20.0375 0.0578187 19.3086C-1.75089e-05 18.6007 -9.52191e-06 17.7266 2.53247e-07 16.6428V9.3572C-9.52191e-06 8.27341 -1.75089e-05 7.39926 0.0578185 6.69138C0.117368 5.96253 0.243181 5.32234 0.544968 4.73005C1.02434 3.78924 1.78924 3.02433 2.73005 2.54497C3.12767 2.34237 3.54687 2.21908 4 2.1419V1.5C4 0.947715 4.44772 0.5 5 0.5Z" fill="currentColor"/>
  <path d="M14.9071 10.7071C15.2976 10.3166 15.2976 9.68342 14.9071 9.29289C14.5166 8.90237 13.8834 8.90237 13.4929 9.29289L8.59254 14.1932L6.69957 12.34C6.30493 11.9536 5.6718 11.9603 5.28544 12.355C4.89908 12.7496 4.90579 13.3827 5.30043 13.7691L7.90043 16.3146C8.29212 16.698 8.91951 16.6947 9.30711 16.3071L14.9071 10.7071Z" fill="currentColor"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M17 26C20.3137 26 23 23.3137 23 20C23 16.6863 20.3137 14 17 14C13.6863 14 11 16.6863 11 20C11 23.3137 13.6863 26 17 26ZM18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17V19H14C13.4477 19 13 19.4477 13 20C13 20.5523 13.4477 21 14 21H16V23C16 23.5523 16.4477 24 17 24C17.5523 24 18 23.5523 18 23V21H20C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19H18V17Z" fill="#2C2D2E"/>
</svg>

const advicesIcon = <svg width="23" height="19" viewBox="0 0 23 19" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.4605 5.99807C20.9609 5.99807 23 7.98752 23 10.457C23 12.7787 22.087 13.9562 18.5741 16.6464L17.1103 17.7582C16.2112 18.4405 14.9868 18.4784 14.0516 17.8719L13.8897 17.7582L12.3803 16.6115L11.8094 16.1686C8.80464 13.8077 8 12.6365 8 10.457C8 7.98752 10.0391 5.99807 12.5395 5.99807C13.4689 5.99807 14.324 6.29029 15.0901 6.84704L15.2968 7.00542L15.4988 7.17769L15.7159 6.9951C16.3832 6.4608 17.1221 6.13337 17.92 6.03197L18.1881 6.00657L18.4605 5.99807ZM18.5229 7.99645L18.299 8.00342L18.1127 8.02374C17.7813 8.07494 17.4675 8.20074 17.1756 8.39822L17.0032 8.5253L15.8135 9.52541C15.6264 9.68273 15.3529 9.68168 15.167 9.52293L14.0411 8.56159C13.5636 8.17649 13.0769 7.99742 12.5395 7.99742C11.1302 7.99742 10 9.10529 10 10.457C10 11.8645 10.4474 12.5679 13.0723 14.6188L13.5904 15.0196L15.099 16.1657C15.3064 16.3231 15.5834 16.3428 15.8082 16.2247L15.901 16.1657L17.593 14.8789C20.5243 12.6207 21 11.9073 21 10.457C21 9.15936 19.9584 8.08644 18.6835 8.00182L18.5229 7.99645ZM5 11.9961C5.55228 11.9961 6 12.4437 6 12.9958C6 13.5479 5.55228 13.9955 5 13.9955H1C0.447715 13.9955 0 13.5479 0 12.9958C0 12.4437 0.447715 11.9961 1 11.9961H5ZM5 5.99807C5.55228 5.99807 6 6.44564 6 6.99774C6 7.54985 5.55228 7.99742 5 7.99742H1C0.447715 7.99742 0 7.54985 0 6.99774C0 6.44564 0.447715 5.99807 1 5.99807H5ZM19 0C19.5523 0 20 0.447571 20 0.999678C20 1.55178 19.5523 1.99936 19 1.99936H1C0.447715 1.99936 0 1.55178 0 0.999678C0 0.447571 0.447715 0 1 0H19Z" fill="currentColor"/>
</svg>


const homeIcon = <svg width="22" height="23" viewBox="0 0 22 23" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.1295 0.691235L21.0662 9.1811C21.6624 9.74748 22 10.5338 22 11.3561V19.9975C22 21.3782 20.8807 22.4975 19.5 22.4975H13.5C12.9477 22.4975 12.5 22.0498 12.5 21.4975V15.9973C12.5 15.1689 11.8284 14.4973 11 14.4973C10.1716 14.4973 9.5 15.1689 9.5 15.9973V21.4975C9.5 22.0498 9.05228 22.4975 8.5 22.4975H2.5C1.11929 22.4975 0 21.3782 0 19.9975V11.3561C0 10.5338 0.33756 9.74748 0.933752 9.1811L9.87045 0.691235C10.5034 0.0899007 11.4966 0.0899007 12.1295 0.691235ZM11 2.37679L2.31125 10.6311C2.11252 10.8199 2 11.082 2 11.3561V19.9975C2 20.2736 2.22386 20.4975 2.5 20.4975H7.5V15.9973C7.5 14.0643 9.067 12.4973 11 12.4973C12.933 12.4973 14.5 14.0643 14.5 15.9973V20.4975H19.5C19.7761 20.4975 20 20.2736 20 19.9975V11.3561C20 11.082 19.8875 10.8199 19.6887 10.6311L11 2.37679Z" fill="currentColor"/>
</svg>

const bookmarkIcon = <svg width="20" height="24" viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M8.95624 1.72106e-07H11.0438C12.4068 -7.93413e-06 13.4908 -1.43722e-05 14.3654 0.0714424C15.261 0.144616 16.0247 0.297677 16.7239 0.653961C17.8529 1.2292 18.7708 2.14708 19.346 3.27606C19.7023 3.9753 19.8554 4.73898 19.9286 5.63458C20 6.50916 20 7.59318 20 8.95622V17.6014C20 18.6083 20 19.4331 19.9419 20.0717C19.8844 20.704 19.7582 21.3536 19.3523 21.8664C18.7889 22.5782 17.9334 22.9966 17.0255 23.0044C16.3715 23.0099 15.7813 22.7107 15.2469 22.368C14.7071 22.0218 14.056 21.5153 13.2612 20.8971L11.3507 19.4111C10.575 18.8078 10.408 18.7019 10.2613 18.6622C10.0902 18.6159 9.90981 18.6159 9.73866 18.6622C9.59205 18.7019 9.42498 18.8078 8.64933 19.4111L6.7387 20.8972C5.94392 21.5154 5.29285 22.0218 4.75308 22.368C4.21866 22.7107 3.62848 23.0099 2.97448 23.0044C2.06665 22.9966 1.21115 22.5782 0.647702 21.8664C0.241791 21.3536 0.115634 20.704 0.0580907 20.0717C-2.96868e-05 19.4331 -1.55594e-05 18.6082 5.33903e-07 17.6013V8.95624C-7.57233e-06 7.5932 -1.46031e-05 6.50917 0.0714422 5.63458C0.144616 4.73898 0.297677 3.9753 0.653962 3.27606C1.2292 2.14708 2.14709 1.2292 3.27606 0.653961C3.97531 0.297677 4.73898 0.144616 5.63458 0.0714424C6.50917 -1.43722e-05 7.5932 -7.93413e-06 8.95624 1.72106e-07ZM5.79744 2.0648C5.02552 2.12787 4.55435 2.24729 4.18404 2.43597C3.43139 2.81947 2.81947 3.43139 2.43597 4.18404C2.24729 4.55435 2.12787 5.02552 2.0648 5.79744C2.00078 6.58104 2 7.58337 2 9V17.5509C2 18.6206 2.001 19.3535 2.04986 19.8904C2.10027 20.4443 2.19001 20.5924 2.2159 20.6251C2.40372 20.8624 2.68888 21.0019 2.99149 21.0044C3.03321 21.0048 3.20519 20.9847 3.67334 20.6845C4.12714 20.3934 4.70629 19.9442 5.55067 19.2875L7.42145 17.8324C7.463 17.8001 7.50414 17.768 7.54492 17.7362C8.12219 17.2857 8.62821 16.8909 9.21596 16.7317C9.72941 16.5927 10.2706 16.5927 10.784 16.7317C11.3718 16.8909 11.8778 17.2857 12.4551 17.7362C12.4959 17.768 12.537 17.8001 12.5785 17.8324L14.4493 19.2875C15.2937 19.9442 15.8729 20.3934 16.3267 20.6845C16.7948 20.9847 16.9668 21.0048 17.0085 21.0044C17.3111 21.0019 17.5963 20.8624 17.7841 20.6251C17.81 20.5924 17.8997 20.4443 17.9501 19.8904C17.999 19.3535 18 18.6206 18 17.5509V9C18 7.58337 17.9992 6.58104 17.9352 5.79744C17.8721 5.02552 17.7527 4.55435 17.564 4.18404C17.1805 3.43139 16.5686 2.81947 15.816 2.43597C15.4457 2.24729 14.9745 2.12787 14.2026 2.0648C13.419 2.00078 12.4166 2 11 2H9C7.58337 2 6.58104 2.00078 5.79744 2.0648Z" fill="currentColor"/>
</svg>

const questionIcon = <svg width="24" height="22" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M12.0182 2.5C6.63315 2.5 2.53663 6.21891 2.53663 10.4989C2.53663 12.0359 3.05127 13.4778 3.95849 14.6996C4.08651 14.872 4.15563 15.081 4.15563 15.2957C4.15563 16.3376 3.88201 17.3477 3.54547 18.2587C3.3335 18.8325 3.08167 19.4034 2.84121 19.9339C4.89728 19.7155 6.24612 19.0571 7.05946 18.1C7.33263 17.7786 7.77815 17.6631 8.17306 17.8114C9.34527 18.2516 10.6456 18.4979 12.0182 18.4979C17.4033 18.4979 21.4998 14.779 21.4998 10.4989C21.4998 6.21891 17.4033 2.5 12.0182 2.5ZM0.536633 10.4989C0.536633 4.83902 5.82565 0.5 12.0182 0.5C18.2108 0.5 23.4998 4.83902 23.4998 10.4989C23.4998 16.1589 18.2108 20.4979 12.0182 20.4979C10.6451 20.4979 9.32519 20.288 8.10021 19.9013C6.65537 21.2498 4.55607 21.898 1.98805 21.9989C0.941943 22.04 0.18689 20.9519 0.624917 19.978C0.714605 19.7772 0.805082 19.5787 0.895029 19.3814L0.895188 19.381L0.895197 19.381C1.17091 18.7761 1.44163 18.1822 1.66938 17.5657C1.92549 16.8724 2.09992 16.2173 2.14443 15.6002C1.1276 14.1195 0.536633 12.3721 0.536633 10.4989ZM11.9876 7.00191C11.5587 7.00191 11.1958 7.29522 11.0933 7.69369C10.9556 8.22854 10.4104 8.55053 9.87556 8.41286C9.3407 8.2752 9.01872 7.73002 9.15638 7.19517C9.48085 5.93452 10.624 5.00191 11.9876 5.00191C13.6021 5.00191 14.9109 6.31074 14.9109 7.92527C14.9109 9.21494 14.2016 9.89135 13.7217 10.3393C13.2522 10.7775 13.0421 10.9806 12.9775 11.4326C12.8994 11.9793 12.3929 12.3592 11.8462 12.2811C11.2994 12.203 10.9195 11.6965 10.9977 11.1497C11.1645 9.98183 11.8496 9.34735 12.2883 8.94103L12.3571 8.87716C12.7788 8.48359 12.9109 8.31853 12.9109 7.92526C12.9109 7.41531 12.4975 7.00191 11.9876 7.00191ZM11.9989 16C12.6893 16 13.2489 15.4404 13.2489 14.75C13.2489 14.0596 12.6893 13.5 11.9989 13.5C11.3086 13.5 10.7489 14.0596 10.7489 14.75C10.7489 15.4404 11.3086 16 11.9989 16Z" fill="currentColor"/>
</svg>

const teamIcon = <svg width="26" height="17" viewBox="0 0 26 17" xmlns="http://www.w3.org/2000/svg">
<path d="M13 9.5C16.862 9.5 19.5 11.2586 19.5 14C19.5 15.9301 18.2161 17 16.5 17H9.5C7.78393 17 6.5 15.9301 6.5 14C6.5 11.2586 9.13797 9.5 13 9.5ZM21 9.5C23.7458 9.5 25.5 11.1568 25.5 13.25C25.5 14.9424 24.2074 16 22.75 16H22C21.4477 16 21 15.5523 21 15C21 14.4477 21.4477 14 22 14H22.75C23.1815 14 23.5 13.7394 23.5 13.25C23.5 12.2877 22.666 11.5 21 11.5C20.4477 11.5 20 11.0523 20 10.5C20 9.94772 20.4477 9.5 21 9.5ZM5 9.5C5.55228 9.5 6 9.94772 6 10.5C6 11.0523 5.55228 11.5 5 11.5C3.33403 11.5 2.5 12.2877 2.5 13.25C2.5 13.7394 2.81854 14 3.25 14H4C4.55228 14 5 14.4477 5 15C5 15.5523 4.55228 16 4 16H3.25C1.79257 16 0.5 14.9424 0.5 13.25C0.5 11.1568 2.25421 9.5 5 9.5ZM13 11.5C10.112 11.5 8.5 12.5747 8.5 14C8.5 14.7366 8.81607 15 9.5 15H16.5C17.1839 15 17.5 14.7366 17.5 14C17.5 12.5747 15.888 11.5 13 11.5ZM19 1C20.933 1 22.5 2.567 22.5 4.5C22.5 6.433 20.933 8 19 8C18.4477 8 18 7.55228 18 7C18 6.44772 18.4477 6 19 6L19.1445 5.99313C19.9051 5.92045 20.5 5.2797 20.5 4.5C20.5 3.67157 19.8284 3 19 3L18.8834 2.99327C18.386 2.93551 18 2.51284 18 2C18 1.44772 18.4477 1 19 1ZM7 1C7.55228 1 8 1.44772 8 2C8 2.51284 7.61396 2.93551 7.11662 2.99327L7 3C6.17157 3 5.5 3.67157 5.5 4.5C5.5 5.2797 6.09489 5.92045 6.85554 5.99313L7 6C7.55228 6 8 6.44772 8 7C8 7.55228 7.55228 8 7 8C5.067 8 3.5 6.433 3.5 4.5C3.5 2.567 5.067 1 7 1ZM13 0C15.2091 0 17 1.79086 17 4C17 6.20914 15.2091 8 13 8C10.7909 8 9 6.20914 9 4C9 1.79086 10.7909 0 13 0ZM13 2C11.8954 2 11 2.89543 11 4C11 5.10457 11.8954 6 13 6C14.1046 6 15 5.10457 15 4C15 2.89543 14.1046 2 13 2Z" fill="currentColor"/>
</svg>


export {calendarIcon, eventsIcon, advicesIcon, homeIcon, bookmarkIcon, questionIcon, teamIcon};
