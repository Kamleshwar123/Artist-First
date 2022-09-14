import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
export default function EllipsePatch(props) {
  return (
    <SvgIcon
      viewBox="0 0 727 741"
      className={props.className}
    >
      <g filter="url(#filter0_f_25_36)">
        <circle
          cx="630.5"
          cy="110.5"
          r="396.5"
          fill="#D24E56"
          fillOpacity="0.15"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_25_36"
          x="0"
          y="-520"
          width="1261"
          height="1261"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="117"
            result="effect1_foregroundBlur_25_36"
          />
        </filter>
      </defs>
    </SvgIcon>
  );
}
