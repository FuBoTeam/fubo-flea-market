import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Login from '../components/Login';

const mapDispatchToProps = (dispatch) => {
  return {
    changeLocationOnSignIn: (nextPathname) => {
      dispatch(push(nextPathname));
    },
  };
};

const LoginContainer = connect(null, mapDispatchToProps)(Login);
export default LoginContainer;