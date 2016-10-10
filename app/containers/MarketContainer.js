import { connect } from 'react-redux';
import Market from '../components/Market';
import {
  allGoodsQuery,
  myGoodsQuery,
  actionClear,
} from '../actions';

const mapStateToProps = (state) => {
  const goods = state.allGoods.data &&
                state.allGoods.data.allGoods ||
                null;
  const myGoods = state.my.data &&
                  state.my.data.user &&
                  state.my.data.user.myGoods ||
                  null;
  const biddings = state.my.data &&
                   state.my.data.user &&
                   state.my.data.user.myBiddings ||
                   null;
  const error = state.allGoods.error || state.my.error || null;
  const isAllLoading = !state.allGoods.isFetched || (goods === null && error === null);
  const isMyLoading = !state.my.isFetched || (biddings === null && error === null);
  const action = state.graph.data && state.graph.data.deleteGood || state.graph.updateGood || null;
  return {
    isAllLoading,
    isMyLoading,
    error,
    goods,
    myGoods,
    biddings,
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
    actionClear: () => {
      dispatch(actionClear());
    },
  };
};

const MarketContainer = connect(mapStateToProps, mapDispatchToProps)(Market);

export default MarketContainer;