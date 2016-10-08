import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Header from '../components/Header';
import { userSet } from '../actions';

const mapStateToProps = (state) => {
  const user = state.graph.data &&
               state.graph.data.user || null;
  return {
    isSignedIn: state.auth.getIn(['user', 'isSignedIn']),
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLocationOnSignOut: (nextPathname) => {
      dispatch(push(nextPathname));
    },
    userSet: (user) => {
      dispatch(userSet(user));
    },
  };
};

const HeaderContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Header);

export default HeaderContainer;