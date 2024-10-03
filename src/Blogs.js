import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns';
import { BlogContext } from './BlogContext';  // Import the BlogContext

function Blogs({ showIcon = false }) {
  const { posts, loading } = useContext(BlogContext);  // Use the BlogContext

  if (loading) {
    return <div>Loading...</div>;  // Display a loading message if still fetching data
  }

  return (
    <div className="mb-8 font-bold text-xl font-suse">
      {/* Heading for Latest News and Icon */}
      <div className="flex justify-between items-center mb-4 pr-4">
        <h2 className="text-base font-extrabold text-white uppercase tracking-wide">Latest News</h2>
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
            to={`/news/${post.slug}`}
            key={index}
            className="bg-navBg rounded-lg shadow-md overflow-hidden group outline-dashed outline-1 outline-offset-4 outline-navPurple"
          >
            {post.coverImage && (
              <div
                className="h-40 bg-cover bg-center transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                style={{
                  backgroundImage: `url(${post.coverImage})`,
                  borderTopLeftRadius: '0.75rem',
                  borderTopRightRadius: '0.75rem',
                }}
              ></div>
            )}
            <div className="p-4">
              <div className="h-12">
                <p className="text-white font-semibold text-left line-clamp-2 overflow-hidden text-ellipsis">
                  {post.title}
                </p>
              </div>
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
