// Dependencies.
import { combineReducers } from 'redux';

// Components reducers.
import users from '../../../app/users/reducers/usersReducer';
import weather from '../../../app/weather/reducers/weatherReducer';

const rootReducer = combineReducers({
  users,
  weather
});

export default rootReducer;
