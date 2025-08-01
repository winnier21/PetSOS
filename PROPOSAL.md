# Project Title

PetSOS

## Overview

PetSOS is a mobile application designed to assist pet owners in managing emergency situations efficiently by providing immediate access to local veterinary services, step-by-step first aid instructions, and navigation to the nearest vet that can offer immediate assistance. It also includes an intelligent chat feature that helps pet owners describe their emergencies and receive instant advice.

### Problem

Pet owners deeply care for their pets, yet many lack the necessary knowledge and preparation for handling pet emergencies effectively. Statistics reveal that most North American pet owners are unprepared to provide essential emergency care during life-threatening situations. PetSOS addresses this issue by providing critical guidance in emergencies.

### User Profile

Pet owners who need immediate and reliable emergency responses for their pets. Users may be in remote areas with limited access to veterinary services or may need guidance on handling emergencies before professional help is available.

### Features

PetSOS aims to bridge the knowledge gap that exists in pet emergency first aid. This app accomplishes four main things:

1. Automatically prepares a list of nearby veterinarians and calls each until answered.
2. Guides pet owners with accurate first aid instruction and procedures while waiting for veterinarian response.
3. Navigates the user towards the clinic that agreed to see the user or the nearest open clinic based on opening hours information by utilizing Places API.
4. Interactive Chat Feature: Utilizes the ChatGPT API to let users describe their pet's emergency in natural language and receive immediate, contextually relevant advice.

## Implementation

### Tech Stack

1. Frontend: React Native for building a responsive mobile application.
2. Backend: Node.js with Express for handling API requests.
3. Technologies: 
- Places API for navigation and clinics' information, including navigating users' location to automatically call the nearest clinics.
- OpenAI's ChatGPT API for the chat feature.


### APIs

1. Places API: For real-time navigation and location services.
2. OpenAI ChatGPT API: For processing natural language inputs and providing emergency advice.

### Sitemap

1. Home Page: Direct access to emergency call action, first aid information, and an interactive chat interface where users can type in descriptions of their pet's condition and receive guidance.
2. Navigation Page: Real-time directions to the nearest veterinary clinic with opening hours information or the clinic the users would like to go from the user's location.


### Mockups

### Home Page with an emergency button directly calling to the closest vet clinic and if the call fails, it will call the following one automatically
![image](https://github.com/winnier21/chelsea-hsieh-capstone/assets/169178572/2af68315-5f79-4b82-b50f-1d994c5ba305)

### First aid guide by choosing different pet's sypstoms 
![image](https://github.com/winnier21/chelsea-hsieh-capstone/assets/169178572/3d30da00-1546-4340-9f8e-552c96e7bf95)
![image](https://github.com/winnier21/chelsea-hsieh-capstone/assets/169178572/11e59a5e-3e24-46c4-a37b-e82c57359588)

### Navigation page 
![image](https://github.com/winnier21/chelsea-hsieh-capstone/assets/169178572/923c4e2c-7874-4beb-bc6e-4ce551940083)

### Chat Page for pet owners who do not how to nevigate what happen to their pets
![image](https://github.com/winnier21/chelsea-hsieh-capstone/assets/169178572/0a6cefde-a54c-4e4f-aaeb-e8d8e970f50c)


### Data

Focuses on real-time and temporary data handling:

1. Location Data: Used to facilitate emergency calls and navigation during active sessions.
2. linic Data: Temporarily fetched to display information during emergencies, including clinic names and opening hours.
3. User Inputs and Chat Logs: Temporarily stored for the duration of the session to improve the interaction quality.

### Endpoints

1. GET /api/navigation/getPlaces

Query Parameters: latitude, longitude, radius

Response:
json
```sh
[
  {
    "clinicName": "Vet Clinic",
    "distance": "2 km",
    "isOpen": true,
    "contactNumber": "123-456-7890"
  }
]
```
2. GET /api/navigation/getDirections

Query Parameters: origin, destination
Response: Directions data from Google Directions API.

3. POST /api/homepage/getChatGPTResponse

Body Parameters: prompt
Response:
json
```sh
{
  "response": "ChatGPT response text"
}
```

### Auth

No user authentication or profiles are required, maximizing accessibility and minimizing barriers during emergencies.

## Roadmap

Day 1-2 (July 3-4): Initial Setup and Basic Layout
Set up React Native Environment: Configure the project with necessary dependencies (React Navigation, Redux, Axios).
Basic Navigation Structure: Implement tab navigation using React Navigation.
Initial Layouts: Start creating basic UI components for the Home page and First Aid Guide page.
Backend Setup: Initialize Node.js with Express framework for the server side.

Day 3-4 (July 5-6): API Integration and UI Development
Twilio API Integration: Implement backend logic to automate calls using Twilio API.
Google Maps API Integration: Incorporate Google Maps API on the backend for fetching location data and on the frontend for displaying maps.
UI Development: Develop and refine the UI components for the First Aid Guide and Navigation pages.
Backend Routes: Create necessary API routes such as fetching clinic data (/clinics/nearby) and initiating calls (/calls/initiate).

Day 5-6 (July 7-8): Chat Interface and ChatGPT Integration
Develop Chat Interface: Build the chat interface on the Chat page.
Integrate ChatGPT API: Set up backend to handle requests to the ChatGPT API and frontend to display responses.
Refine UI Elements: Ensure the chat interface is user-friendly.
Backend Logic for Chat: Implement and test backend functionality to process chat inputs and handle responses.

Day 7 (July 9): Self-Testing and Refinement
Self-Testing: Conduct thorough testing on each UI component and backend APIs.
UI Refinement: Make UI improvements based on self-testing.
Backend Testing: Test backend services to ensure they work correctly with frontend requests.

Day 8-9 (July 10-11): Final Adjustments and Comprehensive Testing
Final UI Adjustments: Make final refinements to the UI.
Cross-Platform Testing: Ensure the app functions well across different devices and operating systems.
Performance Optimization: Focus on optimizing both frontend and backend performance.
Backend Optimization: Optimize server responses and ensure robust error handling.

Day 10 (July 12): Preparation for Presentation
Prepare Demonstration: Prepare the final demonstration, focusing on both frontend and backend features.
Collate Presentation Materials: Develop materials that explain the entire app architecture, including design decisions and technical challenges.

## Nice-to-haves

1. Voice Recognition Feature: Add a voice recognition feature for the ChatGPT interaction, allowing users to describe their emergencies by voice, which is particularly useful when they have no time to type.
2. Offline Access: Allow users to access first aid guides even without internet connectivity.
3. Multi-Language Support: Offer the app's content in multiple languages to reach a broader audience.

