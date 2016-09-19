import {
  GET_GOODS,
  ADD_GOOD,
} from '../actions';

const initialState = [{
  guid: 0,
  title: 'Cup',
  description: 'YAYA',
  subscriptPeople: [{ uuid: 1, displayName: 'Ben.liu' }],
  Bidder: null,
  imgUrl: '',
  highestBiddingMoney: 100,
  owner: { uuid: 0, displayName: 'Elaine' },
  detailUrl: '',
}, {
  guid: 1,
  title: 'Hat',
  description: 'YAYA',
  subscriptPeople: [{ uuid: 1, displayName: 'Ben.liu' }],
  Bidder: null,
  imgUrl: '',
  highestBiddingMoney: 100,
  owner: { uuid: 0, displayName: 'Elaine' },
  detailUrl: '',
}, {
  guid: 2,
  title: 'shose',
  description: 'YAYA',
  subscriptPeople: [{ uuid: 0, displayName: 'Elaine' }],
  Bidder: null,
  imgUrl: '',
  highestBiddingMoney: 100,
  owner: { uuid: 1, displayName: 'Ben.liu' },
  detailUrl: '',
}];

const getNextUuid = (goods) => {
  let guid = 0;
  for (let i = 0; i < goods.length; i++) {
    if (parseInt(goods[i].guid, 10) > guid) {
      guid = parseInt(goods[i].guid, 10);
    }
  }
  return (++guid).toString();
};

const goods = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS:
      return state;
    case ADD_GOOD:
      return [
        ...state, {
          uuid: getNextUuid(state),
          title: action.title,
          description: action.description,
        },
      ];
    default:
      return state;
  }
};

export default goods;