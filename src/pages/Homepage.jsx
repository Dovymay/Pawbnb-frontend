import Hero from '../components/Hero';
import { PetStayContext } from '../contexts/PetStayContext';
import { useContext, useState, useEffect } from 'react';
import PetStayCard from '../components/PetStayCard';
import { Link, useParams } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';
import amsterdam from '../assets/Amsterdam.jpg';
import rotterdam from '../assets/Rotterdam.jpg';
import utrecht from '../assets/Utrecht.jpg';

const Homepage = () => {
  const { featuredStays } = useContext(PetStayContext);

  return (
    <div>
      <div>
        <Hero />
      </div>

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
            <button className="bg-primary/70 hover:bg-primary/100 text-white rounded-xl px-8 py-3 mt-5 mb-0">
              Explore More🐾
            </button>
          </Link>
        </div>
        <hr className="mt-5 w-xl border-gray-500 dark:border-neutral-500 border-1" />
      </section>

      <section className="section">
        <h2 className="flex justify-center title-2">Explore by location</h2>
        <div className="flex justify-center">
          <div className="flex justify-center w-screen gap-8">
            <div className="location-card">
              <Link to={`/location/Amsterdam`}>
                <img src={amsterdam} className="location-image" />
              </Link>
              <p>Amsterdam</p>
            </div>
            <div className="location-card">
              <Link to={`/location/Rotterdam`}>
                <img src={rotterdam} className="location-image" />
              </Link>
              <p>Roterdam</p>
            </div>
            <div className="location-card">
              <Link to={`/location/Utrecht`}>
                <img src={utrecht} className="location-image" />
              </Link>
              <p>Utrecth</p>
            </div>
          </div>
        </div>
        <hr className="mt-5 w-xl border-gray-500 dark:border-neutral-500 border-1" />
      </section>

      <WhyChooseUs />

      <section className="section-host">
        <div className="flex justify-center">
          <h2 className="title-3">Become a Host. Start earning with Pawbnb.</h2>
        </div>
        <div className="flex justify-center">
          <Link to="/host">
            <button className="bg-primary/70 hover:bg-primary/100 text-white rounded-xl px-8 py-3 mb-0">
              List Your Place🐾
            </button>
          </Link>
        </div>
        <hr className="mt-5 w-xl border-gray-500 dark:border-neutral-500 border-1" />
      </section>
    </div>
  );
};

export default Homepage;
