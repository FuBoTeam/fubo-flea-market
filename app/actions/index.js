export const GET_GOODS = 'GET_GOODS';

export const getGoods = (goods) => {
  return {
    type: GET_GOODS,
    goods,
  };
};