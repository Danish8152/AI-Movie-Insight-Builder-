#Movie Details App
A React-based web application to display detailed information about movies, including cast, plot, ratings, and audience sentiment.

#Setup Instructions
Clone the repository
git clone https://github.com/Danish8152/AI-Movie-Insight-Builder
cd AI-Movie-Insight-Builder

#Install dependencies
npm install

#Set up environment variables
Create a .env file in the root and add your API URL:
VITE_API_URL= https://ai-movie-insight-builder-backend-1.onrender.com

#Run the development server
npm run dev

#The app should now be running at https://movie-insights.netlify.app/

#Build for production
npm run build
This generates optimized production files in the dist/ folder.

#Tech Stack Rationale
React.js – For building a modular, component-based UI and managing state efficiently.
JavaScript – Core programming language for front-end logic and interactivity.
Node.js – Handles backend APIs, environment management, and development tooling.
React Router – Enables dynamic routing for movie detail pages (/movie/:imdbId).
CSS Modules / Custom CSS – Provides scoped styling and custom animations, like the loading spinner.
Fetch API – Simple, native solution for making HTTP requests to the backend API.
Vite – Fast build tool and development server optimized for modern React apps.

#Why these choices:
We prioritized speed, simplicity, and maintainability. JavaScript and Node.js provide a full-stack foundation, while React and Vite allow rapid front-end development with a smooth developer experience. Vanilla CSS keeps the project lightweight and customizable.

#Backend / API Details
The frontend expects the backend API to return movie details in JSON format. Here’s the expected structure for a single movie:
{
  "title": "Inception",
  "year": "2010",
  "rating": "8.8",
  "poster": "https://image-url.com/inception.jpg",
  "plot": "A skilled thief is offered a chance to erase his criminal past...",
  "sentiment": {
    "summary": "Mostly positive reactions from audiences.",
    "overall": "Positive"
  },
  "cast": [
    {
      "name": "Leonardo DiCaprio",
      "character": "Cobb",
      "profile": "https://image-url.com/leonardo.jpg"
    },
    {
      "name": "Joseph Gordon-Levitt",
      "character": "Arthur",
      "profile": "https://image-url.com/joseph.jpg"
    }
  ]
}


#Assumptions
The API endpoint returns complete movie details including cast, poster URL, plot, rating, and sentiment.
All images (poster and cast profiles) are publicly accessible URLs.
The app is single-page and only handles one-to-one movie detail display; no search or multi-page listings yet.
Audience sentiment data may be missing for some movies; the UI handles this gracefully.