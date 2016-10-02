import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.getIn(['user', 'isSignedIn']),
    user: state.auth.getIn(['user', 'attributes']),
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