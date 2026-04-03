import { useContext, useState, useEffect } from 'react';
import { PetStayContext } from '../contexts/PetStayContext';
import { useParams } from 'react-router-dom';
import PetStayCard from './PetStayCard';

const Location = () => {
  const { fetchFilteredStays, filteredStays, setFilteredStays } =
    useContext(PetStayContext);

  const { city } = useParams();

  useEffect(() => {
    const details = async () => {
      const data = await fetchFilteredStays(city);
      setFilteredStays(data);
      console.log(data);
    };
    details();
  }, [city]);

  return (
    <div>
      <div className="flex justify-center">
        <h2 className="flex justify-center mt-10 title">Stays in {city}</h2>
      </div>

      <div className="flex justify-center gap-12">
        {filteredStays.map((petStay) => (
          <PetStayCard key={petStay._id} petStay={petStay} />
        ))}
      </div>
    </div>
  );
};

export default Location;
