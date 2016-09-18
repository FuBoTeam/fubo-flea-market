import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import GoodBlocks from './GoodBlocks';

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Market';
  }
  render() {
    const { goods, path } = this.props;
    return <GoodBlocks goods={goods} path={path} />;
  }
}

Market.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
};

export default Relay.createContainer(Market, {
  fragments: {
    goods: () => {
      return Relay.QL`
        fragment on GoodConnection {
          totalCount,
          edges {
            node {
              id,
              title,
              description
            }
          }
        }
      `;
    },
  },
});