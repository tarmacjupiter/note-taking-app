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
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="title"
          placeholder="Note Title"
          value={note.title}
          onChange={handleChange}
          style={inputStyle}
        />
        <br />
        <textarea
          name="content"
          placeholder="Write your note here..."
          value={note.content}
          onChange={handleChange}
          style={textAreaStyle}
        />
        <br />
        <button style={buttonStyle} className='form-btn' type="submit">Add Note</button>
      </form>
    // </div>
  );
}

const buttonStyle = {
    backgroundColor: "#a78295",
    border: "none",
    padding: "15px 32px",
    textAlign: "center",
    display: "inline-block",
    margin: "5%",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
}

const formStyle = {
  display: "flex",
  flexDirection: "column"
}

const inputStyle = {
  width: "100%",
  padding: "12px 20px",
  margin: "8px 0",
  boxSizing: "border-box",
}

const textAreaStyle = {
  width: "100%",
  padding: "50px 20px",
  margin: "8px 0",
  boxSizing: "border-box"
}

export default NoteForm;
