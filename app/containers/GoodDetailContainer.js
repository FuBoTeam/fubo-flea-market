import { connect } from 'react-redux';
import GoodDetail from '../components/GoodDetail';
import { goodQuery } from '../actions';

const mapStateToProps = (state) => {
  return {
    isFetching: state.graph.isFetching,
    good: state.graph.data && state.graph.data.good || {},
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