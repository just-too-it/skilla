import React, { FC } from 'react';

import { IconProps } from './icon.types';

export const DocumentsIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="icon / documents-24px" clipPath="url(#clip0_24_3021)">
        <path
          id="Vector"
          d="M8 16H16V18H8V16ZM8 12H16V14H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_24_3021">
          <rect width={width} height={height} fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
};
