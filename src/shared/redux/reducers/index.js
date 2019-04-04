// Dependencies.
import { combineReducers } from 'redux';

// Components reducers.
import users from '../../../app/users/reducers/usersReducer';

const rootReducer = combineReducers({
  users
});

export default rootReducer;
