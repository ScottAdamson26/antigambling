import React from 'react';
import Feature from './Feature';
import Showcase from './Showcase';
import Blogs from './Blogs';

function HomePage() {
  return (
    <div className="w-full mx-auto p-4 md:p-8 bg-customDark">
      <Feature />
      <Showcase />
      
      <Blogs />
    </div>
  );
}

export default HomePage;
