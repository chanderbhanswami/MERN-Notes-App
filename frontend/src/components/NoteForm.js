import React, { useState } from 'react';
import '../styles/NoteForm.css';

const NoteForm = ({ initialNote = {}, onSubmit, onCancel, isEditing = false }) => {
  const [formData, setFormData] = useState({
    title: initialNote.title || '',
    content: initialNote.content || '',
    category: initialNote.category || 'other',
    priority: initialNote.priority || 'medium',
    completed: initialNote.completed || false
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Please fill in both title and content');
      return;
    }

    try {
      setLoading(true);
      await onSubmit(formData);
      if (!isEditing) {
        setFormData({
          title: '',
          content: '',
          category: 'other',
          priority: 'medium',
          completed: false
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter note title..."
          maxLength={100}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content *</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Enter note content..."
          rows={5}
          maxLength={1000}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="other">Other</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="study">Study</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      {isEditing && (
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="completed"
              checked={formData.completed}
              onChange={handleChange}
            />
            Mark as completed
          </label>
        </div>
      )}

      <div className="form-actions">
        <button 
          type="submit" 
          className="btn-primary"
          disabled={loading}
        >
          {loading ? 'Saving...' : (isEditing ? 'Update Note' : 'Create Note')}
        </button>
        
        {isEditing && onCancel && (
          <button 
            type="button" 
            className="btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default NoteForm;