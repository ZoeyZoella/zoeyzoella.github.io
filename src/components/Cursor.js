
import React, { useState } from "react";
import "../styles/Layout.css";
import useMousePosition from "../hooks/useMousePosition";

const Cursor = ({ onHoverable = false }) => {
    // 1.
    const { x, y } = useMousePosition();
    const message = onHoverable ? ".hovered" : "";

    return (
        <>
            {/* 2. */}
            <div
                style={{ left: `${x}px`, top: `${y}px` }}
                className={"ring" + message}
            ></div>
            <div
                className={"dot" + message}
                style={{ left: `${x}px`, top: `${y}px` }}
            ></div>
        </>
    );
};

export default Cursor