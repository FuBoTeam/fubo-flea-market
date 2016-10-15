import { connect } from 'react-redux';
import Tab from '../components/Tab';

const mapStateToProps = (state) => {
  const isUpdating = state.allGoods.isFetching || state.my.biddings.isFetching || state.my.goods.isFetching || state.graph.isFetching || false;
  return {
    isUpdating,
  };
};

const TabContainer = connect(mapStateToProps)(Tab);

export default TabContainer;