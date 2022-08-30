import React from 'react';
import Nav from './Nav';

function About() {
  return (
    <>
      <Nav />
      <div className="aboutPage">
        <h1>Developed by Ademibowale</h1>
        <p>
          <a href="https://github.com/ademibowale/Covid-19-tracker" target="_blank" rel="noreferrer">view source</a>
        </p>
      </div>
    </>
  );
}

export default About;
