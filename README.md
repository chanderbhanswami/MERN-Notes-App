
# MERN Notes App

A full-stack note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). Easily create, manage, and organize your notes online with a modern, responsive UI.

## Features
- Create, read, update, and delete notes
- Responsive and mobile-friendly design
- RESTful API backend
- User-friendly React frontend
- Error handling and validation
- SEO and production-ready meta tags

## Live Demo
- Frontend: Deployed on [Vercel](https://vercel.com/)
- Backend: Deployed on [Render](https://render.com/)

## Project Structure

```
mern-notes-app/
├── backend/      # Express.js API and MongoDB models
├── frontend/     # React.js client app
├── README.md     # Project documentation (this file)
```

## Deployment

- **Frontend**: Deploy the `frontend` folder to Vercel. Connect your GitHub repo and follow Vercel's setup instructions.
- **Backend**: Deploy the `backend` folder to Render. Connect your GitHub repo and set up environment variables as needed.

### Environment Variables
- See `backend/.env.example` and `frontend/.env.example` for required variables.

## Getting Started (Local Development)

1. Clone the repository:
	```bash
	git clone https://github.com/yourusername/mern-notes-app.git
	cd mern-notes-app
	```
2. Install dependencies for both frontend and backend:
	```bash
	cd backend && npm install
	cd ../frontend && npm install
	```
3. Set up your `.env` files in both `backend` and `frontend` as needed.
4. Start the backend server:
	```bash
	cd backend
	npm start
	```
5. Start the frontend app:
	```bash
	cd ../frontend
	npm start
	```
6. Visit [http://localhost:3000](http://localhost:3000) in your browser.

## API Documentation
See [backend/README.md](backend/README.md) for API endpoints and usage.

## Developer Info
- **Author:** Your Name (your.email@example.com)
- **GitHub:** [yourusername](https://github.com/yourusername)

## Contact
For questions, suggestions, or support, please open an issue or contact the developer at your.email@example.com.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

> © 2025 Your Name. Built with MERN, deployed on Vercel & Render.
