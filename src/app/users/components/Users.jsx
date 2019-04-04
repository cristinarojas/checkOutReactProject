// Dependencies
import React, { Fragment, Component } from 'react';
import { array } from 'prop-types';

// Utils.
import { isFirstRender } from '@shared/utils/frontend';

// Styles
import styles from './Users.scss';

class Users extends Component {
  /*static propTypes = {
    users: array
  };*/

  constructor() {
    super();

    /*this.state = {
      data: null,
      erro: ''
    };*/
  }

  componentDidMount() {
    const { fetchUsers } = this.props;

    fetchUsers();
    /*fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        return response.json();
      })
      .then((data) => {
        this.setState({
          data: data
        });
     })
     .catch(error => this.setState({ error, isLoading: false }));*/
  }

  render() {
    /*if (this.state.data === null) {
      return null;
    }*/

    const { users, userData } = this.props;

    if (userData) {
      return <h1>Ya tiene datos</h1>;
    }

    if (isFirstRender(users)) {
      return null;
    }

    return (
      <div className={styles.selectStyle}>
        <select>
          {users && users.map((user, i)=> {
            return <option key={i} value={user.name}>{user.name}</option>
          })}
        </select>
      </div>
    );
  }
}

export default Users;
