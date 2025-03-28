// header_icons.jsx
function BookmarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
    >
      <path
        d="M1 5C1 2.79086 2.79086 1 5 1H11C13.2091 1 15 2.79086 15 5V18.1683C15 18.9595 14.1248 19.4373 13.4592 19.0095L9.08152 16.1953C8.4227 15.7717 7.5773 15.7717 6.91848 16.1953L2.54076 19.0095C1.87525 19.4373 1 18.9595 1 18.1683V5Z"
        stroke="#2B3F6C"
        strokeWidth="1.5"
      />
      <path
        d="M5 6.5H11"
        stroke="#2B3F6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
    >
      <rect
        x="1"
        y="2.5"
        width="18"
        height="18"
        rx="5"
        stroke="#2B3F6C"
        strokeWidth="1.5"
      />
      <path
        d="M1 7.5H19"
        stroke="#2B3F6C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 1L14.5 4"
        stroke="#2B3F6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 1L5.5 4"
        stroke="#2B3F6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 11.5H5.5"
        stroke="#2B3F6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.5H10.5"
        stroke="#2B3F6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 11.5H15.5"
        stroke="#2B3F6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 15.5H5.5"
        stroke="#2B3F6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 15.5H10.5"
        stroke="#2B3F6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 15.5H15.5"
        stroke="#2B3F6C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MypageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
    >
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-1 0 0 1 12 1)"
        stroke="#111111"
        strokeWidth="1.5"
      />
      <path
        d="M1 14.9347C1 14.0743 1.54085 13.3068 2.35109 13.0175V13.0175C6.00404 11.7128 9.99596 11.7128 13.6489 13.0175V13.0175C14.4591 13.3068 15 14.0743 15 14.9347V16.2502C15 17.4376 13.9483 18.3498 12.7728 18.1818L11.8184 18.0455C9.28565 17.6837 6.71435 17.6837 4.18162 18.0455L3.22721 18.1818C2.0517 18.3498 1 17.4376 1 16.2502V14.9347Z"
        stroke="#111111"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default { BookmarkIcon, CalendarIcon, MypageIcon };
