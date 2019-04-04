// Dependencies.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components.
import Layout from '../components/Layout';

// Actions.
import {
  fetchUsers,
  submitUserData
} from '../actions/usersActions';

// Maping our Redux state to props.
const mapStateToProps = ({ users }) => {
  return {
    users: users.users,
    userData: users.userData
  }
};

// Binding our fetchUsers action.
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchUsers,
    submitUserData
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
