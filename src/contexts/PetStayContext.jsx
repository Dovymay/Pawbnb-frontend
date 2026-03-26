import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const PetStayContext = createContext();

const PetStayWrapper = ({ children }) => {
  const [petStays, setPetStays] = useState([]);

  //1. Fetch All PetStays
  const fetchAllStays = async () => {
    try {
      const response = await axios.get('http://localhost:5005/petstays/');
      setPetStays(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllStays();
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
      value={{ petStays, setPetStays, fetchAllStays, fetchSingleStay }}
    >
      {children}
    </PetStayContext.Provider>
  );
};

export { PetStayContext, PetStayWrapper };
