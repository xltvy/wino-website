import * as React from "react";
const SvgFullscreenIcon = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 978px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);
    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 69.02 69.02"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <defs>
        <style>{".fullscreen-icon_svg__cls-1{fill:#006400}"}</style>
      </defs>
      <g id="fullscreen-icon_svg__Layer_2" data-name="Layer 2">
        <g id="fullscreen-icon_svg__Layer_1-2" data-name="Layer 1">
          <circle
            className="fullscreen-icon_svg__cls-1"
            cx={34.51}
            cy={34.51}
            r={34.51}
          />
          <circle
            cx={34.51}
            cy={34.51}
            r={33.51}
            style={{
              fill: "#00cc19",
            }}
          />
          {isHovered && (
            <path
              className="fullscreen-icon_svg__cls-1"
              d="M47.94 52.77H29.42a1.07 1.07 0 0 1-.76-1.83l11.13-11.13 11.13-11.13a1.07 1.07 0 0 1 1.83.76V48a4.79 4.79 0 0 1-4.81 4.77ZM21.08 16.25H39.6a1.07 1.07 0 0 1 .76 1.83L29.22 29.22 18.08 40.36a1.07 1.07 0 0 1-1.83-.76V21.08a4.83 4.83 0 0 1 4.83-4.83Z"
            />
          )}
          {isMobile && (
            <path
              className="fullscreen-icon_svg__cls-1"
              d="M47.94 52.77H29.42a1.07 1.07 0 0 1-.76-1.83l11.13-11.13 11.13-11.13a1.07 1.07 0 0 1 1.83.76V48a4.79 4.79 0 0 1-4.81 4.77ZM21.08 16.25H39.6a1.07 1.07 0 0 1 .76 1.83L29.22 29.22 18.08 40.36a1.07 1.07 0 0 1-1.83-.76V21.08a4.83 4.83 0 0 1 4.83-4.83Z"
            />
          )}
        </g>
      </g>
    </svg>
  );
};

export default SvgFullscreenIcon;
