import { Link } from 'react-router-dom';

function BookingCard({ booking }) {
  return (
    <div className="bookings-container">
      <img
        src={booking.petStay?.image}
        alt={booking.petStay?.title}
        className="booking-image"
      />
      <h3 className="">
        <p className="booking-title">Title</p>
        {booking.petStay?.title}
      </h3>
      <h3 className="booking-location">
        <p className="booking-title">City</p>
        {booking.petStay?.location}
      </h3>
      <h3 className="booking-host">
        <p className="booking-title">Host</p>
        {booking.petStay?.host.username}
      </h3>

      <h3 className="date-from">
        <p className="booking-title">From</p>
        {new Date(booking.startDate).toLocaleDateString()}
      </h3>
      <h3 className="date-to">
        <p className="booking-title">Till</p>
        {new Date(booking.endDate).toLocaleDateString()}
      </h3>
      <h3 className="total-price">
        <p className="booking-title">Total Price</p>€ {booking.totalPrice}
      </h3>
      <div className="booking-actions-div">
        <Link to={`/one-booking/booking/${booking._id}`}>
          <button className="bg-primary/100 hover:bg-primary/85 text-white rounded-xl px-6 py-2 mt-2 mb-0 font-bold">
            Update booking
          </button>
        </Link>
        {/* Moved to BookingDetailsPage.jsx
        <button
          className="bg-red-500/70 hover:bg-red-500/100 text-white font-bold rounded-xl px-6 mt-2 mb-0"
          onClick={() => {
            handleDelete(booking._id);
          }}
        >
          Cancel booking
        </button> */}
      </div>
    </div>
  );
}

export default BookingCard;

// <div className="card">
//   <div className="card-image-wrapper">
//     <img src={booking.petStay?.image} alt={booking.petStay?.title} />
//   </div>
//   <div className="card-content">
//     <div className="card-top">
//       <h3>{booking.petStay?.title}</h3>
//       <span className="rating">€ {booking.totalPrice}</span>
//       <p className="price">
//         <span>From - </span>
//         {new Date(booking.startDate).toLocaleDateString()}
//       </p>
//       <p className="price">
//         <span>to</span>
//         {new Date(booking.endDate).toLocaleDateString()}
//       </p>
//     </div>
//   </div>
// </div>
