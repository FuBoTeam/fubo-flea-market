const dateFormat = (utcDate) => {
  const date = new Date(utcDate);
  return date.toLocaleString();
};

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
    case 'GRAPH_DONE/GOOD': {
      const biddings = action.data.good.allBiddings.biddings.map((bidding) => {
        return {
          ...bidding,
          createdAt: dateFormat(bidding.createdAt),
        };
      });
      return {
        ...state,
        [id]: {
          ...state[id],
          data: {
            ...action.data.good,
            biddingTime: dateFormat(action.data.good.biddingTime),
            utcTime: action.data.good.biddingTime,
            updatedAt: dateFormat(action.data.good.updatedAt),
            createdAt: dateFormat(action.data.good.createdAt),
            allBiddings: {
              biddings,
            },
          },
          error: null,
          isFetched: true,
        },
      };
    }
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
      const biddings = newGood.allBiddings.biddings.map((bidding) => {
        return {
          ...bidding,
          createdAt: dateFormat(bidding.createdAt),
        };
      });
      return {
        ...state,
        [id]: {
          ...state[id],
          data: {
            ...newGood,
            biddingTime: dateFormat(newGood.biddingTime),
            utcTime: action.data.good.biddingTime,
            updatedAt: dateFormat(newGood.updatedAt),
            createdAt: dateFormat(newGood.createdAt),
            allBiddings: {
              biddings,
            },
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