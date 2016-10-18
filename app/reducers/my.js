const defaultState = {
  goods: {
    isFetched: false,
    isFetching: false,
    data: null,
    error: null,
  },
  biddings: {
    isFetched: false,
    isFetching: false,
    data: null,
    error: null,
  },
};

const my = (state = defaultState, action) => {
  switch (action.type) {
    case 'GRAPH_READY/MYBIDDINGS':
      return {
        ...state,
        biddings: {
          ...state.biddings,
          isFetching: !action.data,
        },
      };
    case 'GRAPH_READY/MYGOODS':
      return {
        ...state,
        goods: {
          ...state.goods,
          isFetching: !action.data,
        },
      };
    case 'GRAPH_DONE/MYBIDDINGS': {
      return {
        ...state,
        biddings: {
          ...state.biddings,
          data: action.data && action.data.user.joinedGoods,
          error: null,
          isFetched: true,
        },
      };
    }
    case 'GRAPH_DONE/MYGOODS':
      return {
        ...state,
        goods: {
          ...state.goods,
          data: action.data && action.data.user && action.data.user.myGoods,
          error: null,
          isFetched: true,
        },
      };
    case 'GRAPH_ERROR/MYBIDDINGS':
      return {
        ...state,
        biddings: {
          ...state.biddings,
          error: action.error,
          isFetched: true,
        },
      };
    case 'GRAPH_ERROR/MYGOODS':
      return {
        ...state,
        goods: {
          ...state.goods,
          error: action.error,
          isFetched: true,
        },
      };
    default:
      break;
  }
  return state;
};

export default my;