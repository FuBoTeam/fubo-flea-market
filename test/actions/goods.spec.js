import { expect } from 'chai';
import {
  GET_GOODS,
  getGoods,
  ADD_GOOD,
  addGood,
} from '../../app/actions';

describe('Actions/ goods', () => {
  describe('getGoods', () => {
    it('should create getGoods action', () => {
      expect(getGoods()).to.deep.equal({
        type: GET_GOODS,
      });
    });
  });
  describe('addGood', () => {
    it('should create addGood action', () => {
      expect(addGood({
        title: 'good1',
        description: 'good1 is good!',
      })).to.deep.equal({
        type: ADD_GOOD,
        title: 'good1',
        description: 'good1 is good!',
      });
    });
  });
});