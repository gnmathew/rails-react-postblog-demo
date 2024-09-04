import React from "react";

export function PostItems({ posts }) {
  if (posts.length === 0) {
    return (
      <tr>
        <td colSpan="3" className="text-center">Not Available</td>
      </tr>
    );
  }

  return (
    <>
      {posts.map(post => (
        <tr key={post.attributes.id}>
          <td>{post.attributes.title}</td>
          <td>{post.attributes.description}</td>
          <td>
            <button className="btn btn-secondary">Edit</button>
          </td>
        </tr>
      ))}
    </>
  );
}
