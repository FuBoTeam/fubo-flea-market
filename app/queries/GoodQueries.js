import Relay from 'react-relay';

export default {
  good: () => {
    return Relay.QL`
      query {
        good(id: $id)
      }
    `;
  },
};