import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Info from './Info';
import BidTable from './BidTable';

class GoodDetail extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'GoodDetail';
  }
  render() {
    const { good } = this.props;
    return (
      <div styleName="container">
        <Info good={good} />
        <div styleName="bid-content">
          <BidTable />
        </div>
      </div>
    );
  }
}

GoodDetail.propTypes = {
  good: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default Relay.createContainer(
  CSSModules(GoodDetail, styles), {
  fragments: {
    good: () => {
      return Relay.QL`
        fragment on Good {
          biddingTime,
          createdAt,
          description,
          id,
          image,
          title,
          updatedAt
        }
      `;
    },
  },
});