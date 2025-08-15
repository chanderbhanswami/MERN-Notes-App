import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { getAllNotes, createNote, updateNote, deleteNote } from '../utils/api';
import toast from 'react-hot-toast';

const NotesContext = createContext();

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_NOTES':
      return { ...state, notes: action.payload, loading: false };
    case 'ADD_NOTE':
      return { ...state, notes: [action.payload, ...state.notes] };
    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map(note =>
          note._id === action.payload._id ? action.payload : note
        )
      };
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note._id !== action.payload)
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, {
    notes: [],
    loading: false,
    error: null
  });

  // Fetch all notes
  const fetchNotes = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await getAllNotes();
      dispatch({ type: 'SET_NOTES', payload: response.data.data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      toast.error('Failed to fetch notes');
    }
  };

  // Add new note
  const addNote = async (noteData) => {
    try {
      const response = await createNote(noteData);
      dispatch({ type: 'ADD_NOTE', payload: response.data.data });
      toast.success('Note created successfully');
      return response.data.data;
    } catch (error) {
      toast.error('Failed to create note');
      throw error;
    }
  };

  // Update note
  const editNote = async (id, noteData) => {
    try {
      const response = await updateNote(id, noteData);
      dispatch({ type: 'UPDATE_NOTE', payload: response.data.data });
      toast.success('Note updated successfully');
      return response.data.data;
    } catch (error) {
      toast.error('Failed to update note');
      throw error;
    }
  };

  // Delete note
  const removeNote = async (id) => {
    try {
      await deleteNote(id);
      dispatch({ type: 'DELETE_NOTE', payload: id });
      toast.success('Note deleted successfully');
    } catch (error) {
      toast.error('Failed to delete note');
      throw error;
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const value = {
    ...state,
    addNote,
    editNote,
    removeNote,
    fetchNotes
  };

  return (
    <NotesContext.Provider value={value}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};