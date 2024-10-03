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

  // Scroll to the top when the component mounts or when the slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <div>Blog post not found</div>; // Display message if no post found
  }

  return (
    <div className="max-w-5xl mx-auto py-4 mb-32">
      {/* Blog Post Title */}
      <h1 className="text-5xl font-bold text-white mb-6">{post.title}</h1>

      {/* Blog Post Cover Image */}
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-96 mb-6 rounded-lg"
        />
      )}

      {/* Author Section */}
      <div className="flex items-center mb-6 ml-2">


        {/* Author image with flush outline */}
        <div className="w-10 h-10 rounded-full border-3 border-orange-600 flex items-center justify-center">
          {/* Profile image for Andious */}
          <img
            src={`${process.env.PUBLIC_URL}/Andious.webp`} // Access image from the public folder
            alt="Andious"
            className="w-full h-full rounded-full"
          />
        </div>

        {/* Author Name */}
        <div className="ml-4">
          <p className="text-white text-lg font-semibold">Andious</p>
        </div>
      </div>

      {/* Blog Post Date */}
      <p className="text-white text-opacity-50 text-sm mb-6 ml-2">
        {post.date ? format(post.date, "MMMM dd, yyyy") : "Date not available"}
      </p>

      {/* Blog Post Body */}
      <div className="text-white text-base font-medium prose prose-lg max-w-none space-y-6">
        {/* Use ReactMarkdown to render the body conent */}
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogPost;
