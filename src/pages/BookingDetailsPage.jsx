import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

function BookingDetailsPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      const fetchSingleBooking = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5005/bookings/${id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setBooking(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error.response?.data);
        }
      };
      fetchSingleBooking();
    }
  }, [token, id]);

  if (!booking) {
    return <div className="p-20 text-center">Loading Pawbnb Details...</div>;
  }

  return (
    <div>
      Hello world!
      <div>{booking.endDate}</div>
    </div>
  );
}

export default BookingDetailsPage;
