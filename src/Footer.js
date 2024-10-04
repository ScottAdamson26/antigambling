import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { VideoContext } from "./VideoContext"; // Import the VideoContext
import { BlogContext } from "./BlogContext"; // Import the BlogContext
import "./App.css";
import logo from "../src/logo.png";

function Footer() {
  // Get the latest videos from the VideoContext
  const { videos } = useContext(VideoContext);

  // Get the latest blog posts from the BlogContext
  const { posts } = useContext(BlogContext);

  // Array of quick links
  const quickLinks = [
    { name: "Videos", path: "/videos" },
    { name: "Reviews", path: "/reviews" },
    { name: "News", path: "/news" },
    { name: "Bonuses", path: "/bonuses" },
    { name: "Contact", path: "/contact" },
  ];

  // Get the latest 3 videos and blog posts
  const latestVideos = videos.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <footer className="w-full bg-background text-white py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Footer Links - Grid Layout Centered */}
        <div className="custom-grid gap-12">
          {/* Quick Links Column */}
          <div className="flex flex-col flex-grow">
            <h3 className="text-base font-semibold mb-4 uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col justify-between flex-grow">
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
            <h3 className="text-base font-semibold mb-4 uppercase">
              Latest Videos
            </h3>
            <div className="space-y-4">
              {latestVideos.map((video) => (
                <Link
                  to={video.url}
                  key={video.title}
                  className="flex items-center space-x-4 group"
                >
                  {/* Video Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-28 h-auto object-cover rounded-lg "
                  />

                  {/* Video Title */}
                  <div className="flex-1">
                    <p
                      className="text-base leading-tight text-gray-300 group-hover:text-white transition-colors duration-200"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2, // Limit to 2 lines
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {video.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Latest Blog Posts Column */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold mb-4 uppercase">
              Latest Blog Posts
            </h3>
            <div className="space-y-4">
              {latestPosts.map((post) => (
                <Link
                  to={`/news/${post.slug}`}
                  key={post.slug}
                  className="flex items-center space-x-4 group"
                >
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
                    <p
                      className="text-base leading-tight text-gray-300 group-hover:text-white transition-colors duration-200"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2, // Limit to 2 lines
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold mb-4 uppercase">Socials</h3>
            {/* Add content for Socials */}
          </div>
        </div>

        <h1 className="mt-16 opacity-75">©2024 AGGC.COM</h1>
      </div>
    </footer>
  );
}

export default Footer;
