import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import SmallLogo from '../assets/SmallLogo.png';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../config/config';
import './SucessPage.css';

const SuccessPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const { token } = useContext(AuthContext);
  useEffect(() => {
    if (token) {
      const fetchSingleBooking = async () => {
        try {
          const response = await axios.get(`${API_URL}/bookings/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
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
    // <div className="success-main">
    <div className="success-layout flex justify-evenly">
      <div className="success-text items-center bg-surface px-10 py-8 pb-0 rounded-3xl shadow-xl mt-20 border border-gray-100">
        <img className="success-img text-center text-body" src={SmallLogo} />
        <p className="font-bold text-center text-xl mb-4">
          Booking confirmed succesfully!
        </p>
        <p className="text-center text-body">
          Thank you for choosing to book with Pawbnb! <br />
          Your reservation is confirmed. If there's anything
          <br /> your pet or you need before arrival, please don't <br />
          hesitate to reach out to your host!
        </p>
        <div className="success-actions flex justify-between text-center text-body">
          <Link to={`/one-booking/booking/${booking._id}`}>
            <button className="bg-primary/70 hover:bg-primary/100 text-white rounded-xl px-4 py-3 mt-5 mb-0">
              View stay details
            </button>
          </Link>

          <p className="mt-7">🐾</p>
          <Link to="/">
            <button className="bg-primary/70 hover:bg-primary/100 text-white rounded-xl px-4 py-3 mt-5 mb-0">
              Go back to home
            </button>
          </Link>
        </div>
      </div>
      <div className="success-details">
        <div className="success-price flex flex-col items-center bg-surface px-10 py-8  rounded-3xl shadow-xl mt-20 border border-gray-100">
          <div className="flex justify-evenly gap-20">
            <p className="font-bold text-center text-xl mb-4 mt-4">
              €{booking.totalPrice},00
            </p>
            <p className="flex items-center mb-4 mt-5">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                />
              </svg>
            </p>
          </div>
          <div>
            <p className="font-bold text-center text-l mb-4 mt-4">
              Payment success!
            </p>
          </div>
        </div>

        <div className="success-dates flex flex-col items-center bg-surface px-10 py-8  rounded-3xl shadow-xl mt-20 border border-gray-100">
          <h1 className="font-bold text-center text-l">Stay summary</h1>
          <div className="w-full mt-6 space-y-4">
            <div className="flex justify-between items-center font-bold text-center text-l">
              <p>Check-in date:</p>
              <p>{new Date(booking.startDate).toLocaleDateString()}</p>
            </div>

            <div className="flex justify-between items-center font-bold text-center text-l">
              <p>Check-out date:</p>
              <p>{new Date(booking.endDate).toLocaleDateString()}</p>
            </div>

            <div className="flex justify-between items-center font-bold text-center text-l">
              <p>Status:</p>
              <p>Confirmed</p>
            </div>
            <div className="flex justify-between items-center font-bold text-center text-l">
              <p>Booking ID: </p>
              <p>{booking._id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
