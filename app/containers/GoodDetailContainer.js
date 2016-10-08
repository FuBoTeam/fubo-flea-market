import { connect } from 'react-redux';
import GoodDetail from '../components/GoodDetail';
import { goodQuery } from '../actions';

const mapStateToProps = (state) => {
  const good = state.graph.data && state.graph.data.good || null;
  const error = state.graph.error || null;
  const isLoading = state.graph.isFetching || (good === null && error === null);
  return {
    isLoading,
    error,
    good,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGood: (id) => {
      dispatch(goodQuery(id));
    },
  };
};

const GoodDetailContainer = connect(mapStateToProps, mapDispatchToProps)(GoodDetail);

export default GoodDetailContainer;