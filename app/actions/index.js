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

export const addBidMutation = (biddingData) => {
  return {
    type: GRAPH,
    graphql: {
      action: 'GRAPH/GOOD',
      ready: 'GRAPH_READY/GOOD',
      done: 'GRAPH_MUTATION/GOOD',
      error: 'GRAPH_ERROR/GOOD',
    },
    vars: {
      biddingData,
    },
    data: {
      mutation: `
        mutation($biddingData: AddBiddingInput!) {
          addBidding(input: $biddingData) {
            bidding {
              good {
                createdAt,
                description,
                id,
                image,
                title,
                updatedAt,
                biddingTime,
                extendedCount,
                allBiddings(first: 2147483647) {
                  biddings {
                    id,
                    amount,
                    createdAt,
                    trashWord,
                    user {
                      fakeName,
                    }
                  }
                }
              }
            }
          }
        }
      `,
    },
  };
};

export const updateGoodMutation = (good) => {
  return {
    type: GRAPH,
    vars: {
      good,
    },
    data: {
      mutation: `
        mutation($good: UpdateGoodInput!) {
          updateGood(input: $good) {
            clientMutationId,
          }
        }
      `,
    },
  };
};

export const deleteGoodMutation = (id) => {
  return {
    type: GRAPH,
    vars: {
      id,
    },
    data: {
      mutation: `
        mutation($id: DeleteGoodInput!) {
          deleteGood(input: $id) {
            clientMutationId,
          }
        }
      `,
    },
  };
};

export const allGoodsQuery = () => {
  return {
    type: GRAPH,
    graphql: {
      action: 'GRAPH/ALL',
      ready: 'GRAPH_READY/ALL',
      done: 'GRAPH_DONE/ALL',
      error: 'GRAPH_ERROR/ALL',
    },
    data: {
      query: `
        query {
          allGoods{
            totalCount,
            edges {
              node {
                id,
                title,
                image,
                biddingTime,
                allBiddings(first: 2147483647) {
                  totalCount,
                  edges {
                    node {
                      amount,
                      user {
                        id,
                        fakeName
                      }
                    }
                  }
                }
              }
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
    graphql: {
      action: 'GRAPH/GOOD',
      ready: 'GRAPH_READY/GOOD',
      done: 'GRAPH_DONE/GOOD',
      error: 'GRAPH_ERROR/GOOD',
    },
    vars: {
      id,
    },
    data: {
      query: `
        query($id: ID!) {
          good(id: $id) {
            createdAt,
            description,
            id,
            image,
            title,
            updatedAt,
            biddingTime,
            extendedCount,
            allBiddings(first: 2147483647) {
              biddings {
                id,
                amount,
                createdAt,
                trashWord,
                user {
                  fakeName,
                }
              }
            }
          }
        }
      `,
    },
  };
};

export const myGoodsQuery = () => {
  return {
    type: GRAPH,
    graphql: {
      action: 'GRAPH/MYGOODS',
      ready: 'GRAPH_READY/MYGOODS',
      done: 'GRAPH_DONE/MYGOODS',
      error: 'GRAPH_ERROR/MYGOODS',
    },
    data: {
      query: `
        query {
          user {
            myGoods {
              totalCount,
              edges {
                node {
                  id,
                  title,
                  image,
                  description,
                  biddingTime,
                  allBiddings {
                    totalCount
                  }
                }
              }
            }
          }
        }
      `,
    },
  };
};

export const myBiddingsQuery = () => {
  return {
    type: GRAPH,
    graphql: {
      action: 'GRAPH/MYBIDDINGS',
      ready: 'GRAPH_READY/MYBIDDINGS',
      done: 'GRAPH_DONE/MYBIDDINGS',
      error: 'GRAPH_ERROR/MYBIDDINGS',
    },
    data: {
      query: `
        query {
          user {
            joinedGoods {
              totalCount
              edges {
                node {
                  id
                  title
                  image
                  highestBidding {
                    amount
                    user {
                      id
                      fakeName
                    }
                  }
                  biddingTime
                  allBiddings{
                    totalCount
                  }
                }
              }
            }
          }
        }
      `,
    },
  };
};

export const userQuery = () => {
  return {
    type: GRAPH,
    graphql: {
      action: 'GRAPH/USER',
      ready: 'GRAPH_READY/USER',
      done: 'GRAPH_DONE/USER',
      error: 'GRAPH_ERROR/USER',
    },
    data: {
      query: `
        query {
          user {
            email,
            fakeName,
            name,
            id,
          }
        }
      `,
    },
  };
};

export const actionClear = () => {
  return {
    type: 'GRAPH_CLEAR',
  };
};