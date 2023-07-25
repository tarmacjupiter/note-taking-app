import React, { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote({
      ...note,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (note.title.trim() !== '' && note.content.trim() !== '') {
      onAddNote({
        ...note,
        id: Date.now()
      });
      setNote({
        title: '',
        content: ''
      });
    }
  };

  return (
    // <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Note Title"
          value={note.title}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="Write your note here..."
          value={note.content}
          onChange={handleChange}
        />
        <br />
        <button className='form-btn' type="submit">Add Note</button>
      </form>
    // </div>
  );
}

export default NoteForm;
