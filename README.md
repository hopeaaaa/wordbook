# Project Title
Wordbook

## Overview
 
Wordbook is a full-stack web application and hidden objects game for playful, casual, language learning. 
Hidden objects games are games where users have to search for items hidden within a busy or cluttered scene. 

### Problem / Opportunity
This app provides users an engaging way to for users to expand their vocabulary in a foreign language while playing a game, addressing the challenge of word retention and applying vocabulary in context.

### User Profile
Primary Users:
* Casual gaming enthusiast
* Language learning enthusiasts
* With basic knowledge of French


### Features
* Hidden Objects Game / Gamified Language Learning
* Magnifying glass to see details
* Sound Effects and Animations
* Vocabulary Cards
* French to English Translator
* Save Translations
  

### Tech Stack
* Frontend: React.js, Axios, Sass
* Backend: Node.js, Express.js, Knex, MySQL (using Workbench for database management)
* APIs: Google Translate, Google Speech to Text, Google Vision

### Sitemap
![wordbook-sitemap](https://github.com/user-attachments/assets/9a486486-e3c8-4f04-95f5-3413c8ffbe8f)


### API Endpoints 
| Endpoint                         | Method | Description                            |
|----------------------------------|--------|----------------------------------------|
| /api/translation                 | GET    | Get a new translation                  |
| /api/pronunciation               | GET    | Get a new pronunciation                |
| /api/user/:userId                | GET    | Get user profile and save translations |
| /api/user/save                   | POST   | Add and save a new translation         |
| /api/user/update                 | PUT    | Update an existing saved translation   |
| /api/user/delete/:translationId  | DELETE | Delete a saved translation             |

![wordbook-schema](https://github.com/user-attachments/assets/b4b01d1b-f00e-4082-9780-e2e67739b1a4)



### Roadmap
1.  Begin illustrating the setting/designing the game.
2.  Find tutorials for translation and game web apps built with React
3. 	Set up backend (MySQL), initialize the database schema.
4. 	Determine game mechanics.
5. 	Build frontend (React) and design the main UI components.
6. 	Implement API endpoints
7. 	Develop functionality
8. 	Final UI/UX polish, bug fixes, full app testing, and deployment.


### Future Implementations
* Sound, animations
* Levels, stories, homonyms
* Image recognition 

### Repos:
* https://github.com/hopeaaaa/wordbook/
* https://github.com/hopeaaaa/wordbook-API
