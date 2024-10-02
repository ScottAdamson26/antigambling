import { Buffer } from 'buffer';  // Polyfill Buffer for gray-matter
import React, { createContext, useState, useEffect } from 'react';
import matter from 'gray-matter';

// Set Buffer globally for gray-matter
window.Buffer = Buffer;

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (posts.length === 0) {
      const fetchPosts = async () => {
        try {
          const response = await fetch('https://api.github.com/repos/ScottAdamson26/antigambling/contents/content/posts');
          const files = await response.json();

          const postsData = await Promise.all(
            files.map(async (file) => {
              const fileResponse = await fetch(file.download_url);
              const fileContent = await fileResponse.text();

              // Use gray-matter to parse frontmatter and body content
              const { data, content } = matter(fileContent);

              const title = data.title || file.name.replace('.md', '');
              const date = data.date ? new Date(data.date) : null;
              const coverImage = data.cover_image || null;
              const body = content.trim(); // The main content of the post (the body)
              const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

              return {
                title,
                date,
                coverImage,
                body, // The actual blog content
                slug,
              };
            })
          );

          // Sort posts by date, newest first
          const sortedPosts = postsData.sort((a, b) => b.date - a.date);

          setPosts(sortedPosts);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching posts:', error);
          setLoading(false);
        }
      };

      fetchPosts();
    }
  }, [posts]);

  return (
    <BlogContext.Provider value={{ posts, loading }}>
      {children}
    </BlogContext.Provider>
  );
};
