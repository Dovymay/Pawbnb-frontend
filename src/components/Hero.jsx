import React from 'react';
import heroImage from '../assets/HeroImage.png';

export default function Hero() {
  return (
    <div
      className="h-[50vh] bg-cover bg-center"
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
            placeholder="Where to?"
          />
          <input
            className="bg-surfaceLight text-textPrimary px-4 py-2 rounded-xl"
            placeholder="Check in - Check out"
          />
          <button className="bg-primary text-background px-4 py-2 rounded-xl">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
