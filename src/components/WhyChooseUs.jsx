import vettedHosts from '../assets/VettedHosts.png';
import secureBookings from '../assets/SecureBookings.png';
import happyPets from '../assets/HappyPets.png';

const WhyChooseUs = () => {
  return (
    <div>
      <section className="section">
        <div className="flex justify-center">
          <h2 className="title-2">Why Choose Pawbnb?</h2>
        </div>
        <div className="flex justify-center gap-8">
          <img
            src={vettedHosts}
            alt="Vetted Host"
            className="rounded-xl why-image"
          />
          <img
            src={secureBookings}
            alt="Secure Bookings"
            className="rounded-xl why-image"
          />
          <img
            src={happyPets}
            alt="Haappy Pets"
            className="rounded-xl why-image"
          />
        </div>

        <hr className="mt-5 w-xl border-gray-500 dark:border-neutral-500 border-1" />
      </section>
    </div>
  );
};

export default WhyChooseUs;
