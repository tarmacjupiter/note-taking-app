import React, { useState, useEffect } from 'react';
import Header from './src/Header';
import Note from './src/Note';
import NoteForm from './src/NoteForm';
import { getNotes, saveNotes } from './notesData';
import "./styles.css"


const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = getNotes();
    setNotes(storedNotes);
  }, []);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
    saveNotes([...notes, newNote]);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  return (
    <div>
      {/* <h1 className='text-center'>App that Takes Notes!</h1>
      <p>hehe</p> */}
      <Header />
      <NoteForm onAddNote={handleAddNote} />
      <br />
      <div className='note-container'>
        {notes.map((note) => (
          <Note key={note.id} note={note} onDeleteNote={handleDeleteNote} />
        ))}
      </div>
    </div>
  );
}

export default App;
