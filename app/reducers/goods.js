import {
  GET_GOODS,
  ADD_GOOD,
} from '../actions';

const initialState = [];

const getNextUuid = (goods) => {
  let uuid = 0;
  for (let i = 0; i < goods.length; i++) {
    if (parseInt(goods[i].uuid, 10) > uuid) {
      uuid = parseInt(goods[i].uuid, 10);
    }
  }
  return (++uuid).toString();
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