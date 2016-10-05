import { connect } from 'react-redux';
import Market from '../components/Market';

const mapStateToProps = (state) => {
  return {
    user: state.auth.getIn(['user', 'attributes']),
  };
};

const MarketContainer = connect(mapStateToProps, null)(Market);

export default MarketContainer;