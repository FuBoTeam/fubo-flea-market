export const GET_GOODS = 'GET_GOODS';
export const ADD_GOOD = 'ADD_GOOD';
export const GRAPH = 'GRAPH';

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

export const addGoodMutation = (good) => {
  return {
    type: GRAPH,
    data: {
      mutation: `
        mutation {
          addGood(input: ${good}) {
            good {
              id,
              title,
              description,
              image
            }
          }
        }
      `,
    },
  };
};