const good = (state = {}, action) => {
  const id = action.vars &&
             action.vars.biddingData &&
             action.vars.biddingData.id ||
             action.vars &&
             action.vars.id;
  switch (action.type) {
    case 'GRAPH_READY/GOOD': {
      const defaultGoodState = {
        data: null,
        error: null,
        isFetching: false,
        isFetched: false,
      };
      if (!state[id]) {
        return {
          ...state,
          [id]: {
            ...defaultGoodState,
            isFetching: !action.data,
          },
        };
      }
      return {
        ...state,
        [id]: {
          ...state[id],
          isFetching: !action.data,
        },
      };
    }
    case 'GRAPH_DONE/GOOD':
      return {
        ...state,
        [id]: {
          ...state[id],
          data: action.data.good,
          error: null,
          isFetched: true,
        },
      };
    case 'GRAPH_ERROR/GOOD':
      return {
        ...state,
        [id]: {
          ...state[id],
          error: action.error,
          isFetched: true,
        },
      };
    case 'GRAPH_MUTATION/GOOD': {
      const newGood = action.data.addBidding.bidding.good;
      return {
        ...state,
        [id]: {
          ...state[id],
          data: {
            ...newGood,
          },
          error: null,
          isFetched: true,
        },
      };
    }
    default:
      break;
  }
  return state;
};

export default good;