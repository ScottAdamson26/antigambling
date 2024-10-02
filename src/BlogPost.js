import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "./BlogContext"; // Import the BlogContext
import { format } from "date-fns";
import ReactMarkdown from "react-markdown"; // To render markdown content

function BlogPost() {
  const { slug } = useParams(); // Get the slug from the URL
  const { posts } = useContext(BlogContext); // Get the blog posts from context

  // Find the blog post by matching the slug
  const post = posts.find((post) => post.slug === slug);

  useEffect(() => {
    if (post) {
      console.log("Blog post body content:", post.body); // Log the body content to check if it's coming through
    }
  }, [post]);

  if (!post) {
    return <div>Blog post not found</div>; // Display message if no post found
  }

  return (
    <div className="max-w-5xl mx-auto p-4 mb-32">
      {/* Blog Post Title */}
      <h1 className="text-5xl font-bold text-white mb-4">{post.title}</h1>

      {/* Blog Post Date */}
      <p className="text-white text-opacity-50 text-sm mb-6">
        {post.date ? format(post.date, "MMMM dd, yyyy") : "Date not available"}
      </p>
      {/* Blog Post Cover Image */}
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className=" h-96 mb-6 rounded-lg"
        />
      )}

      {/* Blog Post Body */}
      <div className="text-white prose prose-lg max-w-none">
        {/* Use ReactMarkdown to render the body conent */}
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogPost;
