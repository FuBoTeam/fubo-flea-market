export const GRAPH = 'GRAPH';
export const GRAPH_READY = 'GRAPH_READY';
export const GRAPH_DONE = 'GRAPH_DONE';
export const GRAPH_ERROR = 'GRAPH_ERROR';

export const addGoodMutation = (good) => {
  return {
    type: GRAPH,
    vars: {
      good,
    },
    data: {
      mutation: `
        mutation($good: AddGoodInput!) {
          addGood(input: $good) {
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

export const goodQuery = (id) => {
  return {
    type: GRAPH,
    vars: {
      id,
    },
    data: {
      query: `
        query($id: ID!) {
          good(id: $id) {
            biddingTime,
            createdAt,
            description,
            id,
            image,
            title,
            updatedAt
          }
        }
      `,
    },
  };
};