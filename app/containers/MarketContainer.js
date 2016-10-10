import { connect } from 'react-redux';
import Market from '../components/Market';
import {
  allGoodsQuery,
  myBiddingsQuery,
  myGoodsQuery,
} from '../actions';

const mapStateToProps = (state) => {
  let goods = state.graph.data &&
              state.graph.data.allGoods ||
              state.graph.data &&
              state.graph.data.user &&
              state.graph.data.user.myGoods ||
              null;
  const biddings = state.graph.data &&
                   state.graph.data.user &&
                   state.graph.data.user.myBiddings ||
                   null;
  if (state.graph.data && state.graph.data.deleteGood || state.graph.data && state.graph.data.updateGood) {
    goods = undefined;
  }
  const error = state.graph.error || null;
  const isLoading = state.graph.isFetching || (goods === null && biddings === null && error === null);
  return {
    user: state.auth && state.auth.getIn(['user', 'attributes']) || null,
    isLoading,
    error,
    goods,
    biddings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllGoods: () => {
      dispatch(allGoodsQuery());
    },
    getMyBiddings: () => {
      dispatch(myBiddingsQuery());
    },
    getMyGoods: () => {
      dispatch(myGoodsQuery());
    },
  };
};

const MarketContainer = connect(mapStateToProps, mapDispatchToProps)(Market);

export default MarketContainer;