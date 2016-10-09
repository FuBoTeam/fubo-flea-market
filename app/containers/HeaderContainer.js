import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  const user = state.user;
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
  };
};

const HeaderContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Header);

export default HeaderContainer;