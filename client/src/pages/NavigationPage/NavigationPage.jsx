import { useEffect, useState } from 'react';

function NavigationPage() {
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    // Ensure the fetch URL is correct and potentially prefixed with your API route if necessary
    fetch('/api/navigation/getMapUrl')  // Adjust the URL based on your server's endpoint configuration
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMapUrl(data.mapUrl))
      .catch(error => console.error('Error fetching map URL:', error));
  }, []);

  return (
    <div>
      <h1>Navigation</h1>
      {mapUrl ? (
        <iframe 
          title="Map Viewer"  // Add a title attribute for accessibility
          src={mapUrl}         // Use dynamic URL from state
          width="100%" 
          height="500px"       // Define a specific height or make it responsive
          style={{ border: 'none' }} 
          loading="lazy"
        ></iframe>
      ) : (
        <p>Loading map...</p>  // Provide feedback while map URL is loading or if not available
      )}
    </div>
  );
}

export default NavigationPage;

