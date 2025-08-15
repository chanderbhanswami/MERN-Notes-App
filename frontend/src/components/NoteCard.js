import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';
import NoteForm from './NoteForm';
import '../styles/NoteCard.css';

const NoteCard = ({ note }) => {
  const { editNote, removeNote } = useNotes();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        setIsDeleting(true);
        await removeNote(note._id);
      } catch (error) {
        console.error('Error deleting note:', error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleEdit = async (updatedNote) => {
    try {
      await editNote(note._id, updatedNote);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const toggleComplete = async () => {
    try {
      await editNote(note._id, { ...note, completed: !note.completed });
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ff4757';
      case 'medium': return '#ffa502';
      case 'low': return '#2ed573';
      default: return '#747d8c';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'work': return '💼';
      case 'personal': return '👤';
      case 'study': return '📚';
      default: return '📝';
    }
  };

  if (isEditing) {
    return (
      <div className="note-card editing">
        <NoteForm
          initialNote={note}
          onSubmit={handleEdit}
          onCancel={() => setIsEditing(false)}
          isEditing={true}
        />
      </div>
    );
  }

  return (
    <div className={`note-card ${note.completed ? 'completed' : ''}`}>
      <div className="note-header">
        <div className="note-meta">
          <span className="category">
            {getCategoryIcon(note.category)} {note.category}
          </span>
          <span 
            className="priority" 
            style={{ backgroundColor: getPriorityColor(note.priority) }}
          >
            {note.priority}
          </span>
        </div>
        <div className="note-actions">
          <button
            onClick={toggleComplete}
            className={`btn-complete ${note.completed ? 'completed' : ''}`}
            title={note.completed ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {note.completed ? '✓' : '○'}
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="btn-edit"
            title="Edit note"
          >
            ✏️
          </button>
          <button
            onClick={handleDelete}
            className="btn-delete"
            disabled={isDeleting}
            title="Delete note"
          >
            {isDeleting ? '⏳' : '🗑️'}
          </button>
        </div>
      </div>
      
      <h3 className="note-title">{note.title}</h3>
      <p className="note-content">{note.content}</p>
      
      <div className="note-footer">
        <small className="note-date">
          Created: {new Date(note.createdAt).toLocaleDateString()}
        </small>
        {note.updatedAt !== note.createdAt && (
          <small className="note-date">
            Updated: {new Date(note.updatedAt).toLocaleDateString()}
          </small>
        )}
      </div>
    </div>
  );
};

export default NoteCard;