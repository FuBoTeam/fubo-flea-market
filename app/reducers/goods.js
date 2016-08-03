import { GET_GOODS } from '../actions';

const initialState = [
  {
    uuid: '1',
    title: 'one',
    description: 'des1',
  },
  {
    uuid: '2',
    title: 'two',
    description: 'des2',
  },
];

const goods = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS:
      return state;
    default:
      return state;
  }
};

export default goods;