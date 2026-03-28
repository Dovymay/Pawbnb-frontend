import { Link } from 'react-router-dom';
import './PetStayCard.css';

export default function PetStayCard({ petStay }) {
  return (
    <Link to={`/onestay/${petStay._id}`} className="card">
      <div className="card-image-wrapper">
        <img src={petStay.image} alt={petStay.title} />
      </div>

      <div className="card-content">
        <div className="card-top">
          <h3>{petStay.title}</h3>
          <span className="rating">⭐ {petStay.rating}</span>
        </div>

        <p className="location">{petStay.location}</p>

        <p className="price">
          €{petStay.pricePerNight}
          <span> / night</span>
        </p>
      </div>
    </Link>
  );
}
