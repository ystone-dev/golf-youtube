import React from "react";
import left from "../../assets/img/left.svg";
import right from "../../assets/img/right.svg";

const CarouselButton = ({ direction, onScroll }) => {
  const handleXMove = () => {
    onScroll(direction === "left" ? -490 : 490);
  };

  return (
    <button
      className={direction === "left" ? "left" : "right"}
      onClick={handleXMove}
    >
      <img src={direction === "left" ? left : right} alt="" />
    </button>
  );
};

export default CarouselButton;
