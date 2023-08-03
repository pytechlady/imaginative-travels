// Post.js

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useParams } from "react-router-dom";
import "../App.css";

const Post = () => {
  const { blogId } = useParams();
  const dispatch = useAppDispatch();
  const blogPost = useAppSelector((store) => store.posts);
  const { post } = blogPost;

  useEffect(() => {
    const id = parseInt(blogId);
    if (!isNaN(id)) {
      dispatch({ type: "POST", payload: { id } });
    } else {
      console.error("Invalid blogId:", blogId);
    }
  }, [blogId]);

  const convertToHumanReadableTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="container pt-5 pb-5">
      <h1 className="dest-header">Title: {post?.title}</h1>
      <p className="dest-para">Posted at: {convertToHumanReadableTime(post?.created_at)}</p>
      <div className="blog-header-image pt-3">
        <img
          src={post?.travelphoto}
          className="img-fluid"
          alt="blog cover-image"
        />
      </div>
      <div className="row pt-5 content-div">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img src={post?.travelphoto_2} className="w-100 side_images" alt="travelphoto2" />
          <img src={post?.travelphoto_3} className="w-100 side_images mt-4" alt="travelphoto3" />
          <img src={post?.travelphoto_4} className="w-100 side_images mt-4" alt="travelphoto4" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 p-4">
          <p dangerouslySetInnerHTML={{ __html: post?.content }}></p>
        </div>
      </div>
    </div>
  );
};

export default Post;

