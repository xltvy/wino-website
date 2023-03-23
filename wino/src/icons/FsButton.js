import * as React from "react";
const SvgFsButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 666.67 666.67"
    {...props}
  >
    <defs>
      <style>{".fs-button_svg__cls-2{fill:#fff}"}</style>
    </defs>
    <g id="fs-button_svg__Layer_2" data-name="Layer 2">
      <g id="fs-button_svg__Layer_1-2" data-name="Layer 1">
        <path
          d="M333.33 666.67c184.1 0 333.34-149.24 333.34-333.34S517.43 0 333.33 0 0 149.24 0 333.33s149.24 333.34 333.33 333.34Z"
          style={{
            fill: "#292d32",
            isolation: "isolate",
            opacity: 0.4,
          }}
        />
        <path
          className="fs-button_svg__cls-2"
          d="M178.67 133.17A66.66 66.66 0 0 0 112 199.83v133.34a33.34 33.34 0 0 0 66.67 0V199.83H312a33.33 33.33 0 0 0 0-66.66ZM481.33 535.5A66.67 66.67 0 0 0 548 468.83V335.5a33.34 33.34 0 0 0-66.67 0v133.33H348a33.34 33.34 0 0 0 0 66.67Z"
        />
      </g>
    </g>
  </svg>
);
export default SvgFsButton;
