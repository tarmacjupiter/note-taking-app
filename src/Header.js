import React from 'react'

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Note Taking App!</h1>
            <p>Write and save your notes here!</p>
        </header>
    );
}


const headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "1rem",
    marginBottom: "5%",
    width: "100%",
};

export default Header;