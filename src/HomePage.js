import React from 'react';
import Feature from './Feature';
import Showcase from './Showcase';
import BlogPostWidgets from './BlogPostWidgets';

function HomePage() {
  return (
    <div className="w-full mx-auto p-4 md:p-8 bg-zinc-900">
      <Feature />
      <Showcase />
      <BlogPostWidgets />
    </div>
  );
}

export default HomePage;
