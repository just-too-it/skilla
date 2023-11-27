import React, { FC } from 'react';

import { IconProps } from './icon.types';

export const OrdersIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="icon / orders-24px" clipPath="url(#clip0_10_2989)">
        <path
          id="Vector"
          d="M18 7.00009L16.59 5.59009L10.25 11.9301L11.66 13.3401L18 7.00009ZM22.24 5.59009L11.66 16.1701L7.48003 12.0001L6.07003 13.4101L11.66 19.0001L23.66 7.00009L22.24 5.59009ZM0.410034 13.4101L6.00003 19.0001L7.41003 17.5901L1.83003 12.0001L0.410034 13.4101Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_10_2989">
          <rect width="24" height="24" fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
};
