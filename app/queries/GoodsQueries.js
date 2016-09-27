import Relay from 'react-relay';

export default {
  goods: () => {
    return Relay.QL`
      query {
        allGoods
      }
    `;
  },
};