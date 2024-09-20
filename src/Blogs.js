import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns'; // Import date-fns for date formatting

function Blogs({ showIcon = false }) { // Accept the showIcon prop
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
          const dateMatch = fileContent.match(/^date:\s*"?([^"\n\r]+)"?\s*$/im); // Extract date
          const coverImageMatch = fileContent.match(/^cover_image:\s*"?([^"\n\r]+)"?\s*$/im);

          const title = titleMatch ? titleMatch[1].trim() : file.name.replace('.md', '');
          const date = dateMatch ? new Date(dateMatch[1].trim()) : null; // Parse date
          const coverImage = coverImageMatch ? coverImageMatch[1].trim() : null;

          const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

          return {
            title: title,
            date: date,
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
      {/* Heading for Latest News and Icon */}
      <div className="flex justify-between items-center mb-4 pr-4">
        <h2 className="text-base font-extrabold text-white uppercase tracking-wide">Latest News</h2>
        {/* Conditionally show the icon if showIcon is true */}
        {showIcon && (
          <Link to="/news">
            <FontAwesomeIcon icon={faCircleRight} className="text-navPurple text-2xl hover:text-orange-600" />
          </Link>
        )}
      </div>

      {/* Grid of Blog Post Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <Link
            to={`/blog/${post.slug}`}
            key={index}
            className="bg-navBg rounded-lg shadow-md overflow-hidden group outline-dashed outline-1 outline-offset-4 outline-navPurple"
          >
            {/* Image Secion */}
            {post.coverImage && (
              <div
                className="h-32 bg-cover bg-center transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                style={{
                  backgroundImage: `url(${post.coverImage})`,
                  borderTopLeftRadius: '0.75rem',
                  borderTopRightRadius: '0.75rem',
                }}
              ></div>
            )}
            {/* Title and Date Section */}
            <div className="p-4">
              {/* Fixed height for the title to ensure alignment */}
              <div className="h-12">
                <p className="text-white font-semibold text-left line-clamp-2 overflow-hidden text-ellipsis">
                  {post.title}
                </p>
              </div>
              {/* Date */}
              {post.date ? (
                <p className="text-white text-opacity-50 text-sm mt-2">
                  {format(post.date, 'MMMM dd, yyyy')}
                </p>
              ) : (
                <p className="text-white text-opacity-50 text-sm mt-2">Date not available</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
