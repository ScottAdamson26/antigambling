import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VideoContext } from './VideoContext'; // Import the VideoContext
import { BlogContext } from './BlogContext';   // Import the BlogContext
import './App.css'
function Footer() {
  // Get the latest videos from the VideoContext
  const { videos } = useContext(VideoContext);
  
  // Get the latest blog posts from the BlogContext
  const { posts } = useContext(BlogContext);

  // Array of quick links
  const quickLinks = [
    { name: 'Videos', path: '/videos' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'News', path: '/news' },
    { name: 'Bonuses', path: '/bonuses' },
    { name: 'Contact', path: '/contact' },
  ];

  // Get the latest 3 videos and blog posts
  const latestVideos = videos.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <footer className="w-full bg-background text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="custom-grid gap-12">
          
          {/* Quick Links Column */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold mb-4 uppercase">Quick Links</h3>
            <ul className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Videos Column */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold mb-4 uppercase">Latest Videos</h3>
            <div className="space-y-4">
              {latestVideos.map((video) => (
                <div key={video.title} className="flex items-center space-x-4">
                  {/* Video Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-28 h-auto object-cover rounded-lg"
                  />

                  {/* Video Title */}
                  <div className="flex-1">
                    <Link
                      to={video.url}
                      className="text-gray-300 hover:text-white transition-colors duration-200 block"
                    >
                      <p
                        className="text-base leading-tight"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,   // Limit to 2 lines
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {video.title}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Blog Posts Column */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold mb-4 uppercase">Latest Blog Posts</h3>
            <div className="space-y-4">
              {latestPosts.map((post) => (
                <div key={post.slug} className="flex items-center space-x-4">
                  {/* Blog Post Cover Image */}
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-28 h-auto object-cover rounded-lg"
                    />
                  )}

                  {/* Blog Post Title */}
                  <div className="flex-1">
                    <Link
                      to={`/news/${post.slug}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 block"
                    >
                      <p
                        className="text-sm leading-tight"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,   // Limit to 2 lines
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {post.title}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4 uppercase">Socials</h3>
            {/* Add content for Socials */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
