import { PetStayContext } from '../contexts/PetStayContext';
import { useContext, useState, useEffect } from 'react';
import PetStayCard from '../components/PetStayCard';

const AllListingsPage = () => {
  const { petStays } = useContext(PetStayContext);

  return (
    <div>
      <section className="section">
        <h2 className="title">All stays</h2>
        <div className="grid">
          {petStays.map((oneStay) => (
            <PetStayCard key={oneStay._id} petStay={oneStay} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllListingsPage;
