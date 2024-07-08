import React from 'react';

function NavigationPage() {
  const apiKey = "AIzaSyA15WAO3vKrOX4QepBVwTwcIsXe_6EAwlI";

  return (
    <div>
      <h1>Navigation</h1>
      <iframe
        title="google-map"
        width="100%"
        height="500"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Central+Park,New+York,NY`}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default NavigationPage;
