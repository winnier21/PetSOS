import { useState, useRef, useEffect } from "react";
import "./SwipeButton.scss";
import sosIcon from "../../../assets/icons/sos-icon.jpeg";
import call from "../../../assets/icons/emergency_call.svg";

const SwipeButton = () => {
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(0);
  const [swipePosition, setSwipePosition] = useState(0);
  const [clinics, setClinics] = useState([]);
  const [currentClinic, setCurrentClinic] = useState(null);
  const swipeButtonRef = useRef(null);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `${
              import.meta.env.VITE_API_URL
            }/api/navigation/getPlaces?latitude=${latitude}&longitude=${longitude}&radius=5000`
          );
          const data = await response.json();

          data.results.forEach((clinic, index) => {
            console.log(
              `Clinic ${index + 1}: ${clinic.name}, Phone# : ${
                clinic.formatted_phone_number
              }`
            );
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
      const clinic = clinics[clinicIndex];
      const phoneNumber = clinics[clinicIndex]?.formatted_phone_number;
      setCurrentClinic(clinic);
      console.log(
        `Trying to call Clinic ${clinicIndex + 1}: ${
          clinic.name
        }, Phone#: ${phoneNumber}`
      );

      if (phoneNumber) {
        window.location.href = `tel:${phoneNumber}`;

        setTimeout(() => {
          makeCall(clinicIndex + 1);
        }, 30000);
      } else {
        console.log(
          `No phone number for Clinic ${clinicIndex + 1}, trying next clinic.`
        );
        // If the clinic has no phone number or the call fails, call the next one
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
    <>
    <section
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
    </section>
    <section>
      {currentClinic && (
        <div className="swipe-clinic-info">
          <img className="swpipe-clinic-icon" src={call} alt="emergency call"></img>
          <h3>Calling... {currentClinic.name}</h3>
        </div>
      )}
    </section>
    </>
  );
};

export default SwipeButton;
