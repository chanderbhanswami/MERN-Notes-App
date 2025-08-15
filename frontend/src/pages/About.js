import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="about-page">
        <h1>About MERN Notes App</h1>
        
        <div className="about-content">
          <section className="about-section">
            <h2>🚀 Purpose</h2>
            <p>
              This is a lightweight MERN stack application designed for deployment testing.
              It demonstrates full-stack functionality with a clean, responsive interface
              for managing notes and tasks.
            </p>
          </section>

          <section className="about-section">
            <h2>🛠️ Tech Stack</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <h3>Frontend</h3>
                <ul>
                  <li>React 18</li>
                  <li>React Router DOM</li>
                  <li>Context API</li>
                  <li>Axios</li>
                  <li>React Hot Toast</li>
                </ul>
              </div>
              <div className="tech-item">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB with Mongoose</li>
                  <li>CORS</li>
                  <li>Helmet</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>✨ Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h4>📝 CRUD Operations</h4>
                <p>Create, read, update, and delete notes</p>
              </div>
              <div className="feature-item">
                <h4>📱 Responsive Design</h4>
                <p>Works seamlessly on desktop, tablet, and mobile</p>
              </div>
              <div className="feature-item">
                <h4>🏷️ Categories & Priority</h4>
                <p>Organize notes with categories and priority levels</p>
              </div>
              <div className="feature-item">
                <h4>✅ Task Management</h4>
                <p>Mark notes as completed or pending</p>
              </div>
              <div className="feature-item">
                <h4>🔄 Real-time Updates</h4>
                <p>Instant updates with optimistic UI</p>
              </div>
              <div className="feature-item">
                <h4>🚀 Deployment Ready</h4>
                <p>Configured for Vercel (frontend) and Render (backend)</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>🌐 Deployment</h2>
            <p>
              This application is designed to be deployed on:
            </p>
            <ul>
              <li><strong>Frontend:</strong> Vercel (recommended for React apps)</li>
              <li><strong>Backend:</strong> Render (free tier available)</li>
              <li><strong>Database:</strong> MongoDB Atlas (cloud database)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;