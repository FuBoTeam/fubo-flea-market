import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.getIn(['user', 'isSignedIn']),
    user: state.auth.getIn(['user', 'attributes']),
  };
};

const HeaderContainer = connect(
  mapStateToProps
)(Header);

export default HeaderContainer;