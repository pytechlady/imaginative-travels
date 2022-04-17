import React, { useEffect, useState } from "react";
import Service from "../service/Service";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { blogs } from "../../redux/team/blogReducer";
import ReactPaginate from "react-paginate";

const Blogcard = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const info = useAppSelector((store) => store.blogs);
  const { blog } = info;
  console.log(info);

  useEffect(() => {
    dispatch(blogs(page));
  }, [dispatch, page]);

  const handlePageClick = (blog) => {
    console.log(blog);

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
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3 mb-3">
                  <Service
                    key={place.id}
                    title={place.title}
                    paragraph={"Category: " + place.category}
                    image={place.travelphoto}
                  />
                </div>
              );
            })
          : null}
      </div>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={Math.ceil(blog.count / 6)}
        marginPagesDisplayed={4}
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
