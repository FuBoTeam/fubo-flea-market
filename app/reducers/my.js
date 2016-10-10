const defaultState = {
  isFetched: false,
  isFetching: false,
  data: null,
  error: null,
};

const my = (state = defaultState, action) => {
  switch (action.type) {
    case 'GRAPH_READY/MY':
      return {
        ...state,
        isFetching: !action.data,
      };
    case 'GRAPH_DONE/MY':
      return {
        ...state,
        data: action.data,
        error: null,
        isFetched: true,
      };
    case 'GRAPH_ERROR/MY':
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

export default my;