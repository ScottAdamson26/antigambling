import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/ScottAdamson26/antigambling/contents/content/posts');
        const files = await response.json();

        const postFile = files.find(file => {
          const fileNameSlug = file.name.replace('.md', '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return fileNameSlug === slug;
        });

        if (postFile) {
          const fileResponse = await fetch(postFile.download_url);
          const fileContent = await fileResponse.text();

          const titleMatch = fileContent.match(/^title:\s*"?([^"\n\r]+)"?\s*$/im);
          const coverImageMatch = fileContent.match(/^cover_image:\s*"?([^"\n\r]+)"?\s*$/im);
          const contentMatch = fileContent.split('---')[2]?.trim();

          setPost({
            title: titleMatch ? titleMatch[1].trim() : 'Untitled',
            coverImage: coverImageMatch ? coverImageMatch[1].trim() : null,
            content: contentMatch,
          });
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 text-white">
      {post.coverImage && (
        <img src={post.coverImage} alt={post.title} className="w-full h-auto rounded-lg mb-4" />
      )}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose prose-lg">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;
