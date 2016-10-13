const defaultState = {
  isFetching: false,
  email: null,
  name: null,
  fakeName: null,
  error: null,
  auth: false,
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
    case 'AUTHENTICATE_COMPLETE':
      return {
        ...defaultState,
        auth: true,
      };
    default:
      break;
  }
  return state;
};

export default graph;