import React from 'react';
import Feature from './Feature';
import Showcase from './Showcase';
import Blogs from './Blogs';
import Videos from './Videos';
function HomePage() {
  return (
    <div className="w-full mx-auto bg-background pb-20">
      <Feature />
      <Showcase />
      <Videos />

      <Blogs />
    </div>
  );
}

export default HomePage;
