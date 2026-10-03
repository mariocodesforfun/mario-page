import React from 'react';
import '../styles/Notes.css';

function Notes() {
  const notes = [
    "Any complex concept can be simplified. Once simplified, it can cause curiosity. Once you're curious, complex is not complex anymore.",
    "Humans were designed to create. This is why we get depressed when all we do is consume.",
    "Every action you take is a vote for the type of person you wish to become. - James Clear, Atomic Habits",
    "The things we do, do things to us.",
    <>
      Emotional Emotional Design (by Don Norman):{' '}
      <a href="https://periodic-map-79a.notion.site/Emotional-Design-3ea1f363454b8042a8cfc3f8c27ab66a">
        some notes
      </a>
    </>,
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
