import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
export default function GoldCategory(props) {
  return (
    <SvgIcon
      width="36"
      height="36"
      viewBox="0 0 36 36"
      className={props.className}
    >
      <g filter="url(#filter0_i_21_653)">
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0H34C35.1046 0 36 0.895431 36 2V24C36 30.6274 30.6274 36 24 36H2C0.895431 36 0 35.1046 0 34V12Z"
          fill={props.color ? props.color : "#D16D10"}
        />
      </g>
      <defs>
        <filter
          id="filter0_i_21_653"
          x="0"
          y="0"
          width="36"
          height="40"
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
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.835 0 0 0 0 0.415 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_21_653"
          />
        </filter>
      </defs>
    </SvgIcon>
  );
}
