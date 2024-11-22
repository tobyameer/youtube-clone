# Youtube Clone
#### Youtube clone using React JS | Rapid API | Material UI.
I built a YouTube clone that allows users to search for, view, and interact with videos, closely mimicking the main features of YouTube. The app pulls data from RapidAPI's YouTube API, and the front-end is developed using React.js with Material UI for styling. This project helped me sharpen my skills in working with APIs, managing state in React, and implementing responsive design.

## Skills Highlighted:
1. React.js (Component-based architecture, React Router, useState, useEffect)..
2. Material UI (Styling, Grid system, Responsive Design)
3. API Integration (RapidAPI, YouTube API, Axios)
4. Responsive Design (Mobile-first UI, Grid system)
5. Video Player Integration (YouTube embed iframe)
6. Deployment (Netlify)

## Technologies Used:

1. Frontend:
  * React.js: The core of the app is built with React, which allows me to create reusable components for the search bar, video display, and video player. React’s state management is used to manage the list of search results and the selected video.
  * React Router: I used React Router for navigating between different components of the app, such as the homepage, search results, and individual video pages.

2. API Integration:
  * RapidAPI: The app fetches video data from the YouTube API through RapidAPI. RapidAPI allows easy access to various third-party APIs, and I utilized it to make requests to the YouTube API and retrieve data like video titles, descriptions, and thumbnails.
  * Axios: Axios was used to make asynchronous HTTP requests to RapidAPI’s YouTube API, fetching search results and video data in a way that is efficient and asynchronous.

3. State Management:

  * React State: The app uses React’s built-in state management to handle the data for video search results and the selected video. The search query and API responses are stored in the state, and I used React hooks (like useState and useEffect) to handle the state logic.

4. Responsive Design:

  * Material UI Grid: For responsive design, I used Material UI’s Grid system, which allows for flexible and adaptive layouts across different screen sizes. The app automatically adjusts the layout for mobile and desktop views, ensuring a seamless user experience.

5. YouTube Video Player:

  * YouTube Embed: I used the YouTube embedded player (via iframe) to display videos when users click on them. This allows users to watch videos without leaving the app and closely mimics the functionality of YouTube.
    
## Challenges Faced:
1. Handling API Rate Limits: One challenge was managing API rate limits. Since the YouTube API has request limits, I had to ensure that the app made efficient requests and only retrieved the necessary data, avoiding excessive API calls.

2. Responsive Design: Ensuring that the layout was fully responsive across multiple devices was another challenge. Thankfully, Material UI’s Grid system helped me handle the layout efficiently, but I had to fine-tune some components to ensure consistency on all screen sizes.

3. Video Data Fetching: Another challenge was managing dynamic data loading for video results. I used loading indicators and error handling to ensure that users had a smooth experience while the data was being fetched from the API.

