import { connect } from 'react-redux';
import GoodDetail from '../components/GoodDetail';
import { goodQuery } from '../actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.params.id;
  // Prevent state.good[id] is initializing
  const good = state.good[id] && state.good[id].data || null;
  const error = state.good[id] && state.good[id].error || null;
  const isLoading = state.good[id] ?
                    !state.good[id].isFetched : true;
  const isUpdating = state.good[id] ?
                     state.good[id].isFetching &&
                     state.good[id].isFetched : false;
  return {
    isUpdating,
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