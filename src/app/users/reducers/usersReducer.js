import {
  FETCH_USERS_SUCCESS,
  SUBMIT_USER_DATA
} from '../actions/actionTypes';

// Utils
import { getNewState } from '@shared/utils/frontend';

// Initial State.
const initialState = {
  users: [],
  userData: false
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_USER_DATA: {
      const { payload: data } = action;

      return getNewState(state, {
        userData: data
      });
    }

    case FETCH_USERS_SUCCESS: {
      const { payload: users } = action;

      return getNewState(state, {
        users
      });
    }

    default:
      return state;
  }
};
