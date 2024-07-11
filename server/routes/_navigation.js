import fetch from "node-fetch";
import { Router } from "express";
import dotenv from "dotenv";

dotenv.config();

const router = Router();
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const PLACES_API_URL =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
const PLACE_DETAILS_API_URL =
  "https://maps.googleapis.com/maps/api/place/details/json";
const DIRECTIONS_API_URL =
  "https://maps.googleapis.com/maps/api/directions/json";


const fetchPlaceDetails = async (placeId) => {
  const url = `${PLACE_DETAILS_API_URL}?place_id=${placeId}&fields=formatted_phone_number&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};

router.get("/getPlaces", async (req, res) => {
  const { latitude, longitude, radius } = req.query;
  const url = `${PLACES_API_URL}?location=${latitude},${longitude}&radius=${radius}&type=veterinary_care&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const placesWithDetails = await Promise.all(
      data.results.map(async (place) => {
        const details = await fetchPlaceDetails(place.place_id);
        return {
          ...place,
          ...details,
        };
      })
    );

    res.json({ results: placesWithDetails });
  } catch (error) {
    console.error("Error fetching data from Google Places API:", error);
    res.status(500).send("Failed to fetch data");
  }
});

router.get("/getDirections", async (req, res) => {
  const { origin, destination } = req.query;
  const url = `${DIRECTIONS_API_URL}?origin=${origin}&destination=${destination}&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from Google Directions API:", error);
    res.status(500).send("Failed to fetch data");
  }
});

export default router;
