import React from 'react';

const Note = ({ note, onDeleteNote }) => {
    return (
        <div style={noteStyle}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button style={buttonStyle} onClick={() => onDeleteNote(note.id)}>Delete</button>
        </div>
    )
} 

const noteStyle = {
    borderRadius: "5%",
    backgroundColor: "#efe1d1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
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

export default Note;