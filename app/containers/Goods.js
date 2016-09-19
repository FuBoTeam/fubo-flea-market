import GoodBlocks from '../components/market/GoodBlocks';

import { connect } from 'react-redux';
import { getGoods } from '../actions';

const _isBidden = (good, myself) => {
  return good.subscriptPeople.some((person) => { return person.uuid === myself.uuid; });
};

const getDiffGoods = (goods, filter = 'SHOW_ALL', myself) => {
  switch (filter) {
    case 'SHOW_ALL':
      return goods;
    case 'SHOW_MY':
      return goods.filter((good) => { return good.owner.uuid === myself.uuid; });
    case 'SHOW_BID':
      return goods.filter((good) => { return _isBidden(good, myself); });
    default:
      return goods;
  }
};

const _getFilter = (path) => {
  const pathDict = {
    '/': 'SHOW_ALL',
    '/my-goods': 'SHOW_MY',
    '/my-bids': 'SHOW_BID',
  };
  return pathDict[path];
};

const mapStateToProps = (state) => {
  return {
    goods: getDiffGoods(state.goods, _getFilter(state.routing.locationBeforeTransitions.pathname), state.user),
    path: _getFilter(state.routing.locationBeforeTransitions.pathname),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pollGoods: () => {
      return dispatch(getGoods());
    },
  };
};

const Goods = connect(mapStateToProps, mapDispatchToProps)(GoodBlocks);

export default Goods;