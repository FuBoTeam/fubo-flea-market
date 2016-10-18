const defaultState = {
  isFetching: false,
  id: null,
  fakeName: null,
  error: null,
};

const graph = (state = defaultState, action) => {
  switch (action.type) {
    case 'GRAPH_READY/USER':
      return {
        ...state,
        isFetching: !action.data,
      };
    case 'GRAPH_DONE/USER':
      return {
        ...state,
        ...action.data.user,
      };
    case 'GRAPH_ERROR/USER':
      return {
        ...state,
        error: action.error,
      };
    case 'SIGN_OUT_COMPLETE':
      return {
        ...defaultState,
      };
    case 'SIGN_OUT_ERROR':
      return {
        ...defaultState,
      };
    default:
      break;
  }
  return state;
};

export default graph;