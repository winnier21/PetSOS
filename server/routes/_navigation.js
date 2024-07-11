// // import express from 'express';
// // import fetch from 'node-fetch';
// // import { Router } from 'express';

// // const router = Router();
// // const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
// // const PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

// // // Route to fetch places
// // router.get('/getPlaces', async (req, res) => {
// //     const { latitude, longitude, radius } = req.query;
// //     const url = `${PLACES_API_URL}?location=${latitude},${longitude}&radius=${radius}&key=${GOOGLE_API_KEY}`;

// //     try {
// //         const response = await fetch(url);
// //         const data = await response.json();
// //         res.send(data);
// //     } catch (error) {
// //         console.error('Error fetching data from Google Places API:', error);
// //         res.status(500).send('Failed to fetch data');
// //     }
// // });

// // // New route to provide a static map URL
// // router.get('/getMapUrl', (req, res) => {
// //     const mapUrl = 'https://storage.googleapis.com/maps-solutions-phrazvpkye/commutes/pmd4/commutes.html';
// //     res.json({ mapUrl });
// // });

// // export default router;

// import express from 'express';
// import fetch from 'node-fetch';
// import { Router } from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

// const router = Router();
// const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
// const PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

// // Route to fetch places
// router.get('/getPlaces', async (req, res) => {
//     const { latitude, longitude, radius } = req.query;
//     const url = `${PLACES_API_URL}?location=${latitude},${longitude}&radius=${radius}&key=${GOOGLE_API_KEY}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         // Assuming you want to send back a specific map URL
//         const mapUrl = 'https://storage.googleapis.com/maps-solutions-phrazvpkye/commutes/pmd4/commutes.html';
//         res.json({ mapUrl });
//     } catch (error) {
//         console.error('Error fetching data from Google Places API:', error);
//         res.status(500).send('Failed to fetch data');
//     }
// });

// export default router;

// import express from 'express';
// import fetch from 'node-fetch';
// import { Router } from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

// const router = Router();
// const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
// const PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
// const PLACE_DETAILS_API_URL = 'https://maps.googleapis.com/maps/api/place/details/json';

// // Function to fetch place details
// const fetchPlaceDetails = async (placeId) => {
//   const url = `${PLACE_DETAILS_API_URL}?place_id=${placeId}&fields=formatted_phone_number&key=${GOOGLE_API_KEY}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data.result;
// };

// // Route to fetch places and their details
// router.get('/getPlaces', async (req, res) => {
//   const { latitude, longitude, radius } = req.query;
//   const url = `${PLACES_API_URL}?location=${latitude},${longitude}&radius=${radius}&type=veterinary_care&key=${GOOGLE_API_KEY}`;
//   console.log(`Requesting Google Places API: ${url}`); // Log the URL

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log('Fetched data:', JSON.stringify(data, null, 2)); // Log the data

//     // Fetch details for each place
//     const placesWithDetails = await Promise.all(data.results.map(async (place) => {
//       const details = await fetchPlaceDetails(place.place_id);
//       return {
//         ...place,
//         ...details,
//       };
//     }));

//     res.json({ results: placesWithDetails });
//   } catch (error) {
//     console.error('Error fetching data from Google Places API:', error);
//     res.status(500).send('Failed to fetch data');
//   }
// });

// export default router;
// import express from 'express';
// import fetch from 'node-fetch';
// import { Router } from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

// const router = Router();
// const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
// const PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
// const PLACE_DETAILS_API_URL = 'https://maps.googleapis.com/maps/api/place/details/json';

// // Function to fetch place details
// const fetchPlaceDetails = async (placeId) => {
//   const url = `${PLACE_DETAILS_API_URL}?place_id=${placeId}&fields=formatted_phone_number&key=${GOOGLE_API_KEY}`;
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`Error fetching place details: ${response.statusText}`);
//   }
//   const data = await response.json();
//   return data.result;
// };

// // Route to fetch places and their details
// router.get('/getPlaces', async (req, res) => {
//   const { latitude, longitude, radius } = req.query;

//   // Validate query parameters
//   if (!latitude || !longitude || !radius) {
//     return res.status(400).send('Missing query parameters: latitude, longitude, or radius');
//   }

//   const url = `${PLACES_API_URL}?location=${latitude},${longitude}&radius=${radius}&type=veterinary_care&key=${GOOGLE_API_KEY}`;
//   console.log(`Requesting Google Places API: ${url}`); // Log the URL

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Error fetching places: ${response.statusText}`);
//     }
//     const data = await response.json();
//     console.log('Fetched data:', JSON.stringify(data, null, 2)); // Log the data

//     if (data.results.length === 0) {
//       return res.json({ results: [] });
//     }

//     // Fetch details for each place
//     const placesWithDetails = await Promise.all(data.results.map(async (place) => {
//       const details = await fetchPlaceDetails(place.place_id);
//       return {
//         ...place,
//         ...details,
//       };
//     }));

//     res.json({ results: placesWithDetails });
//   } catch (error) {
//     console.error('Error fetching data from Google Places API:', error);
//     res.status(500).send('Failed to fetch data');
//   }
// });

// export default router;
import fetch from 'node-fetch';
import { Router } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const PLACE_DETAILS_API_URL = 'https://maps.googleapis.com/maps/api/place/details/json';
const DIRECTIONS_API_URL = 'https://maps.googleapis.com/maps/api/directions/json';

// Function to fetch place details
const fetchPlaceDetails = async (placeId) => {
  const url = `${PLACE_DETAILS_API_URL}?place_id=${placeId}&fields=formatted_phone_number&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};

// Route to fetch places and their details
router.get('/getPlaces', async (req, res) => {
  const { latitude, longitude, radius } = req.query;
  const url = `${PLACES_API_URL}?location=${latitude},${longitude}&radius=${radius}&type=veterinary_care&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Fetch details for each place
    const placesWithDetails = await Promise.all(data.results.map(async (place) => {
      const details = await fetchPlaceDetails(place.place_id);
      return {
        ...place,
        ...details,
      };
    }));

    res.json({ results: placesWithDetails });
  } catch (error) {
    console.error('Error fetching data from Google Places API:', error);
    res.status(500).send('Failed to fetch data');
  }
});

// Route to fetch directions
router.get('/getDirections', async (req, res) => {
  const { origin, destination } = req.query;
  const url = `${DIRECTIONS_API_URL}?origin=${origin}&destination=${destination}&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Google Directions API:', error);
    res.status(500).send('Failed to fetch data');
  }
});

export default router;
