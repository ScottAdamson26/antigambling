import React from 'react';
import Feature from './Feature';
import Showcase from './Showcase';
import BlogPostWidgets from './BlogPostWidgets';

function HomePage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <Feature />
      <Showcase />
      <BlogPostWidgets />
    </div>
  );
}

export default HomePage;
