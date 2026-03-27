import { Link } from 'react-router-dom';
import './PetStayCard.css';

export default function PetStayCard({ petStay }) {
  return (
    // <div className="petStayCard hover:bg-primary bg-border/80 text-white shadow-lg p-4 rounded-2xl">
    //   <Link to={`/onestay/${petStay._id}`}>
    //     <img src={petStay.image} alt={petStay.title} className="petStayImage" />
    //     <h2>{petStay.title}</h2>
    //   </Link>
    //   <p>{petStay.location}</p>
    //   <p>${petStay.pricePerNight}</p>
    // </div>

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
