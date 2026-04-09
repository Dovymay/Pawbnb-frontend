import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { API_URL } from '../config/config';

function BookingDetailsPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const { token } = useContext(AuthContext);
  const nav = useNavigate();

  //Form empty states
  const [startDateChange, setStartDateChange] = useState(null);
  const [endDateChange, setEndDateChange] = useState(null);
  const [totalPriceChange, setTotalPriceChange] = useState(0);

  //Date input
  const formatDate = (date) => {
    return date ? new Date(date).toISOString().split('T')[0] : '';
  };

  useEffect(() => {
    if (token) {
      const fetchSingleBooking = async () => {
        try {
          const response = await axios.get(`${API_URL}/bookings/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          setStartDateChange(formatDate(response.data.startDate));
          setEndDateChange(formatDate(response.data.endDate));
          setTotalPriceChange(response.data.totalPrice);
          setBooking(response.data);
        } catch (error) {
          console.log(error.response?.data);
        }
      };
      fetchSingleBooking();
    }
  }, [token, id]);

  useEffect(() => {
    if (!booking || !booking.petStay) return;

    const days = Math.round(
      (new Date(endDateChange) - new Date(startDateChange)) /
        (1000 * 60 * 60 * 24)
    );
    setTotalPriceChange(days * booking.petStay.pricePerNight);
  }, [booking, startDateChange, endDateChange]);

  //Update booking
  const handleBookingUpdate = async (e) => {
    if (token) {
      e.preventDefault();
      const updatedBooking = {
        startDate: startDateChange,
        endDate: endDateChange,
        totalPrice: totalPriceChange,
      };
      try {
        await axios.put(`${API_URL}/bookings/${id}`, updatedBooking, {
          headers: { Authorization: `Bearer ${token}` },
        });
        nav('/profile');
      } catch (error) {
        console.log(error.response?.data);
      }
    }
  };

  //Delete booking
  const handleDeleteBooking = async (id) => {
    if (
      window.confirm('Are you sure you want to cancel and delete this booking?')
    ) {
      try {
        const response = await axios.delete(
          `${API_URL}/bookings/delete/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // setBookings((prev) => prev.filter((booking) => booking._id !== id));
        alert('Booking has been cancelled and deleted!');
        nav('/profile');
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  if (!booking) {
    return <div className="p-20 text-center">Loading Pawbnb Details...</div>;
  }

  return (
    <div className="booking-page">
      <div className="booking-page-container">
        <h1 className="booking-page-title">Update your stay</h1>
        <div className="booking-page-details-layout">
          <div className="details-page-main">
            <div className="booking-page-image">
              <img src={booking.petStay?.image} alt={booking.petStay?.title} />
            </div>

            <h2 className="stay-page-title">{booking.petStay?.title}</h2>
            <p className="booking-page-location">{booking.petStay.location}</p>
            <p className="booking-page-rating">
              ⭐ {booking.petStay.rating || 0}
              <span> ({booking.petStay.reviews || 0} reviews)</span>
            </p>

            <div className="booking-page-host-container">
              <img
                src={booking.petStay.host?.avatar}
                alt={booking.petStay.host?.name}
              />
              <div>
                <p className="booking-page-host">Hosted by</p>
                <h3>{booking.petStay.host?.name}</h3>
              </div>
            </div>

            <div className="booking-page-summary">
              <h3>Your booking</h3>

              <div className="summary-row">
                <span>Check-in</span>
                <strong>{startDateChange}</strong>
              </div>

              <div className="summary-row">
                <span>Check-out</span>
                <strong>{endDateChange}</strong>
              </div>

              <div className="summary-row">
                <span>Nights</span>
                <strong>
                  {Math.max(
                    0,
                    Math.ceil(
                      new Date(endDateChange) - new Date(startDateChange)
                    ) /
                      (1000 * 60 * 60 * 24)
                  )}
                </strong>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <strong>€{totalPriceChange}</strong>
              </div>
            </div>
          </div>

          <div className="booking-edit-container">
            <form onSubmit={handleBookingUpdate}>
              <h3>Edit booking</h3>
              <label>
                Check-in date
                <input
                  value={startDateChange || ''}
                  onChange={(e) => {
                    setStartDateChange(e.target.value);
                  }}
                  type="date"
                />
              </label>
              <label>
                Check-out date
                <input
                  value={endDateChange || ''}
                  onChange={(e) => {
                    setEndDateChange(e.target.value);
                  }}
                  type="date"
                />
              </label>

              <div className="price-box">
                <span>Total</span>
                <strong>€{totalPriceChange}</strong>
              </div>

              <button className="bg-border hover:bg-primary/80 text-white rounded-xl px-4 py-2 mt-2">
                Update booking 🐾
              </button>
              <button
                className="bg-red-500/70 hover:bg-red-500/100 text-white font-bold rounded-xl px-4 py-2 mt-2"
                onClick={() => {
                  handleDeleteBooking(booking._id);
                }}
              >
                Cancel booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetailsPage;
