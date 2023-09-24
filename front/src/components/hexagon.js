import React from "react";

export default function HexagonSVG({ hoveredPath, setHoveredPath }) {
    const handleMouseEnter = (pathId) => {
        setHoveredPath(pathId);
    };

    const handleMouseLeave = () => {
        setHoveredPath(null);
    };

    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 388 419"
            fill="rgba(0, 0, 0, 0)"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="path1"
                d="M38.6547 204.952L2.3094 142L38.6547 79.0481H111.345L147.691 142L111.345 204.952H38.6547Z"
                stroke={hoveredPath === "path1" ? "white" : "black"}
                strokeWidth="4"
                onMouseEnter={() => handleMouseEnter("path1")}
                onMouseLeave={handleMouseLeave}
            />
            <path
                id="path2"
                d="M276.655 204.952L240.309 142L276.655 79.0481H349.345L385.691 142L349.345 204.952H276.655Z"
                stroke={hoveredPath === "path2" ? "white" : "black"}
                strokeWidth="4"
                onMouseEnter={() => handleMouseEnter("path2")}
                onMouseLeave={handleMouseLeave}
            />
            <path
                id="path3"
                d="M276.655 337.952L240.309 275L276.655 212.048H349.345L385.691 275L349.345 337.952H276.655Z"
                stroke={hoveredPath === "path3" ? "white" : "black"}
                strokeWidth="4"
                onMouseEnter={() => handleMouseEnter("path3")}
                onMouseLeave={handleMouseLeave}
            />
            <path
                id="path4"
                d="M159.655 406.952L123.309 344L159.655 281.048H232.345L268.691 344L232.345 406.952H159.655Z"
                stroke={hoveredPath === "path4" ? "white" : "black"}
                strokeWidth="4"
                onMouseEnter={() => handleMouseEnter("path4")}
                onMouseLeave={handleMouseLeave}
            />
            <path
                id="path5"
                d="M157.655 272.952L121.309 210L157.655 147.048H230.345L266.691 210L230.345 272.952H157.655Z"
                stroke={hoveredPath === "path5" ? "white" : "black"}
                strokeWidth="4"
                onMouseEnter={() => handleMouseEnter("path5")}
                onMouseLeave={handleMouseLeave}
            />
            <path
                id="path6"
                d="M155.655 137.952L119.309 75L155.655 12.0481H228.345L264.691 75L228.345 137.952H155.655Z"
                stroke={hoveredPath === "path6" ? "white" : "black"}
                strokeWidth="4"
                onMouseEnter={() => handleMouseEnter("path6")}
                onMouseLeave={handleMouseLeave}
            />
        </svg>
    );
}
