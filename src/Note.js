import React from 'react';

const Note = ({ note, onDeleteNote }) => {
    return (
        <div className='note'>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
        </div>
    )
} 

export default Note;