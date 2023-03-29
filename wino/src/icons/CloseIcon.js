import React, { useState } from "react";

const SvgCloseIcon = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 69.02 69.02"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <defs>
        <style>{".close-icon_svg__cls-1{fill:#ac0000}"}</style>
      </defs>
      <g id="close-icon_svg__Layer_2" data-name="Layer 2">
        <g id="close-icon_svg__Layer_1-2" data-name="Layer 1">
          <circle
            className="close-icon_svg__cls-1"
            cx={34.51}
            cy={34.51}
            r={34.51}
          />
          <circle
            cx={34.51}
            cy={34.51}
            r={33.51}
            style={{
              fill: "#ff4f4f",
            }}
          />
          {isHovered && (
            <path
              className="close-icon_svg__cls-1"
              d="M51.29 47.84 38 34.51l9.58-9.58 3.75-3.75c2.22-2.22-1.22-5.67-3.45-3.45L34.51 31.06l-9.58-9.58-3.75-3.75C19 15.51 15.51 19 17.73 21.18l13.33 13.33-9.58 9.58-3.75 3.75c-2.22 2.22 1.23 5.67 3.45 3.45L34.51 38l9.58 9.58 3.75 3.75c2.22 2.18 5.67-1.27 3.45-3.49Z"
            />
          )}
        </g>
      </g>
    </svg>
  );
};

export default SvgCloseIcon;
