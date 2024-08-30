import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch the list of Markdown files from the GitHub repository
        const response = await fetch(
          'https://api.github.com/repos/ScottAdamson26/antigambling/contents/content/posts'
        );
        const files = await response.json();

        // Fetch the content of each Markdown file
        const postsData = await Promise.all(
          files.map(async (file) => {
            const fileResponse = await fetch(file.download_url);
            const content = await fileResponse.text();

            // Parse the Markdown content into HTML
            const contentHtml = marked(content);

            // Return an object with post metadata and HTML content
            return {
              contentHtml,
              name: file.name, // You can use this as a title placeholder
            };
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
    return <div className="bg-zinc-900 text-white h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="mb-8 font-suse">
      {/* Heading for Latest News */}
      <h2 className="text-base font-extrabold text-white mb-4 uppercase tracking-wide	">Latest News</h2>
      
      {/* Grid of Blog Post Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-zinc-800 text-white p-6 rounded-lg shadow-lg hover:bg-zinc-700 transition duration-200">
            <h2 className="text-2xl font-semibold mb-2 font-SUSE">{post.name.replace('.md', '')}</h2>
            {/* Render parsed HTML content */}
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
