import { combineReducers } from 'redux'
import teams from './team/teamReducer'

const rootReducer = () => {
    combineReducers({
    teams
      });
} 

export default rootReducer
