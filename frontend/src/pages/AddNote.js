import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import { useNotes } from '../context/NotesContext';

const AddNote = () => {
  const navigate = useNavigate();
  const { addNote } = useNotes();

  const handleSubmit = async (noteData) => {
    try {
      await addNote(noteData);
      navigate('/');
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Create New Note</h1>
        <p>Add a new note to your collection</p>
      </div>
      
      <div className="form-container">
        <NoteForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddNote;