import { useContext } from 'react';
import heroImage from '../assets/HeroImage.png';
import CustomDatePicker from './DatePicker';
import { PetStayContext } from '../contexts/PetStayContext';

export default function Hero() {
  const { searchQuery, setSearchQuery, triggerSearch } =
    useContext(PetStayContext);
  return (
    <div
      className="h-[55vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="h-full w-full bg-black/40 flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold mb-5">
          Find the perfect stay for your pet
        </h1>

        <div className="bg-surface p-4 rounded-2xl flex gap-4 mb-10">
          <input
            className="bg-surfaceLight text-textPrimary px-4 py-2 rounded-xl"
            value={searchQuery.city}
            onChange={(e) =>
              setSearchQuery({ ...searchQuery, city: e.target.value })
            }
            placeholder="Where to?"
          />
          {/* <input
            className="bg-surfaceLight text-textPrimary px-4 py-2 rounded-xl"
            placeholder="Check in - Check out"
          /> */}
          <div className="custom-datepicker-container">
            <CustomDatePicker />
          </div>
          <button
            className="bg-border hover:bg-primary/80 text-white rounded-xl px-4 py-1"
            onClick={triggerSearch}
          >
            Search 🐾
          </button>
        </div>
      </div>
    </div>
  );
}
