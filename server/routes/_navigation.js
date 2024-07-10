import express from 'express';
import fetch from 'node-fetch';
import { Router } from 'express';

const router = Router();
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

// Route to fetch places
router.get('/getPlaces', async (req, res) => {
    const { latitude, longitude, radius } = req.query;
    const url = `${PLACES_API_URL}?location=${latitude},${longitude}&radius=${radius}&key=${GOOGLE_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error('Error fetching data from Google Places API:', error);
        res.status(500).send('Failed to fetch data');
    }
});

// New route to provide a static map URL
router.get('/getMapUrl', (req, res) => {
    const mapUrl = 'https://storage.googleapis.com/maps-solutions-phrazvpkye/commutes/pmd4/commutes.html';
    res.json({ mapUrl });
});

export default router;


