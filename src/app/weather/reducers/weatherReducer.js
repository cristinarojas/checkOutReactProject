// Importing the const actions types
// Porque las voy a utilizar en mi reducer para
// comparar la action que llego (type) con algo.
import {
  SEARCH_WEATHER_REQUEST,
  SEARCH_WEATHER_SUCCESS,
  SEARCH_WEATHER_ERROR,
} from '../actions/actionTypes';

// I need this method from utils getNewState
import { getNewState } from '@shared/utils/frontend';

// Reducer function need initial state
const initialState = {
  weather: []
};

// Reducer function receive a initial state and the action
// the action that was dispatched from the ACTIONS creators function
// que a su vez esa action creator fue mandada llamar desde el componente.
export default function weatherReducer(state = initialState, action) {
  switch (action.type) { // VIENE DESDE EL METODO DISPATCH en el Action creators {type: 'SEARCH_WEATHER_REQUEST', payload: {…}, weather: Array(3), base: "stations", main: {…}, visibility: 805, …})
    case SEARCH_WEATHER_SUCCESS: {

      const { payload: weather } = action;

      console.log('2 REDUCER PAYLOAD (Datos que se pidieron al servicio)-->', weather);

      return getNewState(state, {
        weather
      });
    }

    default:
      return state;
  }
}
