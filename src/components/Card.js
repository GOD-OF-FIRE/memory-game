import React from "react";

export const Card = (props) => {
  const flipCard = () => {
    props.flip(props.index);
  };
  return (
    <div
      className={`card ${
        props.isFlipped || props.matchedState ? "flipped" : ""
      }`}
      onClick={flipCard}
    >
      <div className="content">
        <h1>{props.emoji}</h1>
      </div>
    </div>
  );
};

