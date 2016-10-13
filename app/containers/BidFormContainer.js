import { connect } from 'react-redux';
import BidForm from '../components/GoodDetail/BidForm';
import { addBidMutation } from '../actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleBid: (bidData) => {
      dispatch(addBidMutation(bidData));
    },
  };
};

const BidFormContainer = connect(
  mapStateToProps, mapDispatchToProps
)(BidForm);

export default BidFormContainer;