import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config/config';
import SmallLogo from '../assets/SmallLogo.png';

const BecomeHostPage = () => {
  const { currentUser, token, isLoading, isLoggedIn } = useContext(AuthContext);
  const nav = useNavigate();

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [pricePerNight, setPricePerNight] = useState(0);
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  //   const [host, setHost] = useState('');
  //   const [rating, setRating] = useState(0);
  //   const [reviews, setReviews] = useState('');

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      nav('/login');
      alert('Please login to list your place');
    }
  }, [isLoading, isLoggedIn]);

  const createStay = async (e) => {
    e.preventDefault();
    if (token) {
      const stayToCreate = {
        title,
        location,
        pricePerNight,
        image,
        description,
        host: currentUser._id,
      };
      try {
        const createdStay = await axios.post(
          `${API_URL}/petstays/create`,
          stayToCreate,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log('Successfuly created stay', createdStay);
        nav('/profile');
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (isLoading) {
    return <div className="p-20 text-center">Loading Pawbnb Details...</div>;
  }

  return (
    <div className="success-layout flex justify-evenly">
      <div className="success-bh-text items-center bg-surface px-10 py-8 pb-0 rounded-3xl shadow-xl mt-20 border border-gray-100">
        <img className="success-bh-img text-center text-body" src={SmallLogo} />
        <p className="font-bold text-center text-xl mb-4">
          List your pawsome place with us!
        </p>
        <p className="text-center text-body">
          Thank you for choosing to list with Pawbnb! <br />
          List your place using the provided form. If you have any
          <br /> questions concerning the listing process, please don't <br />
          hesitate to reach out to us!
        </p>
      </div>

      <form
        className="success-bh-text flex flex-col items-center bg-surface px-10 py-8  rounded-3xl shadow-xl mt-20 border border-gray-100"
        onSubmit={createStay}
      >
        <h1 className="font-bold text-center text-xl mb-4">
          Fill in all the fields
        </h1>
        <span></span>
        <label className="login-label">
          <input
            placeholder="Title of the listing"
            type="text"
            className="login-input-bh mb-4"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label className="login-label">
          {/* Location */}
          <input
            placeholder="Location of the listing"
            type="text"
            className="login-input-bh mb-4"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <label className="login-label">
          {/* Add image url of your place */}
          <input
            placeholder="Add image url of your place"
            type="text"
            className="login-input-bh mb-4"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <label className="login-label">
          {/* Price per night in "€" */}
          <input
            placeholder='Price per night in "€"'
            type="number"
            min={1}
            className="login-input-bh mb-4"
            value={pricePerNight}
            onChange={(e) => {
              setPricePerNight(e.target.valueAsNumber);
            }}
          />
        </label>

        {/* <label className="login-label">
          
          <input
            placeholder="Add description of your place"
            type="text"
            className="login-input mb-4"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label> */}

        <textarea
          name="message"
          placeholder="Add description of your place"
          type="text"
          className="login-input-msg mb-2"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button className="bg-border hover:bg-primary/80 text-white rounded-xl px-4 py-2 mt-2">
          List your place 🐾
        </button>
      </form>
    </div>
  );
};

export default BecomeHostPage;

// <label className="login-label">
//   Rating
//   <input
//     type="number"
//     className="login-input"
//     value={rating}
//     onChange={(e) => {
//       setRating(e.target.value);
//     }}
//   />
// </label>
// <label className="login-label">
//   Reviews
//   <input
//     type="number"
//     className="login-input"
//     value={reviews}
//     onChange={(e) => {
//       setReviews(e.target.value);
//     }}
//   />
// </label>
