# Project Title
Wordbook

## Overview

Wordbook is a hidden objects game for casual, playful, language learning. 

### Problem/Opportunity

I want to make a game focused on increasing vocabulary in foreign languages. 

### User Profile

Adults interested in expanding their french vocabulary

### Features

- identify and select objects
- create and view a list of vocabulary
- hear correct pronunciation
- search and add to the list

## Implementation

### Tech Stack

- React
- TypeScript
- MySQL
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express
    - bcrypt for password hashing

### APIs

- https://libretranslate.com/

### Sitemap

- Landing page/Game screen
- Vocab list


### Mockups

#### Home Page
![](home.png)

#### Register Page
![](register.png)

### Data

![](sql-diagram.png)
![sql-diagram](https://github.com/user-attachments/assets/c0d1d5ce-54c9-4b2a-ad53-51d71151eeab)
### Endpoints

**GET /word**

- Get word
Parameters:
- ???


Response:
```
[
    {
        "id": 1,
        "name": "Quantum Coffee",
        "distance": 0.25,
        "averageRating": 4.5,
        "visited": true
    },
    ...
]
```

**GET /cafes/:id**

- Get café by id, with an optional "userRating" if the user is logged in or not

Parameters:
- id: Café id as number
- token (optional):  JWT used to add user rating

Response:
```
{
    "id": 1,
    "name": "Quantum Coffee",
    "distance": 0.25,
    "averageRating": 4.5,
    "userRating": 5
}
```

**POST /cafes/:id/rating**

- Logged in user can add their rating of a café

Parameters:
- id: Café id
- token: JWT of the logged in user
- rating: Number Rating out of 5 in 0.5 increments

Response:
```
{
    "id": 1,
    "name": "Quantum Coffee",
    "distance": 0.25,
    "averageRating": 4.5,
    "userRating": 5
}
```

**PUT /cafes/:id/rating**

- Logged in user can update their rating of a café

Parameters:
- id: Café id
- token: JWT of the logged in user
- rating: Number Rating out of 5 in 0.5 increments

Response:
```
{
    "id": 1,
    "name": "Quantum Coffee",
    "distance": 0.25,
    "averageRating": 4.5,
    "userRating": 5
}
```

**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:
- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

### Auth

- JWT auth
    - Before adding auth, all API requests will be using a fake user with id 1
    - Added after core features have first been implemented
    - Store JWT in localStorage, remove when a user logs out
    - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 200 responses

- Create migrations

- Gather 15 sample café geolocations in two different cities

- Create seeds with sample café data

- Deploy client and server projects so all commits will be reflected in production

- Feature: List cafés from a given location
    - Implement list cafés page including location form
    - Store given location in sessionStorage
    - Create GET /cafes endpoint

- Feature: View café
    - Implement view café page
    - Create GET /cafes/:id 

- Feature: Rate café
    - Add form input to view café page
    - Create POST /ratings
    - States for add & update ratings 

- Feature: Home page

- Feature: Create account
    - Implement register page + form
    - Create POST /users/register endpoint

- Feature: Login
    - Implement login page + form
    - Create POST /users/login endpoint

- Feature: Implement JWT tokens
    - Server: Update expected requests / responses on protected endpoints
    - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

- sound
- animations
- other languages
