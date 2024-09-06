import React from "react";
import { EditPostModalForm} from "./EditPostModalForm"

export function PostItems({ posts, setPosts}) {

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
        <tr key={post.id}>
          <td>{post.attributes.title}</td>
          <td>{post.attributes.description}</td>
          <td>
            {/* -------------------------------modal---------------------- */}
            <div>
              <EditPostModalForm post={post.attributes} setPosts={setPosts} />
            </div>
            {/* -------------------------------modal---------------------- */}
          </td>
        </tr>
      ))}
    </>
  );
}
