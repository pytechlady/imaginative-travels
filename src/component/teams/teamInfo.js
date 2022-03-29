import React, {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { teams } from '../../redux/team/teamReducer'
import Service from '../service/Service';



const TeamInfo = () => {
    const dispatch = useAppDispatch()
    const teamProfile = useAppSelector((store) => store.teams);
    const { team } = teamProfile
    console.log(team)
    useEffect (() => {
        dispatch(teams())
    }, [dispatch])


  return (
    <div className="container pb-5">
        <p className="dest-para">Team</p>
      <h1 className="dest-header">Our Team</h1>
      <div className="lines"></div>
    <div className="row">
        {team && team.map((user) => {
            return (
            <div className="col-sm-12 col-md-6 col-lg-4">
                <Service
                        key={user.id}
                        title={user.first_name +" " + user.last_name}
                        paragraph={user.title}
                        image={user.image}
                      /> 
            </div>
            );
        }
        )}
        </div>
        </div>
          )
        }


export default TeamInfo