import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../Actions/UserActions';
import Loading from '../Components/Loading';
import { auth } from '../Firebase';

class LoadingComponent extends Component {
  componentWillMount() {
    const { userLoading } = this.props;
    if (userLoading === undefined) {
      this.props.getUser();
    }
  }

  render() {
    const { userLoading, children } = this.props;
    if (userLoading === false) {
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
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, { getUser })(LoadingComponent));
