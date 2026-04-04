import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';

function BookingBox({ petStay }) {
  const { currentUser, token } = useContext(AuthContext);

  const [dates, setDates] = useState([null, null]);
  const [startDate, endDate] = dates;

  const [totalPrice, setTotalPrice] = useState(0);

  const nav = useNavigate();

  //Calculate price
  const calculatePrice = (start, end) => {
    if (!start || !end) return 0;
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days * petStay.pricePerNight;
  };

  //Date change
  const handleDateChange = (update) => {
    setDates(update);

    const [start, end] = update;
    const price = calculatePrice(start, end);
    setTotalPrice(price);
  };

  //Create booking
  const handleBooking = async () => {
    if (!startDate || !endDate) {
      alert('Please select dates!');
      return;
    }
    try {
      await axios.post(
        'http://localhost:5005/bookings',
        {
          petStay: petStay._id,
          startDate,
          endDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('TOKEN:', token);
      alert('Booking succesful 🐾!');
      nav('/profile');
    } catch (error) {
      console.log(error);
      alert('Booking failed');
    }
  };

  return (
    <div className="booking-box bg-surface p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">
        €{petStay.pricePerNight}{' '}
        <span className="text-sm text-primary">/night</span>
      </h3>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <div className="mt-4">
        <p>Total: €{totalPrice}</p>
      </div>
      <button
        onClick={handleBooking}
        className="bg-primary/70 hover:bg-primary/100 text-white rounded-xl px-8 py-3 mt-5 mb-5"
      >
        Book now 🐾
      </button>
    </div>
  );
}

export default BookingBox;
