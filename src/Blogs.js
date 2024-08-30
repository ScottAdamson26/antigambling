import React, { useEffect, useState } from 'react';

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the GitHub repository
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/ScottAdamson26/antigambling/contents/content/posts');
        const data = await response.json();

        // Filter only Markdown files and extract their titles without dates
        const postTitles = data
          .filter(item => item.name.endsWith('.md'))
          .map(item => {
            const fullName = item.name.replace('.md', '');
            // Split the name by hyphen and remove the first part (the date)
            const titleParts = fullName.split('-').slice(3);
            const title = titleParts.join(' ');

            // Convert to title case
            return toTitleCase(title);
          });

        setPosts(postTitles);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Function to convert string to title case
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <div className="mb-8 font-suse text-xl font-bold">
      {/* Heading for Latest News */}
      <h2 className="text-base font-extrabold text-white mb-4 uppercase tracking-wide">Latest News</h2>

      {/* Grid of Blog Post Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((title, index) => (
          <div
            key={index}
            className="p-4 pt-12 bg-gray-800 rounded-lg shadow-md text-white"
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
