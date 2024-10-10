import React, { useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"; // Added useLocation to track route changes
import { BlogContext } from "./BlogContext"; // Import the BlogContext
import { format } from "date-fns";
import ReactMarkdown from "react-markdown"; // To render markdown content

function BlogPost({ scrollableDivRef }) { // Accept scrollableDivRef as a prop
  const { slug } = useParams(); // Get the slug from the URL
  const location = useLocation(); // To detect route changes
  const { posts } = useContext(BlogContext); // Get the blog posts from context

  // Find the blog post by matching the slug
  const post = posts.find((post) => post.slug === slug);

  // Scroll to the top of the specific container when the component mounts or when the slug changes
  useEffect(() => {
    if (scrollableDivRef && scrollableDivRef.current) {
      // Scroll the div to the top
      scrollableDivRef.current.scrollTop = 0;
    }
  }, [slug, location, scrollableDivRef]);

  if (!post) {
    return <div>Blog post not found</div>; // Display message if no post found
  }

  return (
    <div className="max-w-5xl mx-auto mt-8">
      {/* Blog Post Title */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-white mb-6">{post.title}</h1>

        {/* Author Section and Date */}
        <div className="flex flex-col items-center mb-4">
          {/* Author image with outline */}
          <div className="w-10 h-10 rounded-full border-3 border-orange-600 flex items-center justify-center mb-2">
            <img
              src={`${process.env.PUBLIC_URL}/Andious.webp`} // Access image from the public folder
              alt="Andious"
              className="w-full h-full rounded-full"
            />
          </div>

          {/* Author Name */}
          <p className="text-white text-lg font-semibold">Andious</p>

          {/* Blog Post Date */}
          <p className="text-white text-opacity-50 text-sm">
            {post.date ? format(post.date, "MMMM dd, yyyy") : "Date not available"}
          </p>
        </div>

        {/* Blog Post Cover Image */}
        {post.coverImage && (
          <div className="flex justify-center mb-6">  {/* Center-align the image */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-96 rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Blog Post Body */}
      <div className="flex justify-center"> {/* Center-align blog text */}
        <div className="text-white text-base font-medium prose prose-lg max-w-3xl mt-6 space-y-6 text-left">
          {/* Use ReactMarkdown to render the body content */}
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
