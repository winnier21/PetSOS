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
      <iframe
        title="google-map"
        width="100%"
        height="750"
        src="https://storage.googleapis.com/maps-solutions-phrazvpkye/commutes/p9jf/commutes.html"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default NavigationPage;

