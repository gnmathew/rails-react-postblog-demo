import React from "react";
import { EditPostModalForm} from "./EditPostModalForm"

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
            {/* -------------------------------modal---------------------- */}
            <div>
              <EditPostModalForm />
            </div>
            {/* -------------------------------modal---------------------- */}
          </td>
        </tr>
      ))}
    </>
  );
}
