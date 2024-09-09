import React from "react";
import { EditPostModalForm} from "./EditPostModalForm"
import { DeletePostModal } from "./DeletePostModal";

export function PostItems({ posts, setPosts, handleDestroy }) {

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
            <div>
              <EditPostModalForm
                {...post}
                setPosts={setPosts}
              />
              <DeletePostModal
                {...post}
                handleDestroy={handleDestroy}
              />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}
