import React from 'react';

function NavigationPage() {
  return (
    <div>
      <h1>Navigation</h1>
      <iframe
        title="google-map"
        width="100%"
        height="500"
        src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Central+Park,New+York,NY"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default NavigationPage;