import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/config';

const PetStayContext = createContext();

const PetStayWrapper = ({ children }) => {
  const [petStays, setPetStays] = useState([]);
  const [featuredStays, setFeaturedStays] = useState([]);
  const [filteredStays, setFilteredStays] = useState([]);

  //Search States
  const [searchQuery, setSearchQuery] = useState({
    city: '',
    startDate: null,
    endDate: null,
  });
  const [activeSearch, setActiveSearch] = useState({
    city: '',
    startDate: null,
    endDate: null,
  });
  const nav = useNavigate();

  //Search Trigger Function
  const triggerSearch = () => {
    setActiveSearch(searchQuery);
    nav('/results');
  };

  //Fetch Functions
  //1. Fetch All PetStays
  const fetchAllStays = async () => {
    try {
      const response = await axios.get(`${API_URL}/petstays/`);
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
      const response = await axios.get(`${API_URL}/petstays/featured`);
      setFeaturedStays(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //1.2 Fetch Filtered stays
  const fetchFilteredStays = async (city) => {
    try {
      const response = await axios.get(`${API_URL}/petstays/location/${city}`);
      setFilteredStays(response.data);
      return response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllStays();
    fetchFeaturedStays();
  }, []);

  //2. Fetch A Single PetStay
  const fetchSingleStay = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/petstays/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PetStayContext.Provider
      value={{
        petStays,
        searchQuery,
        activeSearch,
        featuredStays,
        filteredStays,
        setPetStays,
        setSearchQuery,
        setActiveSearch,
        triggerSearch,
        setFilteredStays,
        fetchAllStays,
        fetchFeaturedStays,
        fetchFilteredStays,
        fetchSingleStay,
      }}
    >
      {children}
    </PetStayContext.Provider>
  );
};

export { PetStayContext, PetStayWrapper };
