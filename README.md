# Project Title
Wordbook

## Overview
 
Wordbook is a full-stack web application and hidden objects game for playful, casual, language learning. 
Hidden objects games are games where users have to search for items hidden within a busy or cluttered scene. 

### Problem / Opportunity
This app provides users an engaging way to expand their vocabulary in a foreign language while playing a game, addressing the challenge of word retention and applying vocabulary in context.

### User Profile
Primary Users:
* Casual gaming enthusiast
* Language learning enthusiasts
* With basic knowledge of French


### Features
* Hidden Objects Game / Gamified Language Learning
* Magnifying glass to see details
* Language Cards
* French to English Translator
* Saved Translations Wordlist
  

### Tech Stack
* Frontend: React.js, Axios, Sass
* Backend: Node.js, Express.js, Knex, MySQL (using Workbench for database management)
* APIs: Google Translate, Google Speech to Text, Google Vision

### Sitemap

### API Endpoints 
* POST /translate – Accepts text input, returns translation.
* POST /get-pronunciation - Accepts text input, returns audio of French pronunciation.
* POST /user/preferences – Saves user's preferences.

| Endpoint                         | Method | Description                            |
|-----------------------------------|--------|----------------------------------------|
| /api/user/:userId                | GET    | Get user profile and save translations |
| /api/user/save                   | POST   | Save a new translation                 |
| /api/user/update                 | PUT    | Update an existing translation         |
| /api/user/delete/:translationId  | DELETE | Delete a saved translation             |


GET /users/:id

* Fetch details for a specific user.
{
  "id": 1,
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
}



### Roadmap
1.	Set up backend (MySQL), initialize the database schema.
2.	Implement AI-Powered Ingredient Breakdown – Integrate Google Cloud Vision API.
3.	Implement NLP categorization for ingredient analysis and match extracted ingredients to database records.
4.	Develop database structure and populate ingredient database (harmful, beneficial, and neutral ingredients).
5.	Build frontend (React) and design the main UI components.
6.	Implement API endpoints to support ingredient breakdown and integrate backend with frontend.
7.	Develop Personalized Skin Type Analysis – User quiz and preference storage.
8.	Implement Better Product Alternatives Finder – Fetch alternative product suggestions based on ingredient analysis.
9.	Develop Smart Ingredient Glossary – Create search & learn functionality for ingredient definitions.
10.	Final UI/UX polish, bug fixes, full app testing, and deployment.

### Future Implementations
Sound, animations
Levels, stories, homonyms

### Repos:
https://github.com/hopeaaaa/wordbook-API
