import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8, -2)">
      <g transform="translate(11, 5)">
        {/* Hexagon shape */}
        <polygon
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
          fill="currentColor"
        />

        {/* Centered "T" inside the hexagon */}
        <text
          x="39" // horizontal center
          y="48" // vertical center (tweak if needed)
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="36"
          fill="#0a192f" // contrast color (hexagon is filled with currentColor)
          fontFamily="monospace">
          T
        </text>
      </g>
    </g>
  </svg>
);

export default IconLogo;
