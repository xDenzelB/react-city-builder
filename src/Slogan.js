import React from 'react';

export default function Slogan({ slogans }) {
  return (
    <div className='slogan'>
      {slogans}
      {/* this component takes in a slogan as a prop. Render it out here however you like */}
    </div>
  );
}
