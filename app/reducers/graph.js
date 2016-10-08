import {
  GRAPH_READY,
  GRAPH_DONE,
  GRAPH_ERROR,
} from '../actions';

const defaultState = {
  isFetching: false,
  data: null,
  error: null,
};

const graph = (state = defaultState, action) => {
  switch (action.type) {
    case GRAPH_READY:
      return {
        ...state,
        isFetching: !action.data,
      };
    case GRAPH_DONE:
      return {
        ...state,
        data: action.data,
        error: null,
      };
    case GRAPH_ERROR:
      return {
        ...state,
        data: null,
        error: action.error,
      };
    default:
      break;
  }
  return state;
};

export default graph;