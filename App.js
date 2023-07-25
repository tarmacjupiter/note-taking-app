import React, { useState, useEffect } from 'react';
import Header from './src/Header';
import Note from './src/Note';
import NoteForm from './src/NoteForm';
import { getNotes, saveNotes } from './notesData';


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
      <Header />
      <NoteForm onAddNote={handleAddNote} />
      <br />
      <div style={noteContainer}>
        {notes.map((note) => (
          <Note key={note.id} note={note} onDeleteNote={handleDeleteNote} />
        ))}
      </div>
    </div>
  );
}

const noteContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
}

export default App;
