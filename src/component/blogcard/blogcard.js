import React, { useEffect, useState } from "react";
import Service from "../service/Service";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { blogs } from "../../redux/team/blogReducer";
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom';

const Blogcard = () => {
  
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const info = useAppSelector((store) => store.blogs);
  const { blog } = info;
  const itemsPerPage = 3;
  const pageCount = Math.ceil(blog.count / itemsPerPage);
  useEffect(() => {
    dispatch(blogs(page));
  }, [dispatch, page]);

  const convertToHumanReadableTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handlePageClick = (blog) => {
    let currentPage = blog.selected + 1;
    setPage(currentPage);
  };
  return (
    <div className="container pb-5">
      <p className="dest-para">Blog</p>
      <h1 className="dest-header">Blog Post</h1>
      <div className="lines"></div>
      <div className="row">
        {blog && blog.results && blog.results.length
          ? blog.results.map((place) => {
              return (
                <div key={place.id} className="col-sm-12 col-md-6 col-lg-4 mt-3 mb-3">
                  <Link to={`/blog/${place.id}`}>
                  <Service
                    title={place.title}
                    paragraph={"Category: " + place.category + " || Posted at: " + convertToHumanReadableTime(place.created_at)}
                    image={place.travelphoto}
                  />
                  </Link>
                </div>
              );
            })
          : (
            <p>There is currently no blog post available.</p>
          )}
      </div>
     
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={6}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Blogcard;
