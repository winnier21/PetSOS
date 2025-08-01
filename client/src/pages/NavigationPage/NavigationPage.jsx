import { useEffect, useState, useRef } from "react";
import { loadGoogleMaps } from "../../utils/loadGoogleMaps";
import "./NavigationPage.scss";

function NavigationPage() {
  const [directionsUrl, setDirectionsUrl] = useState("");
  const [map, setMap] = useState(null);
  const [currentLocationMarker, setCurrentLocationMarker] = useState(null);
  const [setUseNearest] = useState(true);
  const [destination, setDestination] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            setCurrentLocation(location);

            if (map) {
              const newCenter = new window.google.maps.LatLng(
                location.latitude,
                location.longitude
              );
              map.setCenter(newCenter);

              if (!currentLocationMarker) {
                const marker = new window.google.maps.Marker({
                  position: newCenter,
                  map: map,
                  title: "Your current location",
                  icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                  },
                });
                setCurrentLocationMarker(marker);
              } else {
                currentLocationMarker.setPosition(newCenter);
              }
            }
          },
          (error) => {
            console.error("Error fetching current location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchCurrentLocation();
  }, [currentLocationMarker, map]);

  useEffect(() => {
    const initializeAutocomplete = () => {
      if (window.google) {
        autocompleteRef.current = new window.google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ["establishment"],
            fields: ["place_id", "name", "geometry", "opening_hours"],
          }
        );

        autocompleteRef.current.addListener("place_changed", () => {
          const place = autocompleteRef.current.getPlace();
          setSelectedPlace(place);
          console.log("Selected place:", place);
          if (place.geometry && currentLocation) {
            const origin = `${currentLocation.latitude},${currentLocation.longitude}`;
            const destination = `${place.geometry.location.lat()},${place.geometry.location.lng()}`;
            const directionsUrl = `https://www.google.com/maps/embed/v1/directions?key=${
              import.meta.env.VITE_GOOGLE_API_KEY
            }&origin=${origin}&destination=${destination}&mode=driving`;
            setDirectionsUrl(directionsUrl);
            setShowDirections(true);
            setUseNearest(false);
          }
        });
      }
    };

    loadGoogleMaps(import.meta.env.VITE_GOOGLE_API_KEY)
      .then(() => {
        if (mapRef.current && !map) {
          const initialMap = new window.google.maps.Map(mapRef.current, {
            zoom: 10,
            center: { lat: 49.2827, lng: -123.1207 },
          });
          setMap(initialMap);
          initializeAutocomplete();
        }
      })
      .catch((error) => {
        console.error("Error loading Google Maps script:", error);
      });
  }, [map, currentLocation, setUseNearest]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (destination && currentLocation) {
      const { latitude, longitude } = currentLocation;
      const origin = `${latitude},${longitude}`;
      const directionsUrl = `https://www.google.com/maps/embed/v1/directions?key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }&origin=${origin}&destination=${destination}&mode=driving`;
      setDirectionsUrl(directionsUrl);
      setShowDirections(true);
      setUseNearest(false);
    }
  };

  return (
    <main className="main-container">
      <h1 className="navigationpage-title">Direction</h1>
      <form className="navigationpage-form" onSubmit={handleFormSubmit}>
        {!showDirections && (
          <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>
        )}
        {showDirections && directionsUrl && (
          <iframe
            className="navigationpage-iframe"
            title="google-directions"
            width="100%"
            height="550"
            src={directionsUrl}
            allowFullScreen
          ></iframe>
        )}
        <input
          className="navigationpage-input"
          ref={inputRef}
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter destination address"
        />
        <button className="navigationpage-button" type="submit">
          Get Directions
        </button>
      </form>
      {selectedPlace && selectedPlace.opening_hours ? (
        <section className="navigationpage-info">
          <h2 className="navigationpage-name">{selectedPlace.name}</h2>
          <div className="navigationpage-container">
            <p className="navigationpage-hours">Opening Hours:</p>
            <ul className="navigationpage-list">
              {selectedPlace.opening_hours.weekday_text.map((hour, index) => (
                <li key={index}>{hour}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        selectedPlace && (
          <section>
            <h2 className="navigationpage-name">{selectedPlace.name}</h2>
            <p className="navigationpage-hours">No opening hours available.</p>
          </section>
        )
      )}
    </main>
  );
}

export default NavigationPage;
