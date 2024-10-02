import React, { useContext } from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { VideoContext } from './VideoContext';  // Import the VideoContext

function Videos({ showIcon = false }) {
  const { videos, loading } = useContext(VideoContext);  // Use the VideoContext

  if (loading) {
    return <div>Loading videos...</div>;  // Display loading state if videos are still being fetched
  }

  return (
    <div className="font-bold text-xl font-suse">
      <div className="flex justify-between items-center mb-4 pr-4">
        <h2 className="text-base font-extrabold text-white uppercase tracking-wide">LATEST VIDEOS</h2>
        {showIcon && (
          <Link to="/videos">
            <FontAwesomeIcon icon={faCircleRight} className="text-navPurple text-2xl hover:text-orange-600" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group"
          >
            {video.thumbnail ? (
              <div className="relative w-full pb-[56.25%] overflow-hidden transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ) : (
              <p className="text-white">Thumbnail not available</p>
            )}
            <div className="py-4">
              <div className="h-12">
                <p className="text-white font-semibold text-left line-clamp-2 overflow-hidden text-ellipsis">
                  {video.title}
                </p>
              </div>
              <div className="mt-2">
                <p className="text-white text-opacity-50 text-sm">
                  {video.date ? format(video.date, 'MMMM dd, yyyy') : 'Date not available'}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Videos;
