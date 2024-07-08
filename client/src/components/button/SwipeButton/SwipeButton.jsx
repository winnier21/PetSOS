import { useState, useRef } from "react";
import "./SwipeButton.scss";
import sosIcon from "../../../assets/icons/sos-icon.png";

const SwipeButton = () => {
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(0);
  const [swipePosition, setSwipePosition] = useState(0);
  const swipeButtonRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsSwiping(true);
    setStartX(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsSwiping(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isSwiping) {
      const moveX = e.clientX - startX;
      if (moveX > 0) {
        setSwipePosition(Math.min(moveX, 300));
      }
    }
  };

  const handleTouchMove = (e) => {
    if (isSwiping) {
      const moveX = e.touches[0].clientX - startX;
      if (moveX > 0) {
        setSwipePosition(Math.min(moveX, 300));
      }
    }
  };

  const handleMouseUp = () => {
    if (isSwiping) {
      setIsSwiping(false);
      if (swipePosition > 180) {
        window.location.href = "tel:+1234567890"; // Replace with your animal clinic's phone number
      } else {
        setSwipePosition(0);
      }
    }
  };

  const handleTouchEnd = () => {
    if (isSwiping) {
      setIsSwiping(false);
      if (swipePosition > 180) {
        window.location.href = "tel:+1234567890"; // Replace with your animal clinic's phone number
      } else {
        setSwipePosition(0);
      }
    }
  };

  return (
    <main className="swipe-container"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleTouchEnd}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="swipe-button"
        ref={swipeButtonRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{ transform: `translateX(${swipePosition}px)` }}
      >
        <img className="swipe-icon" alt="sos call" src={sosIcon} />
      </div>
      <div className="swipe-bar">
        <div
          className="swipe-overlay"
          style={{ width: `${swipePosition}px` }}
        ></div>

        <h2>Swipe to call animal clinic</h2>
      </div>
    </main>
  );
};

export default SwipeButton;
