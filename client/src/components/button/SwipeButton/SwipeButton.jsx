import { useState, useRef, useEffect } from "react";
import "./SwipeButton.scss";
import sosIcon from "../../../assets/icons/sos-icon.png";

const SwipeButton = () => {
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(0);
  const [swipePosition, setSwipePosition] = useState(0);
  const [clinics, setClinics] = useState([]);
  const swipeButtonRef = useRef(null);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/navigation/getPlaces?latitude=${latitude}&longitude=${longitude}&radius=5000`
          );
          const data = await response.json();
          console.log("Fetched clinics data:", data); // Debugging line
          
          // Log each clinic's formatted phone number to check if it exists
          data.results.forEach((clinic, index) => {
            console.log(`Clinic ${index + 1} Phone Number:`, clinic.formatted_phone_number);
          });
          
          setClinics(data.results);
        });
      } catch (error) {
        console.error("Error fetching clinics:", error);
      }
    };

    fetchClinics();
  }, []);

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

  const makeCall = (clinicIndex = 0) => {
    if (clinics.length > 0 && clinicIndex < clinics.length) {
      const phoneNumber = clinics[clinicIndex]?.formatted_phone_number;
      console.log(`Trying to call Clinic ${clinicIndex + 1} with Phone Number: ${phoneNumber}`); // Debugging line

      if (phoneNumber) {
        window.location.href = `tel:${phoneNumber}`;
         // Set a timeout to call the next clinic if this one fails
         setTimeout(() => {
          makeCall(clinicIndex + 1);
        }, 30000); // Wait 30 seconds before calling the next clinic
      } else {
        // If the clinic has no phone number, call the next one
        makeCall(clinicIndex + 1);
      }
    } else {
      alert("No more clinics to call.");
    }
  };

  const handleMouseUp = () => {
    if (isSwiping) {
      setIsSwiping(false);
      if (swipePosition > 180) {
        makeCall();
      } else {
        setSwipePosition(0);
      }
    }
  };

  const handleTouchEnd = () => {
    if (isSwiping) {
      setIsSwiping(false);
      if (swipePosition > 180) {
        makeCall();
      } else {
        setSwipePosition(0);
      }
    }
  };

  return (
    <main
      className="swipe"
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
