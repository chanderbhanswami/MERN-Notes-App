import React from 'react';
import NoteCard from './NoteCard';
import { useNotes } from '../context/NotesContext';

const NoteList = () => {
  const { notes, loading, error } = useNotes();

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading notes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <h3>No notes found</h3>
        <p>Create your first note to get started!</p>
      </div>
    );
  }

  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;