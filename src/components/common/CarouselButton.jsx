import React from "react";
import left from "../../assets/img/left.svg";
import right from "../../assets/img/right.svg";

const CarouselButton = ({ direction, onScroll, onMove }) => {
  const handleXScroll = () => onScroll(direction === "left" ? -490 : 490);

  const handleXMove = () => onMove();

  return (
    <button
      className={direction === "left" ? "left" : "right"}
      onClick={onScroll ? handleXScroll : handleXMove}
    >
      <img src={direction === "left" ? left : right} alt="" />
    </button>
  );
};

export default CarouselButton;
