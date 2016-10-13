const defaultState = {
  isFetched: false,
  isFetching: false,
  goods: null,
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
        goods: action.data && action.data.allGoods || null,
        error: null,
        isFetched: true,
      };
    case 'GRAPH_ERROR/ALL':
      return {
        ...state,
        goods: null,
        error: action.error,
        isFetched: true,
      };
    default:
      break;
  }
  return state;
};

export default allGoods;