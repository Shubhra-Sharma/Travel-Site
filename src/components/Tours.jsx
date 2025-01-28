import React from 'react';
import Card from './Card';

function Tours({ tours, removeTour }) {
  console.log('Tours:', tours);
  return (
    <div className="container">
      <div>
        <h2 className='title'>India Travel Diaries</h2>
      </div>
      <div className='cards'>
      {tours.map((tour) => (
        <Card key={tour.id} {...tour} removeTour={removeTour} />
      ))}
      </div>
    </div>
  );
}

export default Tours;