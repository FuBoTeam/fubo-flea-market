import { connect } from 'react-redux';
import Market from '../components/Market';
import {
  allGoodsQuery,
  myGoodsQuery,
  myBiddingsQuery,
  actionClear,
} from '../actions';

const mapStateToProps = (state) => {
  const goods = state.allGoods.goods;
  const error = state.error;
  const isAllLoading = !state.allGoods.isFetched && state.allGoods.isFetching;
  const myGoods = state.my.goods.data;
  const isMyGoodsLoading = state.my.goods.isFetching && !state.my.goods.isFetched;
  const myGoodsError = state.my.goods.error;
  const myBiddings = state.my.biddings.data;
  const isMyBiddingsLoading = state.my.biddings.isFetching && !state.my.biddings.isFetched;
  const myBiddingsError = state.my.biddings.error;
  const action = state.graph.data || null;
  return {
    goods,
    error,
    isAllLoading,
    myGoods,
    isMyGoodsLoading,
    myGoodsError,
    myBiddings,
    isMyBiddingsLoading,
    myBiddingsError,
    action,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllGoods: () => {
      dispatch(allGoodsQuery());
    },
    getMyGoods: () => {
      dispatch(myGoodsQuery());
    },
    getMyBiddings: () => {
      dispatch(myBiddingsQuery());
    },
    actionClear: () => {
      dispatch(actionClear());
    },
  };
};

const MarketContainer = connect(mapStateToProps, mapDispatchToProps)(Market);

export default MarketContainer;