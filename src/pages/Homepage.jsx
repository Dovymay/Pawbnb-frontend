import Hero from '../components/Hero';
import { PetStayContext } from '../contexts/PetStayContext';
import { useContext, useState, useEffect } from 'react';
import PetStayCard from '../components/PetStayCard';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const { featuredStays } = useContext(PetStayContext);

  return (
    <div>
      <div>
        <Hero />
      </div>

      {/* List of all stays:
      <div
        className="petStaysList"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}
      >
        {petStays.map((oneStay) => (
          <PetStayCard key={oneStay._id} petStay={oneStay} />
        ))}
      </div> */}

      {/* Approach with featured stays */}
      <section className="section">
        <h2 className="title">Featured stays</h2>

        <div className="grid">
          {featuredStays.map((oneStay) => (
            <PetStayCard key={oneStay._id} petStay={oneStay} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/all-listings">
            <button className="bg-primary hover:bg-border/80 text-white rounded-xl px-8 py-3 mt-3">
              Explore more🐾
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
