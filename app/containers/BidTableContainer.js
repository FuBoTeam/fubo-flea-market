import { connect } from 'react-redux';
import BidTable from '../components/GoodDetail/BidTable';

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.getIn(['user', 'isSignedIn']),
  };
};

const BidTableContainer = connect(
  mapStateToProps
)(BidTable);

export default BidTableContainer;