# MERN Notes App Backend

This is the backend (API server) for the MERN Notes App. It is built with Node.js, Express, and MongoDB.

## Features
- RESTful API for notes CRUD operations
- MongoDB database connection
- Error handling middleware
- Environment variable support
- Ready for deployment on Render

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the `backend` directory with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

| Method | Endpoint        | Description         |
|--------|----------------|--------------------|
| GET    | /api/notes     | Get all notes      |
| POST   | /api/notes     | Create a new note  |
| GET    | /api/notes/:id | Get a single note  |
| PUT    | /api/notes/:id | Update a note      |
| DELETE | /api/notes/:id | Delete a note      |

## Deployment
- Deploy to [Render](https://render.com/) by connecting your GitHub repo and setting environment variables.

## Developer Info
- **Author:** Your Name (your.email@example.com)
- **GitHub:** [yourusername](https://github.com/yourusername)

## License

This project is licensed under the MIT License. See [LICENSE](../LICENSE) for details.
