import { PetStayContext } from '../contexts/PetStayContext';
import { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function PetStayDetailsPage() {
  const { fetchSingleStay } = useContext(PetStayContext);
  const [petStay, setPetStay] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const details = async () => {
      const data = await fetchSingleStay(id);
      setPetStay(data);
    };
    details();
  }, [id]);

  console.log(petStay);

  if (!petStay) {
    return <div className="p-20 text-center">Loading Pawbnb Details...</div>;
  }

  return (
    <div className="p-10">
      <div className="petStayCard bg-white shadow-lg p-6 rounded-2xl">
        <img
          src={petStay.image}
          alt={petStay.title}
          className="w-full h-64 object-cover rounded-xl"
        />
        <h2 className="text-2xl text-black font-bold mt-4">{petStay.title}</h2>
        <p className="text-gray-600">{petStay.location}</p>
        <p className="font-bold text-teal-600">
          ${petStay.pricePerNight} / night
        </p>
      </div>
    </div>
  );
}

export default PetStayDetailsPage;
