import { PetStayContext } from '../contexts/PetStayContext';
import { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BookingBox from '../components/BookingBox.jsx';

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

  if (!petStay) {
    return <div className="p-20 text-center">Loading Pawbnb Details...</div>;
  }

  return (
    <div className="petStay-details-page">
      <div className="petStay-hero">
        <img src={petStay.image} alt={petStay.title} />
      </div>

      <div className="petStay-container">
        <div className="details-layout">
          <div className="details-main">
            <div className="petStay-title">
              <h1>{petStay.title}</h1>
              <p className="petStay-details-location">{petStay.location}</p>
              <p className="rating">
                ⭐ {petStay.rating || 0}
                <span> ({petStay.reviews || 0} reviews)</span>
              </p>
            </div>

            <div className="petStay-host-container">
              <img src={petStay.host?.avatar} alt={petStay.host?.name} />
              <div>
                <p className="petStay-host">Hosted by</p>
                <h3>{petStay.host?.name}</h3>
              </div>
            </div>

            <div className="petStay-description">
              <h1>About this stay</h1>
              <p>{petStay.description}</p>
            </div>
          </div>

          <BookingBox petStay={petStay} />
        </div>
      </div>
    </div>
  );
}

export default PetStayDetailsPage;
