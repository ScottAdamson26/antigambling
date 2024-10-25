import React from 'react';
import logo from './cslogo.png';
import logo2 from './gamdomlogo.png';
import logo3 from './stakelogo.png';
const OffersList = () => {
  // Dummy data to map over
  const offers = [
    {
      id: 1,
      image: logo,
      title: "Welcome Bonus",
      subtitle: "150% UP TO €150",
      description: "40 FREE SPINS",
      link: "https://google.com"
    },
    {
      id: 2,
      image: logo2,
      title: "Special Bonus",
      subtitle: "200% UP TO €200",
      description: "50 FREE SPINS",
      link: "https://google.com"
    },
    {
      id: 3,
      image: logo3,
      title: "Mega Bonus",
      subtitle: "300% UP TO €300",
      description: "100 FREE SPINS",
      link: "https://google.com"
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-6 mt-20 font-suse">
        <h1 className='text-white text-xl font-semibold'> Weekly Trusted Offers</h1>
      {offers.map((offer) => (
        <div key={offer.id} className="bg-zinc-800 px-12 py-6 rounded-xl shadow-lg p-4 flex flex-col items-center text-center border-2 border-navPurple" >
          {/* Offer Image */}
          <div className="w-20 h-20 mb-2 flex items-center justify-center">
            <img src={offer.image} alt={offer.title} className="w-full h-full object-contain" />
          </div>

          {/* Offer Title */}
          <h1 className="text-white text-base font-bold">{offer.title}</h1>

          {/* Offer Subtitle */}
          <h2 className="text-white text-lg font-extrabold">{offer.subtitle}</h2>

          {/* Offer Description */}
          <h3 className="text-white text-xs">{offer.description}</h3>

          {/* Claim Offer Button */}
          <a href={offer.link} className="bg-navPurple my-2 text-sm text-white w-full font-bold rounded-full px-8 py-2 hover:bg-white hover:text-navPurple transition ease-in-out duration-500">
            CLAIM OFFER
          </a>

          {/* T&C Text */}
          <p className="text-white text-xs opacity-50">18+ | T&C APPLY</p>
        </div>
      ))}
    </div>
  );
};

export default OffersList;
