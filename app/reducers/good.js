const defaultState = {
  isFetching: false,
  data: null,
  error: null,
};

const good = (state = defaultState, action) => {
  switch (action.type) {
    case 'GRAPH_READY/GOOD':
      return {
        ...state,
        isFetching: !action.data,
      };
    case 'GRAPH_DONE/GOOD':
      return {
        ...state,
        data: {
          ...state.data,
          [action.data.good.id]: {
            ...action.data.good,
          },
        },
        error: null,
      };
    case 'GRAPH_ERROR/GOOD':
      return {
        ...state,
        data: {
          ...state.data,
        },
        error: action.error,
      };
    case 'GRAPH_MUTATION/GOOD': {
      const newGood = action.data.addBidding.bidding.good;
      return {
        ...state,
        data: {
          ...state.data,
          [newGood.id]: {
            ...newGood,
          },
        },
        error: null,
      };
    }
    default:
      break;
  }
  return state;
};

export default good;