import React, { PropTypes } from 'react';
import { container } from 'adrenaline';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Info from './Info';
import BidTableContainer from '../../containers/BidTableContainer';

class GoodDetail extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'GoodDetail';
  }
  render() {
    const { good, isFetching } = this.props;
    if (isFetching) {
      return <div>Now Loading......</div>;
    }
    return (
      <div styleName="container">
        <Info good={good} />
        <div styleName="bid-content">
          <BidTableContainer />
        </div>
      </div>
    );
  }
}

GoodDetail.propTypes = {
  good: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
};

export default container({
  variables: (props) => {
    return {
      id: props.params.id,
    };
  },
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
})(CSSModules(GoodDetail, styles));