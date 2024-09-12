import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'; // Import date-fns for date formatting

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/ScottAdamson26/antigambling/contents/content/videos');
        const files = await response.json();

        const videosData = await Promise.all(files.map(async (file) => {
          const fileResponse = await fetch(file.download_url);
          const fileContent = await fileResponse.text();

          const titleMatch = fileContent.match(/^title:\s*"?([^"\n\r]+)"?\s*$/im);
          const dateMatch = fileContent.match(/^date:\s*"?([^"\n\r]+)"?\s*$/im); // Extract date
          const urlMatch = fileContent.match(/^url:\s*"?([^"\n\r]+)"?\s*$/im); // Extract URL
          const thumbnailMatch = fileContent.match(/^thumbnail:\s*"?([^"\n\r]+)"?\s*$/im); // Extract thumbnail

          const title = titleMatch ? titleMatch[1].trim() : file.name.replace('.md', '');
          const date = dateMatch ? new Date(dateMatch[1].trim()) : null; // Parse date
          const url = urlMatch ? urlMatch[1].trim() : null; // Video URL
          const thumbnail = thumbnailMatch ? thumbnailMatch[1].trim() : null; // Video thumbnail

          // Ensure thumbnail path is absolute
          const thumbnailUrl = thumbnail ? `${process.env.PUBLIC_URL || ''}${thumbnail}` : null;

          return {
            title: title,
            date: date,
            url: url,
            thumbnail: thumbnailUrl,
          };
        }));

        setVideos(videosData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="mb-16 font-bold text-xl font-suse">
      {/* Heading for Latest Videos */}
      <div className="flex justify-between items-center mb-4 pr-4">
        <h2 className="text-base font-extrabold text-white uppercase tracking-wide">Latest Videos</h2>
      </div>

      {/* Grid of Video Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group"
          >
            {/* Thumbnail Section */}
            {video.thumbnail ? (
              <div
                className="relative w-full pb-[56.25%] overflow-hidden rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            ) : (
              <p className="text-white">Thumbnail not available</p> // Display this if thumbnail is missing
            )}
            
            {/* Title and Metadata Section */}
            <div className="py-4">
              {/* Title Section with Fixed Height */}
              <div className="h-12">
                <p className="text-white font-semibold text-left line-clamp-2 overflow-hidden text-ellipsis">
                  {video.title}
                </p>
              </div>
              
              {/* Date Section */}
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
