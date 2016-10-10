const defaultState = {
  isFetched: false,
  isFetching: false,
  data: null,
  error: null,
};

const allGoods = (state = defaultState, action) => {
  switch (action.type) {
    case 'GRAPH_READY/ALL':
      return {
        ...state,
        isFetching: !action.data,
      };
    case 'GRAPH_DONE/ALL':
      return {
        ...state,
        data: action.data,
        error: null,
        isFetched: true,
      };
    case 'GRAPH_ERROR/ALL':
      return {
        ...state,
        data: null,
        error: action.error,
        isFetched: true,
      };
    default:
      break;
  }
  return state;
};

export default allGoods;