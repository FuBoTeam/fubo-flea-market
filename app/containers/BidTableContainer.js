import { connect } from 'react-redux';
import BidTable from '../components/GoodDetail/BidTable';

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.getIn(['user', 'isSignedIn']),
    user: state.user,
  };
};

const BidTableContainer = connect(
  mapStateToProps
)(BidTable);

export default BidTableContainer;