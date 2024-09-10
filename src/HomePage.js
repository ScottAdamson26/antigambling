import React from 'react';
import Feature from './Feature';
import Showcase from './Showcase';
import Blogs from './Blogs';
import Videos from './Videos';
function HomePage() {
  return (
    <div className="w-full mx-auto bg-background">
      <Feature />
      <Showcase />
      
      <Blogs />
      <Videos />
    </div>
  );
}

export default HomePage;
