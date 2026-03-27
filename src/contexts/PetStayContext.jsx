import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const PetStayContext = createContext();

const PetStayWrapper = ({ children }) => {
  const [petStays, setPetStays] = useState([]);
  const [featuredStays, setFeaturedStays] = useState([]);

  //1. Fetch All PetStays
  const fetchAllStays = async () => {
    try {
      const response = await axios.get('http://localhost:5005/petstays/');
      setPetStays(response.data);
      // console.log(response.data);

      //Filtered featured stays
      // const featured = response.data.filter((stay) => stay.featured === true);
      // setFeaturedStays(featured);
    } catch (error) {
      console.log(error);
    }
  };

  //1.1 Fetch Featured stays
  const fetchFeaturedStays = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5005/petstays/featured'
      );
      setFeaturedStays(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllStays();
    fetchFeaturedStays();
  }, []);

  //   2. Fetch a single petStay
  const fetchSingleStay = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5005/petstays/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PetStayContext.Provider
      value={{
        petStays,
        featuredStays,
        setPetStays,
        fetchAllStays,
        fetchFeaturedStays,
        fetchSingleStay,
      }}
    >
      {children}
    </PetStayContext.Provider>
  );
};

export { PetStayContext, PetStayWrapper };
