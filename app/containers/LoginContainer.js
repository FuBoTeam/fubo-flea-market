import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Login from '../components/Login';
import { userQuery } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    changeLocationOnSignIn: (nextPathname) => {
      dispatch(push(nextPathname));
    },
    getUser: () => {
      dispatch(userQuery());
    },
  };
};

const LoginContainer = connect(null, mapDispatchToProps)(Login);
export default LoginContainer;