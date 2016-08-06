import { expect } from 'chai';

import goods from '../../app/reducers/goods';
import {
  GET_GOODS,
  ADD_GOOD,
} from '../../app/actions';

// Handle no-unused-expressions in linting.
// Add pkg dirty-chai to override empty
const chai = require('chai');
const dirtyChai = require('dirty-chai');
chai.use(dirtyChai);

describe('Reducers/ goods', () => {
  it('should handle initial state', () => {
    expect(
      goods(undefined, {})
    ).to.be.empty();
  });

  it('should handle GET_GOODS', () => {
    expect(
      goods([], {
        type: GET_GOODS,
      })
    ).to.be.empty();
  });

  it('should handle ADD_GOOD', () => {
    expect(
      goods([], {
        type: ADD_GOOD,
        title: 'good1',
        description: 'good1 is good!',
      })
    ).to.deep.equal([{
      uuid: '1',
      title: 'good1',
      description: 'good1 is good!',
    }]);
  });
});