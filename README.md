# Project Title
Wordbook

## Overview

Wordbook is a hidden objects game for playful, casual, language learning. Hidden objects games are games where users have to search for items hidden within a busy or cluttered scene. 

### Problem / Opportunity
This app provides users a simple and engaging way to expand their vocabulary in a foreign language, addressing the challenge of word retention and efficiency.

### User Profile
Primary Users:
Language learning enthusiasts
Adults with a basic knowledge of French

### Features

As a user, I want to be able to scan an ingredient list via image upload or text input.
As a user, I want AI to categorize ingredients as Beneficial, Potential Irritants, or Harmful.
As a user, I want to receive personalized ingredient analysis based on my skin type.
As a user, I want AI to recommend safer product alternatives.
As a user, I want access to an ingredient glossary to learn about skincare ingredients.
As a user, I want to save products and ingredients for future reference.
As a user, I want an intuitive and user-friendly interface.

### Tech Stack
Frontend: React.js, SCSS for styling
Backend: MySQL (using Workbench for database management)
AI: 
APIs:

### Sitemap
Home Page – App introduction, CTA to scan/paste ingredients
Scan Page – Upload image or paste ingredient list
Results Page – Ingredient breakdown, safety categorization, and recommendations
Glossary Page – Search & browse ingredient information
Profile Page – User settings, saved products, and skin type preferences
Data Structure
Users Table – Stores user profiles, skin types, and saved products
Ingredients Table – List of ingredients, their category (safe, irritant, harmful), and effects
Products Table – Stores product names, ingredients, and suggested alternatives
API Endpoints
POST /analyze – Accepts image/text input, returns categorized ingredients.
GET /ingredients/:name – Fetches details for a specific ingredient.
GET /alternatives/:productId – Returns safer product recommendations.
POST /user/preferences – Saves user skin type and preferences.
GET /user/saved – Fetches user’s saved products.

### Roadmap
Day	Task
1	Set up backend (MySQL), initialize the database schema.
2	Implement AI-Powered Ingredient Breakdown – Integrate Google Cloud Vision API.
3	Implement NLP categorization for ingredient analysis and match extracted ingredients to database records.
4	Develop database structure and populate ingredient database (harmful, beneficial, and neutral ingredients).
5	Build frontend (React) and design the main UI components.
6	Implement API endpoints to support ingredient breakdown and integrate backend with frontend.
7	Develop Personalized Skin Type Analysis – User quiz and preference storage.
8	Implement Better Product Alternatives Finder – Fetch alternative product suggestions based on ingredient analysis.
9	Develop Smart Ingredient Glossary – Create search & learn functionality for ingredient definitions.
10	Final UI/UX polish, bug fixes, full app testing, and deployment.

### Future Implementations
Sound, animations

Repos:
