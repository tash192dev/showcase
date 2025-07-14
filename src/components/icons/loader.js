import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* Only the T logo inside, properly scaled and centered */}
      <g transform="translate(14, 12) scale(0.9)">
        <g
          fillOpacity="1"
          stroke="#64ffda"
          strokeDasharray="none"
          strokeOpacity="1"
          transform="translate(-115.75 -101.93) scale(1.01416)">
          <path
            fill="#0a192f"
            strokeWidth="11.339"
            d="M430.927 376.16c-.053.09-155.77 89.268-155.875 89.268s-155.194-90.266-155.246-90.357.576-179.535.63-179.626c.052-.09 155.769-89.269 155.874-89.268.105 0 155.194 90.266 155.246 90.357s-.576 179.535-.63 179.626z"
            transform="matrix(.25636 0 0 .25636 84.875 74.742)"
          />
          <text x="140.893" y="166.861" fill="#64ffda" strokeWidth="2.673" fontSize="52.807">
            <tspan x="140.893" y="166.861">
              T
            </tspan>
          </text>
        </g>
      </g>
    </g>
  </svg>
);

export default IconLoader;
