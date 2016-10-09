const defaultState = {
  email: null,
  name: null,
  fakeName: null,
};

const graph = (state = defaultState, action) => {
  switch (action.type) {
    case 'GRAPH_DONE':
      // FIXME
      if (state.email === null && action.data.user && action.data.user.email) {
        return {
          ...action.data.user,
        };
      }
      return state;
    case 'CLEAR_USER':
      return {
        ...defaultState,
      };
    default:
      break;
  }
  return state;
};

export default graph;