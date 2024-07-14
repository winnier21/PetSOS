<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://github.com/winnier21/chelsea-hsieh-capstone">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">PetSOS</h3>

  <p align="center">
    A mobile application to assist pet owners in managing emergency situations efficiently.
    <br />
    <a href="https://github.com/winnier21/chelsea-hsieh-capstone"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/winnier21/chelsea-hsieh-capstone">View Demo</a>
    ·
    <a href="https://github.com/winnier21/chelsea-hsieh-capstone/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/winnier21/chelsea-hsieh-capstone/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

PetSOS is a mobile application designed to assist pet owners in managing emergency situations efficiently by providing immediate access to local veterinary services, step-by-step first aid instructions, and navigation to the nearest vet that can offer immediate assistance. It also includes an intelligent chat feature that helps pet owners describe their emergencies and receive instant advice.

### Problem

Pet owners deeply care for their pets, yet many lack the necessary knowledge and preparation for handling pet emergencies effectively. Statistics reveal that most North American pet owners are unprepared to provide essential emergency care during life-threatening situations. PetSOS addresses this issue by providing critical guidance in emergencies.

### User Profile

Pet owners who need immediate and reliable emergency responses for their pets. Users may be in remote areas with limited access to veterinary services or may need guidance on handling emergencies before professional help is available.

### Features

PetSOS aims to bridge the knowledge gap that exists in pet emergency first aid. This app accomplishes four main things:

1. Automatically prepares a list of nearby veterinarians and calls each until answered.
2. Guides pet owners with accurate first aid instructions and procedures while waiting for veterinarian response.
3. Navigates the user to the nearest open veterinary clinic or the clinic they would like to go based on opening hours information, ensuring they go to a clinic that can see them immediately by utilizing the Places API.
4. Interactive Chat Feature: Utilizes the ChatGPT API to let users describe their pet's emergency in natural language and receive immediate, contextually relevant advice.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React Native][React.js]][React-url]
* [![Node.js][Node.js]][Node-url]
* [![Express.js][Express.js]][Express-url]
* [![Google Maps API][GoogleMaps]][GoogleMaps-url]
* [![Twilio API][Twilio]][Twilio-url]
* [![OpenAI][OpenAI]][OpenAI-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```
### Installation
* npm
  ```sh
  npm install npm@latest -g
     ```

1. Get a free Places API Key at [https://console.cloud.google.com/apigee/welcome](https://console.cloud.google.com/apigee/welcome)

2. Get a OpenAI API key ($US 5 required) at [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)

2. Clone the repo
   ```sh
   git clone https://github.com/winnier21/PetSOS
   ```
3. Install NPM packages
   ```sh
   npm install cors dotenv express node-fetch nodemon openai npm@latest -g
   ```
4. Enter your API in `.env.example` files in both client and server directories and renames the file name of.env.example to .env
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
# Server .env
PORT=8080
BACKEND_URL=http://localhost
OPENAI_API_KEY=OpenAI_API
GOOGLE_API_KEY=Places_API

# Client .env
VITE_OPENAI_API_KEY=OpenAI_API
VITE_GOOGLE_API_KEY=Places_API
VITE_API_URL=(http://localhost:8080)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage
Use the PetSOS app to manage pet emergencies efficiently. The app allows you to:

Automatically call the nearest veterinary clinic.
Get real-time navigation to the nearest open clinic.
Receive step-by-step first aid instructions.
Chat with an intelligent assistant for immediate advice.
For more examples, please refer to the Documentation

<p align="right">(<a href="#readme-top">back to top</a>)</p>
Roadmap
 Add Changelog
 Add back to top links
 Add Additional Templates w/ Examples
 Add "components" document to easily copy & paste sections of the readme
 Multi-language Support
 Chinese
 Spanish
<p align="right">(<a href="#readme-top">back to top</a>)</p>
Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
<p align="right">(<a href="#readme-top">back to top</a>)</p>
License
Distributed under the MIT License. See LICENSE.txt for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
Contact
Chelsea Hsieh - winnier16@gmail.com

Project Link: https://github.com/winnier21/PetSOS

<p align="right">(<a href="#readme-top">back to top</a>)</p>
Acknowledgments
Choose an Open Source License
GitHub Emoji Cheat Sheet
Malven's Flexbox Cheatsheet
Malven's Grid Cheatsheet
Img Shields
GitHub Pages
Font Awesome
React Icons
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 















