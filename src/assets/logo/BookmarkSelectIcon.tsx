import React from "react";

interface BookmarkSelectIconProps {
  size?: number; // La prop size est optionnelle
}

export default function BookmarkSelectIcon({
  size = 20,
}: BookmarkSelectIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.333344 3.2C0.333344 2.0799 0.333344 1.51984 0.55133 1.09202C0.743077 0.715695 1.04904 0.409734 1.42536 0.217987C1.85319 0 2.41324 0 3.53334 0H7.13334C8.25345 0 8.8135 0 9.24132 0.217987C9.61765 0.409734 9.92361 0.715695 10.1154 1.09202C10.3333 1.51984 10.3333 2.0799 10.3333 3.2V14L5.33334 12L0.333344 14V3.2Z"
        fill="url(#paint0_linear_2046_3)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2046_3"
          x1="5.33334"
          y1="0"
          x2="5.33334"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF7A00" />
          <stop offset="1" stopColor="#FF2900" />
        </linearGradient>
      </defs>
    </svg>
  );
}
