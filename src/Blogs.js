import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/ScottAdamson26/antigambling/contents/content/posts');
        const files = await response.json();

        const postsData = await Promise.all(files.map(async (file) => {
          const fileResponse = await fetch(file.download_url);
          const fileContent = await fileResponse.text();

          const titleMatch = fileContent.match(/^title:\s*"?([^"\n\r]+)"?\s*$/im);
          const coverImageMatch = fileContent.match(/^cover_image:\s*"?([^"\n\r]+)"?\s*$/im);

          const title = titleMatch ? titleMatch[1].trim() : file.name.replace('.md', '');
          const coverImage = coverImageMatch ? coverImageMatch[1].trim() : null;

          const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

          return {
            title: title,
            coverImage: coverImage,
            slug: slug,
          };
        }));

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Link
            to={`/blog/${post.slug}`}
            key={index}
            className="bg-navBg rounded-lg shadow-md overflow-hidden group"
          >
            {/* Image Section */}
            {post.coverImage && (
              <div
                className="h-32 bg-cover bg-center transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{
                  backgroundImage: `url(${post.coverImage})`,
                  borderTopLeftRadius: '0.75rem',
                  borderTopRightRadius: '0.75rem',
                }}
              ></div>
            )}
            {/* Title Section */}
            <div className="p-4">
              <p className="text-white font-semibold text-left">{post.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
