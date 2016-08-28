import GoodBlocks from '../components/GoodBlocks';

import { connect } from 'react-redux';
import { getGoods } from '../actions';

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
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