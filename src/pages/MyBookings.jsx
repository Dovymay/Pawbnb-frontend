import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import BookingCard from '../components/BookingCard';

function MyBookings() {
  const { currentUser, token } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    const fetchAllBookings = async () => {
      if (!currentUser || !token) {
        nav('/login');
        alert('Please login to book the stay.');
      }
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:5005/bookings', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(response.data);
      } catch (error) {
        console.log(error.response?.data);
      }
      setIsLoading(false);
    };
    fetchAllBookings();
  }, [token]);

  const handleDeleteBooking = async (id) => {
    if (
      window.confirm('Are you sure you want to cancel and delete this booking?')
    ) {
      try {
        const response = await axios.delete(
          `http://localhost:5005/bookings/delete/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setBookings((prev) => prev.filter((booking) => booking._id !== id));
        alert('Booking has been cancelled and deleted!');
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      {!bookings.length ? (
        <div>
          <h1 className="bg-primary flex justify-center mt-10 title text-black rounded-xl">
            No booked stays found!
          </h1>
        </div>
      ) : (
        <div>
          <h1 className="bg-primary flex justify-center mt-10 title text-black rounded-xl">
            Upcoming booked stays🐾
          </h1>
          <div className="">
            {bookings.map((booking) => (
              <BookingCard
                key={booking._id}
                booking={booking}
                handleDelete={handleDeleteBooking}
              />
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <Link to="/">
          <button className="bg-primary/70 hover:bg-primary/100 text-white rounded-xl px-8 py-3 mt-5 mb-0">
            Go to Search🐾
          </button>
        </Link>
      </div>
    </>
  );
}

export default MyBookings;
