// this container inject the redux states to the component
// INYECTA EL ESTADO DE REDUX A MI COMPONENTE

// connect my component to redux store.
import { connect } from 'react-redux';

// inject the dispatch method (that is from redux store)
// to execute the actions.
import { bindActionCreators } from 'redux';

import Layout from '../components/Layout';

// Here im importing the actions creators (functions that are used in the components)
import {
 searchWeather,
 showInfo
} from '../actions/weatherActions';

// INYECTA EL ESTADO DE REDUX A LAS PROPS DE MI COMPONENTE
const mapStateToProps = ({ weather }) => {
  return {
    weather: weather.weather,
    show: weather.show
  }
};

// INYECTA EL DISPATCH A LOS ACTION CRETORS (FUNCIONES QUE UTILIZO EN MIS COMPONENTES)
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    searchWeather,
    showInfo
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout); // EL CONNECT CONECTA LOS PROPS DEL REDUX STATE Y ACTIONS creators
// EL LAYOUT TIENE CONOCIMIENTO DEL REDUX STATE Y ACTIONS CREATORS En this.props DEL LAYOUT.
