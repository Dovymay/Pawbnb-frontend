import { Link } from 'react-router-dom';

export default function PetStayCard({ petStay }) {
  return (
    <div className="petStayCard hover:bg-primary bg-border/80 text-white shadow-lg p-4 rounded-2xl">
      <Link to={`/onestay/${petStay._id}`}>
        <img src={petStay.image} alt={petStay.title} className="petStayImage" />
        <h2>{petStay.title}</h2>
      </Link>
      <p>{petStay.location}</p>
      <p>${petStay.pricePerNight}</p>
    </div>
  );
}
