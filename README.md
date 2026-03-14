# FAQ Grading Backend (Node.js)

This is a Node.js backend application built with Express, MongoDB, and Redis. It provides RESTful APIs to manage FAQs and Grades. The project features rate limiting, caching with Redis, request validation using Joi, and an error handling middleware.

## Features

- **FAQ Management:** Create, read, update, and delete FAQs.
- **Grades Management:** Manage student grades, including profile images, classes, subjects, and marks.
- **Caching:** Redis-backed caching for read-heavy operations.
- **Rate Limiting:** Protects endpoints from abuse using rate limits backed by Redis.
- **Validation:** Request body validation using Joi.
- **Docker Support:** Fully containerized with Docker and Docker Compose.

## Technologies Used

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose)
- **Cache/Rate Limiting:** Redis
- **Validation:** Joi
- **Security:** bcrypt, jsonwebtoken, express-rate-limit

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or a cloud instance like Atlas)
- [Redis](https://redis.io/) (running locally or a cloud instance)
- [Docker](https://www.docker.com/) (optional, for containerized environment)

## Environment Variables

Create a `.env` file in the root directory based on the following pattern:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/faq-data
JWT_SECRET=your_jwt_secret_here
REDIS_URL=redis://localhost:6379  # Use redis://redis:6379 if running via Docker
REDIS_PASSWORD=your_redis_password_here
```

## Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd faq-grading-backend-nodejs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server (Development mode):**
   ```bash
   npm start
   ```
   *The server uses `nodemon` for auto-reloading and will typically run on `http://localhost:3000` or `http://localhost:3008` if the PORT environment variable is missing.*

## Running with Docker

You can easily spin up the API, MongoDB, and Redis using Docker Compose.

1. Make sure Docker and Docker Compose are installed.
2. Run the following command in the root of your project:
   ```bash
   docker-compose up --build
   ```
   *The API will be available on `http://localhost:5000` (mapped securely from the container).*

## API Endpoints

### FAQ Endpoints
- **GET** `/api/faqs` - Get a list of FAQs
- **POST** `/api/faqs` - Create a new FAQ
- **PUT** `/api/faqs/:id` - Update an existing FAQ by ID
- **DELETE** `/api/faqs/:id` - Delete an FAQ by ID

### Grade Endpoints
All grade routes are protected primarily by rate limiting. `GET` routes are cached to optimize performance.

- **GET** `/api/grades/all` - Get all grades
- **GET** `/api/grades/` - Get grades with optional query parameters (e.g., `?name=qw`)
- **GET** `/api/grades/:id` - Get a single grade by ID
- **POST** `/api/grades/` - Create a new grade `(Requires validation)`
- **PUT** `/api/grades/:id` - Update an existing grade by ID `(Requires validation)`
- **DELETE** `/api/grades/:id` - Delete a grade by ID
