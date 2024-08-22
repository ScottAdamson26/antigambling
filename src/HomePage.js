import React, { useEffect, useState } from 'react';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/ScottAdamson26/antigambling/contents/content/posts'
        );
        const files = await response.json();

        // Fetch content for each file
        const postsData = await Promise.all(
          files.map(async (file) => {
            const fileResponse = await fetch(file.download_url);
            const content = await fileResponse.text();

            // Parse the content for your needs (e.g., extract front matter)
            return { content, name: file.name };
          })
        );

        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index} className="mb-6">
            <h2 className="text-2xl font-semibold">{post.name}</h2>
            <div>{post.content.substring(0, 200)}...</div> {/* Display a snippet */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
