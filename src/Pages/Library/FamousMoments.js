import React from "react";

const FamousMoments = () => {
  // Hardcoded list of famous moments with titles and YouTube links
  const moments = [
    {
      title: "Blackjack Legend Hits $1M Win",
      url: "https://www.youtube.com/watch?v=example1",
    },
    {
      title: "Roulette Spin of a Lifetime",
      url: "https://www.youtube.com/watch?v=example2",
    },
    {
      title: "Poker Bluff That Changed History",
      url: "https://www.youtube.com/watch?v=example3",
    },
    {
      title: "Craps Roll That Broke the Bank",
      url: "https://www.youtube.com/watch?v=example4",
    },
  ];

  return (
    <div className="w-full flex flex-col mt-6">
      <h2 className="text-base uppercase font-bold text-white mb-6">
        Famous Moments
      </h2>

      {/* Famous Moments Grid */}
      <div className="grid grid-cols-4 gap-4 w-full ">
        {moments.map((moment, index) => (
          <a
            key={index}
            href={moment.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center rounded-md text-white font-bold text-lg bg-gradient-to-r ${
              index % 4 === 0
                ? "from-red-500 to-pink-500"
                : index % 4 === 1
                ? "from-blue-500 to-teal-500"
                : index % 4 === 2
                ? "from-purple-500 to-indigo-500"
                : "from-orange-500 to-yellow-500"
            } hover:scale-105 transition-transform duration-300`}
            style={{
              aspectRatio: "16 / 9", // Maintain 1920x1080 ratio
              width: "100%",
            }}
          >
            {moment.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FamousMoments;
