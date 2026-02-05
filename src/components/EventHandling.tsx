import React from "react";

const EventHandling = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("btn clicked", e.currentTarget);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse entered", e.currentTarget);
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>EventHandling Example</h2>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default EventHandling;
