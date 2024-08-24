import React from 'react';

function Showcase() {
  const showcases = [
    { title: 'Slot Crazy', description: 'All the best slots...', bgColor: 'bg-red-500' },
    { title: 'Jackpot Mania', description: 'Massive jackpots await...', bgColor: 'bg-blue-500' },
    { title: 'Real Deal', description: 'Live dealers and more...', bgColor: 'bg-purple-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {showcases.map((showcase, index) => (
        <div key={index} className={`${showcase.bgColor} text-white p-6 rounded-lg shadow-lg hover:opacity-90 transition duration-200`}>
          <h2 className="text-2xl font-bold mb-2 font-anton">{showcase.title}</h2>
          <p>{showcase.description}</p>
          <button className="mt-4 bg-white text-zinc-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200">
            Play Game
          </button>
        </div>
      ))}
    </div>
  );
}

export default Showcase;
