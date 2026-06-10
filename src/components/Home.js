import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home() {
  const sentences = [
    'Mario Gegprifti',
    'a computer science student, software engineer and tech enthusiast',
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    if (letterIndex < sentences[sentenceIndex].length) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + sentences[sentenceIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 100); // Speed of typing

      return () => clearInterval(typingInterval);
    } else {
      // Pause before switching to the next sentence
      const pauseInterval = setTimeout(() => {
        setDisplayedText('');
        setLetterIndex(0);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, 2000); // Pause for 2 seconds before clearing

      return () => clearTimeout(pauseInterval);
    }
  }, [letterIndex, sentenceIndex]);

  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <div className="text-content">
            <h1>Hello, I am</h1>
            <h2 className="typing-text">{displayedText}</h2>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-text">
          <h2>Hi there!</h2>
          <p>
           My name is Mario Gegprifti, a software engineer at Betterment with a CS degree from Baruch College.
          </p>
          <p>Currently, I am:</p>
          <ul>
            <li>Working as a software engineer at Betterment</li>
            <li>Experimenting with AI in different areas</li>
          </ul>
        </div>
        <div className="about-links">
          <h2>Links</h2>
          <p>
            <a href="https://github.com/mariocodesforfun" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mario-gegprifti-346b97b9" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/mario.g21_/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          </p>
          <p>
            <a href="mailto:gegpriftimario@gmail.com">[gegpriftimario@gmail.com]</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
