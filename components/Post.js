import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
  return (
    <>
      <Link href={`/posts/${post.id}`}>
        <a className="card">
          <h4>{post.title}</h4>
        </a>

        
      </Link>
      
      <style jsx>
          {`
            .card {
              margin: 1rem;
              padding: 1.5rem;
              text-align: left;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
              max-width: 300px;
            }
          `}
        </style>
    </>
  );
};

export default Post;
