import good from '../../app/reducers/good';
import { dateFormat } from '../../app/utils';

// Didn't define actions in actions/index.js
const ADD_GOOD = 'GRAPH_MUTATION/GOOD';
const FETCHING_GOOD = 'GRAPH_READY/GOOD';
const GOT_GOOD = 'GRAPH_DONE/GOOD';
const ERR_GOOD = 'GRAPH_ERROR/GOOD';

describe('Reducers/ good', () => {
  it('should handle initial state', () => {
    expect(
      good(undefined, {})
    ).toEqual({});
  });

  describe('handle request begin and done', () => {
    it('should handle request begin', () => {
      expect(good({}, {
        type: FETCHING_GOOD,
        vars: {
          id: 1,
        },
        data: null,
      })).toEqual({
        1: {
          data: null,
          error: null,
          isFetching: true,
          isFetched: false,
        },
      });
    });
    it('should handle request done', () => {
      expect(good({
        1: {
          data: null,
          error: null,
          isFetching: true,
          isFetched: false,
        },
      }, {
        type: FETCHING_GOOD,
        vars: {
          id: 1,
        },
        data: {
          some: 'data object',
        },
      })).toEqual({
        1: {
          data: null,
          error: null,
          isFetching: false,
          isFetched: false,
        },
      });
    });
  });
  describe('handle fetched data or error', () => {
    it('should handle fetched data', () => {
      const mockData = {
        description: 'some description',
        allBiddings: {
          biddings: [
            { createdAt: '2016-10-20 08:03:00 UTC' },
            { createdAt: '2016-10-20 08:04:00 UTC' },
          ],
        },
        biddingTime: '2016-10-20 08:00:00 UTC',
        updatedAt: '2016-10-20 08:01:00 UTC',
        createdAt: '2016-10-20 08:02:00 UTC',
      };
      const result = {
        1: {
          data: {
            description: mockData.description,
            biddingTime: dateFormat(mockData.biddingTime),
            utcTime: mockData.biddingTime,
            updatedAt: dateFormat(mockData.updatedAt),
            createdAt: dateFormat(mockData.createdAt),
            allBiddings: {
              biddings: [
                { createdAt: dateFormat(mockData.allBiddings.biddings[0].createdAt) },
                { createdAt: dateFormat(mockData.allBiddings.biddings[1].createdAt) },
              ],
            },
          },
          error: null,
          isFetched: true,
          isFetching: true,
        },
      };
      expect(good({
        1: {
          data: null,
          error: null,
          isFetching: true,
          isFetched: false,
        },
      }, {
        type: GOT_GOOD,
        vars: {
          id: 1,
        },
        data: {
          good: mockData,
        },
      })).toEqual(result);
    });
    it('should handle errors', () => {
      expect(good({
        1: {
          data: null,
          error: null,
          isFetching: true,
          isFetched: false,
        },
      }, {
        type: ERR_GOOD,
        vars: {
          id: 1,
        },
        error: 'some error',
      })).toEqual({
        1: {
          data: null,
          error: 'some error',
          isFetching: true,
          isFetched: true,
        },
      });
    });
  });
  it('should handle add good', () => {
    expect({}, {
      type: ADD_GOOD,
      data: {
        addBidding: {
          bidding: {
            good: {
              allBiddings: {
                biddings: [
                  { createdAt: '2017/01/01 00:20:00' },
                  { createdAt: '2017/01/01 00:10:00' },
                ],
              },
              biddingTime: '2017/01/01 00:20:00',
              updatedAt: '2017/01/01 00:20:00',
              createdAt: '2017/01/01 00:00:00',
            },
          },
        },
      },
    }).toEqual({

    });
  });
});
