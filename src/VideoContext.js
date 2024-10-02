// VideoContext.js
import React, { createContext, useState, useEffect } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only fetch videos if they're not already available
    if (videos.length === 0) {
      const fetchVideos = async () => {
        try {
          const response = await fetch('https://api.github.com/repos/ScottAdamson26/antigambling/contents/content/videos');
          const files = await response.json();

          const videosData = await Promise.all(
            files.map(async (file) => {
              const fileResponse = await fetch(file.download_url);
              const fileContent = await fileResponse.text();

              const titleMatch = fileContent.match(/^title:\s*"?([^"\n\r]+)"?\s*$/im);
              const dateMatch = fileContent.match(/^date:\s*"?([^"\n\r]+)"?\s*$/im);
              const urlMatch = fileContent.match(/^url:\s*"?([^"\n\r]+)"?\s*$/im);
              const thumbnailMatch = fileContent.match(/^thumbnail:\s*"?([^"\n\r]+)"?\s*$/im);

              const title = titleMatch ? titleMatch[1].trim() : file.name.replace('.md', '');
              const date = dateMatch ? new Date(dateMatch[1].trim()) : null;
              const url = urlMatch ? urlMatch[1].trim() : null;
              const thumbnail = thumbnailMatch ? thumbnailMatch[1].trim() : null;

              // Ensure thumbnail path is absolute
              const thumbnailUrl = thumbnail ? `${process.env.PUBLIC_URL || ''}${thumbnail}` : null;

              return {
                title,
                date,
                url,
                thumbnail: thumbnailUrl,
              };
            })
          );

          // Sort videos by date, newest first
          const sortedVideos = videosData.sort((a, b) => b.date - a.date);

          setVideos(sortedVideos);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching videos:', error);
          setLoading(false);
        }
      };

      fetchVideos();
    }
  }, [videos]);

  return (
    <VideoContext.Provider value={{ videos, loading }}>
      {children}
    </VideoContext.Provider>
  );
};
