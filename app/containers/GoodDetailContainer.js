import { connect } from 'react-redux';
import GoodDetail from '../components/GoodDetail';
import { goodQuery } from '../actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.params.id;
  const good = state.good.data && state.good.data[id] || null;
  const error = state.good.error || null;
  const isLoading = (state.good.data && !state.good.data[id]) || (good === null && error === null);
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