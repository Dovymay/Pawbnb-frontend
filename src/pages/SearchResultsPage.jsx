import { useContext, useState, useEffect } from 'react';
import { PetStayContext } from '../contexts/PetStayContext';
import PetStayCard from '../components/PetStayCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SearchResultsPage() {
  const { activeSearch } = useContext(PetStayContext);
  const [searchResults, setSearchResults] = useState([]);
  const [resultsLoading, setResultsLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setResultsLoading(true);
      try {
        const response = await axios.post(
          'http://localhost:5005/petstays/search',
          { activeSearch }
        );
        setSearchResults(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setResultsLoading(false);
    };
    fetchSearchResults();
  }, [activeSearch]);

  // const filteredResults = petStays.filter(
  //   (stay) =>
  //     !activeSearch?.city ||
  //     stay.location.toLowerCase().includes(activeSearch.city.toLowerCase())
  // );

  return (
    <div>
      {!searchResults.length ? (
        <h1 className="flex justify-center mt-10 title">
          No stays found in {activeSearch.city} on selected dates!
        </h1>
      ) : (
        <>
          <h1 className="flex justify-center mt-10 title">
            Found {searchResults.length} stays in {activeSearch.city}
          </h1>
          <div className="grid">
            {searchResults.map((stay) => (
              <PetStayCard key={stay._id} petStay={stay} />
            ))}
          </div>
        </>
      )}

      <div className="flex justify-center actions-div">
        <Link to="/">
          <button className="bg-primary/70 hover:bg-primary/100 text-white rounded-xl px-8 py-3 mt-5 mb-5">
            Search again
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SearchResultsPage;
