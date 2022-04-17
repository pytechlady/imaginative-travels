import React, {useEffect, useState} from "react";
import Service from "../service/Service";
import "./destinations.css";
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { destinations } from "../../redux/team/destinationReducer";
import ReactPaginate from 'react-paginate'


const Destinations = () => {
  const [page, setPage] = useState(1)
  const dispatch = useAppDispatch()
    const res = useAppSelector((store) => store.destinations);
    const { destination } = res
    console.log(destination)
    
    useEffect (() => {
        dispatch(destinations(page))
    }, [dispatch, page])

    const handlePageClick = (destination) => {
  
      let currentPage = destination.selected + 1
      setPage(currentPage)
    }

  return (
    <div className="container pb-5">
      <p className="dest-para">Destination</p>
      <h1 className="dest-header">Popular Destinations</h1>
      <div className="lines"></div>
      <div className="row">
        {destination && destination.results && destination.results.length ? destination.results.map((place) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3 mb-3">
                    <Service
                      key={place.id}
                      title={place.destination_title}
                      paragraph={place.description}
                      image={place.destination_image}
                    />
                </div>
              );
            }
        ): ''}
      </div>
      <ReactPaginate
      previousLabel={'<<'}
      nextLabel={'>>'}
      breakLabel={'...'}
      pageCount={Math.ceil(destination.count/3)}
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
  )
}

export default Destinations;


