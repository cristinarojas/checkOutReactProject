// Action Types.
import {
  SEARCH_WEATHER_REQUEST,
  SEARCH_WEATHER_SUCCESS,
  SEARCH_WEATHER_ERROR,
} from './actionTypes';

// Consuming a service.
import axios from 'axios';

// Base Actions - invented by carlos functions
// where you can pass type of action or a payload
// and will be return object format.
import { request, received, error } from '@shared/redux/baseActions';

// Action creators are functions that WE use in our components
// that also are injected in the props of that component
// - this functions dispatch actions (objects) that have
// type and payload.
export const searchWeather = (city) => dispatch => {  // is a closure of bindActionCreator.

  // ey! redux here is happening this action...and call the reducer.
  dispatch(request(SEARCH_WEATHER_REQUEST, city)); // dispatch({type: 'SEARCH_WEATHER_REQUEST'})

  const apiKey = '6844b24412a14adf733d233afead26d8';
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((result) => {
      console.log('1 ACTION CREATOR-->', result);
      dispatch(received(SEARCH_WEATHER_SUCCESS, result)) // AQUI MANDO EL OBJETO CON EL PAYLOAD (datos que vienen del servicio) dispatch({type: 'SEARCH_WEATHER_REQUEST', payload: {coord: {…}, weather: Array(1), base: "stations", main: {…}, visibility: 1609, …}})
    });



  // Axios Data.
  /*const axiosData = {
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  return axios(axiosData)
    .then(response => dispatch(received(SEARCH_WEATHER_SUCCESS, // ey! redux here is happening this action...and call the reducer.
    response.data))) // and Im passing the object and payload dispatch({type: 'SEARCH_WEATHER_REQUEST', payload: {…}, weather: Array(3), base: "stations", main: {…}, visibility: 805, …})
    .catch(err => {
        console.log('AXIOS ERROR', err.response);
        dispatch(error(SEARCH_WEATHER_ERROR));
    });*/
}
