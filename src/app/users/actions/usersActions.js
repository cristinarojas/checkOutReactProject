// Dependencies.
import axios from 'axios';

// Action Types.
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  SUBMIT_USER_DATA
} from './actionTypes';

// Base Actions.
import { request, received, error } from '@shared/redux/baseActions';

export const submitUserData = (data) => dispatch => {
  dispatch(received(SUBMIT_USER_DATA, data));
}

export const fetchUsers = () => dispatch => {
  // Dispatching our request action TO THE STORE.
  dispatch(request(FETCH_USERS_REQUEST)); // { type: 'FETCH_USERS_REQUEST' }

  // Axios Data.
  const axiosData = {
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  return axios(axiosData)
    .then(response => dispatch(received(FETCH_USERS_SUCCESS,
    response.data)))
    .catch(err => {
        console.log('AXIOS ERROR', err.response);
        dispatch(error(FETCH_USERS_ERROR));
    });
};
