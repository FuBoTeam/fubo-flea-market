import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Info from './Info';
import BidTableContainer from '../../containers/BidTableContainer';

class GoodDetail extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'GoodDetail';
  }
  componentWillMount() {
    const { getGood, params } = this.props;
    return getGood(params.id);
  }
  render() {
    const { isFetching, good } = this.props;
    if (isFetching) {
      return <div>Now Fetching......</div>;
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
  isFetching: PropTypes.bool.isRequired,
  getGood: PropTypes.func.isRequired,
  good: PropTypes.object,
  params: PropTypes.object.isRequired,
};

export default CSSModules(GoodDetail, styles);