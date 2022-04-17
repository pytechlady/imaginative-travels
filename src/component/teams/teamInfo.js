import React, {useEffect, useState} from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { teams } from '../../redux/team/teamReducer'
import Service from '../service/Service';
import ReactPaginate from 'react-paginate'



const TeamInfo = () => {
  const [page, setPage] = useState(1)
    const dispatch = useAppDispatch()
    const teamProfile = useAppSelector((store) => store.teams);
    const { team } = teamProfile
    console.log(team)
    useEffect (() => {
        dispatch(teams(page))
    }, [dispatch, page])

    const handlePageClick = (team) => {
      console.log(team);
  
      let currentPage = team.selected + 1
      setPage(currentPage)
  
    }


  return (
    <div className="container pb-5">
        <p className="dest-para">Team</p>
      <h1 className="dest-header">Our Team</h1>
      <div className="lines"></div>
    <div className="row">
        {team && team.results && team.results.length ? team.results.map((user) => {
            return (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                <Service
                        key={user.id}
                        title={user.first_name +" " + user.last_name}
                        paragraph={user.title}
                        image={user.image}
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
      pageCount={Math.ceil(team.count / 3)}
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


export default TeamInfo