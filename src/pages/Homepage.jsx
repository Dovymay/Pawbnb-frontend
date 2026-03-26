import React from 'react';
import Hero from '../components/Hero';
import { PetStayContext } from '../contexts/PetStayContext';
import { useContext, useState, useEffect } from 'react';
import PetStayCard from '../components/PetStayCard';

const Homepage = () => {
  const { petStays } = useContext(PetStayContext);
  console.log(petStays);
  return (
    <div>
      <div>
        <Hero />
      </div>

      <div className="petStaysList" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {petStays.map((oneStay) => (
          <PetStayCard key={oneStay._id} petStay={oneStay} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
