import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser, getDbUsers } from '../Actions/UserActions';
import Loading from '../Components/Loading';
import { auth } from '../Firebase';

class LoadingComponent extends Component {
  componentWillMount() {
    const { userLoading, dbUserLoading } = this.props;
    if (userLoading === undefined) {
      this.props.getUser();
    }
    if (dbUserLoading === undefined) {
      this.props.getDbUsers();
    }
  }

  render() {
    const { userLoading, dbUserLoading, children } = this.props;
    if (userLoading === false && dbUserLoading === false) {
      return (
        <div>
          {children}
        </div>
      );
    }

    else {
      return (
        <Loading/>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    dbUserLoading: state.loading.dbUser,
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, { getUser, getDbUsers })(LoadingComponent));
