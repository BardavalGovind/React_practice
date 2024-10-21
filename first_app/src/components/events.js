import React, { useState } from "react";

function EventDemoApp() {
    // State variables to demonstrate form events
    const [inputValue, setInputValue] = useState("");
    const [formMessage, setFormMessage] = useState("");

    // Click event handler
    const handleClick = () => {
        alert("Button Clicked!");
    };

    // MouseDown and MouseOver event handlers
    const handleMouseDown = (event) => {
        event.target.style.backgroundColor = "lightgreen";
    };

    const handleMouseOver = (event) => {
        event.target.style.backgroundColor = "lightblue";
    };

    const handleMouseOut = (event) => {
        event.target.style.backgroundColor = "";
    };

    // Focus and Blur event handlers
    const handleFocus = () => {
        alert("Input is focused!");
    };

    const handleBlur = () => {
        alert("Input lost focus!");
    };

    // Change and Input event handlers
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    // Form Submit event handler
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormMessage(`Form Submitted! Input Value: ${inputValue}`);
    };

    // DoubleClick event handler
    const handleDoubleClick = () => {
        alert("Button Double-Clicked!");
    };

    // ContextMenu (Right Click) event handler
    const handleContextMenu = (event) => {
        event.preventDefault();
        alert("Right-click detected!");
    };

    // KeyDown event handler
    const handleKeyDown = (event) => {
        alert(`Key pressed: ${event.key}`);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>React Events Demo</h1>

            {/* Click Event */}
            <button onClick={handleClick}>Click Me</button>

            {/* MouseDown, MouseOver, MouseOut */}
            <button
                onMouseDown={handleMouseDown}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{ marginLeft: "10px" }}
            >
                Mouse Events Button
            </button>

            {/* DoubleClick Event */}
            <button onDoubleClick={handleDoubleClick} style={{ marginLeft: "10px" }}>
                Double-Click Me
            </button>

            {/* Context Menu (Right Click) */}
            <div
                onContextMenu={handleContextMenu}
                style={{
                    marginTop: "20px",
                    width: "200px",
                    height: "50px",
                    border: "1px solid black",
                    lineHeight: "50px",
                    textAlign: "center",
                }}
            >
                Right-Click Here
            </div>

            {/* Input Focus, Blur, Change, and Submit Events */}
            <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
                <label>
                    Focus, Blur, and Change:{" "}
                    <input
                        type="text"
                        value={inputValue}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{ marginLeft: "10px" }}
                    />
                </label>
                <button type="submit" style={{ marginLeft: "10px" }}>
                    Submit
                </button>
            </form>
            <p>{formMessage}</p>

            {/* KeyDown Event */}
            <div style={{ marginTop: "20px" }}>
                <input
                    type="text"
                    onKeyDown={handleKeyDown}
                    placeholder="Press any key"
                    style={{ width: "200px", padding: "5px" }}
                />
            </div>
        </div>
    );
}

export default EventDemoApp;
