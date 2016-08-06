export const GET_GOODS = 'GET_GOODS';
export const ADD_GOOD = 'ADD_GOOD';

export const getGoods = () => {
  return {
    type: GET_GOODS,
  };
};

// temporary defined:
// good = {
//   title: 'title',
//   description: 'description',
// }

export const addGood = (good) => {
  return {
    ...good,
    type: ADD_GOOD,
  };
};