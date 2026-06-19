import React from 'react';
import '../styles/Notes.css';

function Notes() {
  const notes = [
    "Any complex concept can be simplified. Once simplified, it can cause curiosity. Once you're curious, complex is not complex anymore.",
    "Humans were designed to create. This is why we get depressed when all we do is consume.",
    "Every action you take is a vote for the type of person you wish to become. - James Clear, Atomic Habits",
    "The things we do, do things to us.",
  ];

  return (
    <div className="notes">
      <h1 className="page-title">Quick Notes</h1>
      <div className="notes-content">
        <p className="notes-intro">Personal notes, takeaways, and quick thoughts.</p>
        <ul className="notes-list">
          {notes.map((note, index) => (
            <li key={index} className="note-item">{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notes;
