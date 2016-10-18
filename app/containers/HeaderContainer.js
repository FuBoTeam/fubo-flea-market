import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Header from '../components/Header';
import { userQuery } from '../actions';

const mapStateToProps = (state) => {
  const user = state.auth.getIn(['user', 'attributes'])
            && state.auth.getIn(['user', 'attributes']).toObject()
            || {};
  return {
    isSignedIn: state.auth.getIn(['user', 'isSignedIn']),
    user,
    userFakeName: state.user.fakeName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLocationOnSignOut: (nextPathname) => {
      dispatch(push(nextPathname));
    },
    getUser: () => {
      dispatch(userQuery());
    },
  };
};

const HeaderContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Header);

export default HeaderContainer;