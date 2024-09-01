import React, { useEffect, useState } from 'react';

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Step 1: Fetch the list of files from the GitHub repository
        const response = await fetch('https://api.github.com/repos/ScottAdamson26/antigambling/contents/content/posts');
        const files = await response.json();

        // Step 2: Fetch the content of each file and extract title, date, blog text, and cover image
        const postsData = await Promise.all(files.map(async (file) => {
          const fileResponse = await fetch(file.download_url);
          const fileContent = await fileResponse.text();

          // Regex to extract title, date, and cover image
          const titleMatch = fileContent.match(/^title:\s*"?([^"\n\r]+)"?\s*$/im);
          const dateMatch = fileContent.match(/^date:\s*(.*)$/im);
          const coverImageMatch = fileContent.match(/^cover_image:\s*"?([^"\n\r]+)"?\s*$/im);
          const blogText = fileContent.split('---')[2]?.trim();

          const title = titleMatch ? titleMatch[1].trim() : file.name.replace('.md', '');
          const coverImage = coverImageMatch ? coverImageMatch[1].trim() : null;

          return {
            title: title,
            date: dateMatch ? new Date(dateMatch[1].trim()).toLocaleDateString() : '',
            coverImage: coverImage,
            blogText: blogText || ''
          };
        }));

        // Step 3: Save the data into state
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mb-8 font-bold text-xl font-suse">
      {/* Heading for Latest News */}
      <h2 className="text-base font-extrabold text-white mb-4 uppercase tracking-wide">Latest News</h2>

      {/* Grid of Blog Post Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-lg shadow-md text-white flex flex-col items-end justify-end pt-8 pr-6"
            style={{
              minHeight: '100px',
              backgroundImage: post.coverImage ? `url(${post.coverImage})` : null,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <p className="mb-0 bg-opacity-75 bg-gray-800 p-2 rounded">{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
