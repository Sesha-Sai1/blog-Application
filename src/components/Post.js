import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, updatePost } from "../store/PostSlice";

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddPost = () => {
    if (editIndex === -1) {
      dispatch(addPost(formData));
      setFormData({ title: "", content: "" });
    }
    if (editIndex !== -1) {
      dispatch(updatePost({ id: posts[editIndex].id, ...formData }));
      setFormData({ title: "", content: "" });
      setEditIndex(-1);
    }
  };
  const handleDeletePost = (id) => {
    dispatch(deletePost({ id }));
  };
  const handleUpdatePost = (ind) => {
    const postToUpdate = posts[ind];
    setFormData({ title: postToUpdate.title, content: postToUpdate.content });
    setEditIndex(ind);
  };

  return (
    <div className="blogs">
      <h1>Blog Post</h1>
      <div className="add-data">
        <h2>Add Post</h2>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter the title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <label>Content:</label>
        <textarea
          name="content"
          placeholder="Enter content for the page"
          onChange={handleInputChange}
          value={formData.content}
        />
        <div className="btn-position">
          <button onClick={handleAddPost} className="btn">
            {editIndex !== -1 ? "Update" : "Post"}
          </button>
        </div>
      </div>
      <div className="postView">
        <h2>Posts</h2>
        <ul className="list-view">
          {posts.map((post, index) => {
            return (
              <li key={post.id} className="listdisplay">
                <strong>Title:{post.title}</strong>
                <p>Content:{post.content}</p>
                <div>
                  <button
                    onClick={() => {
                      handleDeletePost(post.id);
                    }}
                    className="btns"
                  >
                    Delete
                  </button>
                  <button
                    className="btns"
                    onClick={() => {
                      handleUpdatePost(index);
                    }}
                  >
                    Update
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Post;
