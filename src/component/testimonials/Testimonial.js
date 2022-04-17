import React, { useEffect, useState } from "react";
import './testimonial.css';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { testimonys } from "../../redux/team/testimonyReducer";
import ReactPaginate from 'react-paginate'

const Testimonial = () => {
  const [page, setPage] = useState(1)
  const dispatch = useAppDispatch()
  const ans = useAppSelector((store) => store.testimonys);
  const { testimony } = ans
  console.log(testimony)
  
  useEffect (() => {
      dispatch(testimonys(page))
  }, [dispatch, page])

  const handlePageClick = (testimony) => {
    console.log(testimony);

    let currentPage = testimony.selected + 1
    setPage(currentPage)

  }

  return (
    <div className="container pb-5">
      <p className="dest-para">Testimonial</p>
      <h1 className="dest-header">What Customers Are Saying...</h1>
      <div className="lines"></div>
      <div className="row">
        {testimony && testimony.results && testimony.results.length ? testimony.results.map((testy) => {
              return (
                <div
                  className="card col-sm-12 col-md-6 col-lg-4 mt-3 mb-3"
                >
                  <div className="card-body">
                    <div key={testimony.id} className="client-info">
                    <h5 className="card-title name">{testy.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {testy.job}
                    </h6>
                    </div>
                    <p className="card-text mt-4">{testy.testimony}</p>
                  </div>
                </div>
              );
            })
          : ''}
      </div>
      <ReactPaginate
      previousLabel={'<<'}
      nextLabel={'>>'}
      breakLabel={'...'}
      pageCount={Math.ceil(testimony.count / 3)}
      marginPagesDisplayed={4}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
      />
    </div>
  );
};

export default Testimonial;
