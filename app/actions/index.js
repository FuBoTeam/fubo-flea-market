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
    vars: {
      biddingData,
    },
    data: {
      mutation: `
        mutation($biddingData: AddBiddingInput!) {
          addBidding(input: $biddingData) {
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
            allBiddings {
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

export const myBiddingsQuery = () => {
  return {
    type: GRAPH,
    data: {
      query: `
        query {
          user {
            myBiddings {
              totalCount,
              edges {
                node {
                  good {
                    id,
                    title,
                    image,
                    biddingTime
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
          }
        }
      `,
    },
  };
};

export const myGoodsQuery = () => {
  return {
    type: GRAPH,
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