import React from 'react';
import NoteList from '../components/NoteList';
import { Link } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';

const Home = () => {
  const { notes } = useNotes();

  const getStats = () => {
    const total = notes.length;
    const completed = notes.filter(note => note.completed).length;
    const pending = total - completed;
    const categories = [...new Set(notes.map(note => note.category))].length;

    return { total, completed, pending, categories };
  };

  const stats = getStats();

  return (
    <div className="container">
      <div className="home-header">
        <h1>My Notes</h1>
        <Link to="/add" className="btn-primary">
          ➕ Add New Note
        </Link>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{stats.total}</div>
          <div className="stat-label">Total Notes</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.pending}</div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.completed}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.categories}</div>
          <div className="stat-label">Categories</div>
        </div>
      </div>

      <NoteList />
    </div>
  );
};

export default Home;